import { Button, Container, Group, Modal, Stepper } from "@mantine/core";
import { useState } from "react";
import AddLocation from "../steps/AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../steps/UploadImage";
import PropertyDetails from "../steps/PropertyDetails";
import Facilities from "../steps/Facilities";

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();
  const [propertyDetails, setPropertiesDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    userEmail: user?.email,
    facilities: {
      bathrooms: 0,
      bedrooms: 0,
      parkings: 0,
    },
  });
  //function to handle next step
  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };
  //function to handle prev step
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };
  //function to
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="Location" description="Address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertiesDetails={setPropertiesDetails}
              setOpened={setOpened}
            />
          </Stepper.Step>
          <Stepper.Step label="Media" description="Property Image">
            <UploadImage
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertiesDetails={setPropertiesDetails}
              prevStep={prevStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Informations" description="Property Details">
            <PropertyDetails
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertiesDetails={setPropertiesDetails}
              prevStep={prevStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Facilities" description="Property Facilities">
            <Facilities
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertiesDetails={setPropertiesDetails}
              prevStep={prevStep}
              setOpened={setOpened}
              setActive={setActive}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to prev step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
