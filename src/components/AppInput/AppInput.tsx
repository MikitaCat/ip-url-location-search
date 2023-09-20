import { Button, TextField } from "@mui/material";
import React from "react";
import { PromptBlock } from "./AppInput.styled";
import { AppInputProps } from "./AppInputProps";

const AppInput = ({ value, setValue, buttonClick }: AppInputProps) => {
  const handleInpupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    buttonClick();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      buttonClick();
    }
  };

  return (
    <PromptBlock>
      <TextField
        onKeyDown={handleInputKeyDown}
        onChange={handleInpupChange}
        value={value}
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
