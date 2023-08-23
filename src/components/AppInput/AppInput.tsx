import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { PromptBlock } from "./AppInput.styled";
import {
  checkIsIP,
  checkIsPrivateIP,
  urlValidation,
} from "../../utils/adressTypeDetector";
import { toast } from "react-toastify";

const AppInput = () => {
  const [string, setString] = useState("");

  const handleButtonClick = () => {
    if (checkIsIP(string)) {
      if (checkIsPrivateIP(string)) {
        toast.warn("Invalid or Private IP");
        return;
      }
      console.log("Good IP, server request");
      return;
    }

    if (urlValidation(string)) {
      console.log("Correct Domain name, server request");
    } else {
      toast.warn("Incorrect Domain Name");
    }
  };

  return (
    <PromptBlock>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setString(e.target.value);
        }}
        value={string}
        sx={{ width: "100%", marginRight: "10px" }}
        label="Eneter IP adress or URL"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Search
      </Button>
    </PromptBlock>
  );
};

export default AppInput;
