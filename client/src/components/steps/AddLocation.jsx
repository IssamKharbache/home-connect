import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../../hooks/useCountries";
import Map from "../map/Map";
import { SlArrowRight } from "react-icons/sl";

const AddLocation = ({
  propertyDetails,
  setPropertiesDetails,
  nextStep,
  setOpened,
}) => {
  const { getAll } = useCountries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },
    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });
  //getting values from form
  const { country, city, address } = form.values;
  //function to handle submit
  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertiesDetails((prev) => ({
        ...prev,
        country,
        city,
        address,
      }));
      nextStep();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {/* left side */}
      <div
        className="flexCenter"
        style={{
          justifyContent: "space-between",
          gap: "3rem",
          marginTop: "2rem",
          flexDirection: "row",
        }}
      >
        {/* inputs */}
        <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
          />
          <TextInput
            w={"100%"}
            label="City"
            withAsterisk
            {...form.getInputProps("city", { type: "input" })}
          />
          <TextInput
            w={"100%"}
            label="Address"
            withAsterisk
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>

        {/* right side */}
        <div style={{ flex: 1 }}>
          <Map address={address} city={city} country={country} />
        </div>
      </div>
      <Group justify="center" mt="xl">
        <Button onClick={() => setOpened(false)} variant="outline" color="red">
          Cancel
        </Button>

        <Button onClick={handleSubmit}>
          <SlArrowRight size={15} />
        </Button>
      </Group>
    </form>
  );
};

export default AddLocation;
