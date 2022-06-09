import React, { useRef, useState } from "react";
import "./FileUpload.css";

export const FileUpload = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const actions = {
    select: "Select file",
    upload: "Upload",
  };

  const nativeFileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    nativeFileInputRef.current && nativeFileInputRef.current.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileForUpload = e.target.files && e.target.files[0];
    setSelectedFile(fileForUpload);
  };

  return (
    <div className="kui-file-upload">
      {/* hidden input element */}
      <input
        type="file"
        style={{ display: "none" }}
        ref={nativeFileInputRef}
        onChange={handleChange}
      />
      <button
        className={`kui-file-upload__button ${selectedFile ? "selected" : ""}`}
        onClick={handleClick}
      >
        {selectedFile ? (
          <img src="./images/upload-icon.png" alt={actions.upload} />
        ) : (
          <img src="./images/select-icon.png" alt={actions.select} />
        )}

        <span className="kui-file-upload__action">
          {selectedFile ? actions.upload : actions.select}
        </span>
      </button>

      <span className="kui-file-upload__status">
        {selectedFile ? selectedFile.name : "No file selected"}
      </span>
    </div>
  );
};

export default FileUpload;
