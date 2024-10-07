import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import UserDetailContext from "../../context/UserDetailContext";
import useProperties from "../../hooks/useProperties";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { createProperty } from "../../utils/apiCalls/api";

const Facilities = ({
  propertyDetails,
  setPropertiesDetails,
  prevStep,
  setActive,
  setOpened,
}) => {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails?.facilities?.bedrooms,
      parkings: propertyDetails?.facilities?.parkings,
      bathrooms: propertyDetails?.facilities?.bathrooms,
    },
    validate: {
      bedrooms: (value) =>
        value < 0 ? "The property must have at least 1 bedroom" : null,
      bathrooms: (value) =>
        value < 0 ? "The property must have at least 1 bathroom" : null,
    },
  });
  //getting values from form
  const { bedrooms, parkings, bathrooms } = form.values;

  //function to handle submit
  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertiesDetails((prev) => ({
        ...prev,
        facilities: {
          bedrooms,
          parkings,
          bathrooms,
        },
      }));
      mutate();
    }
  };

  //submit to backend
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);

  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createProperty(
        {
          ...propertyDetails,
          facilities: { bedrooms, parkings, bathrooms },
        },
        token
      ),
    onError: ({ response }) => toast.error(response.error.message),
    onSettled: () => {
      toast.success("Property added successfully");
      setPropertiesDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bathrooms: 0,
          bedrooms: 0,
          parkings: 0,
        },
        userEmail: user && user.email,
      });
      setActive(0);
      setOpened(false);
      refetchProperties();
    },
  });

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="No of Bedrooms"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          label="No of Parkings"
          min={0}
          {...form.getInputProps("parkings")}
        />
        <NumberInput
          withAsterisk
          label="No of Bathrooms"
          min={0}
          {...form.getInputProps("bathrooms")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="blue">
            {isLoading ? "Creating..." : "Add property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
