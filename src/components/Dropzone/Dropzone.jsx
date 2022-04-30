import React from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";

const DropzoneField = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (file) => onDrop(file[0]),
    accept: { "image/jpeg": [], "image/png": [] },
    multiple: false,
  });

  return (
    <section>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="text_drop">Drag image file here or</p>
        <p className="text_drop">browse from your computer</p>
      </div>
    </section>
  );
};

export default DropzoneField;
