import { useForm } from "@mantine/form";
import React from "react";
import { validateString } from "../../utils/common";
import {
  Box,
  Button,
  Group,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const PropertyDetails = ({
  propertyDetails,
  setPropertiesDetails,
  prevStep,
  nextStep,
}) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails?.title,
      description: propertyDetails?.description,
      price: propertyDetails?.price,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) =>
        value < 1000 ? "Price must be greater than 1000" : null,
    },
  });
  //getting values from form
  const { title, description, price } = form.values;
  //function to handle submit
  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertiesDetails((prev) => ({
        ...prev,
        title,
        description,
        price,
      }));
      nextStep();
    }
  };
  return (
    <Box maw={"50%"} mx="auto" my="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <TextInput
          withAsterisk
          label="Title"
          w={"100%"}
          placeholder="Property title"
          {...form.getInputProps("title")}
        />
        <Textarea
          placeholder="Property description"
          label="Description"
          withAsterisk
          {...form.getInputProps("description")}
        />
        <NumberInput
          withAsterisk
          label="Price"
          placeholder="1000$"
          min={0}
          {...form.getInputProps("price")}
        />
        <Group justify="center" mt="xl">
          <Button onClick={prevStep} variant="outline" color="orange">
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <SlArrowLeft size={15} />
              Back
            </div>
          </Button>

          <Button type="submit">
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              Next
              <SlArrowRight size={15} />
            </div>
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default PropertyDetails;
