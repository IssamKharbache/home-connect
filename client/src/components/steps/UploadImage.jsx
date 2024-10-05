import React, { useEffect, useRef, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import "./uploadimage.css";
import { Button, Group } from "@mantine/core";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const UploadImage = ({
  nextStep,
  propertyDetails,
  setPropertiesDetails,
  prevStep,
}) => {
  const [imageUrl, setImageUrl] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handleNext = () => {
    setPropertiesDetails((prev) => ({ ...prev, image: imageUrl }));
    nextStep();
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dehf7efuh",
        uploadPreset: "ztwqueoa",
        maxFiles: 1,
      },
      (err, result) => {
        if (result && result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  }, []);
  return (
    <div className="flexColCenter uploapWrapper">
      {!imageUrl ? (
        <div
          onClick={() => widgetRef.current.open()}
          className="flexColCenter uploadZone"
        >
          <BsCloudUpload size={50} color="grey" />
          <span>Upload image</span>
        </div>
      ) : (
        <div onClick={() => widgetRef.current.open()} className="uploadedImage">
          <img src={imageUrl} alt="property image" />
        </div>
      )}
      <Group justify="center" mt="xl">
        <Button onClick={prevStep} variant="outline" color="orange">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <SlArrowLeft size={15} />
            Back
          </div>
        </Button>

        <Button disabled={!imageUrl} onClick={handleNext}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            Next
            <SlArrowRight size={15} />
          </div>
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;
