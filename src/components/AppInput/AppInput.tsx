import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { PromptBlock } from "./AppInput.styled";
import { adressTypeDetector } from "../../utils/adressTypeDetector";

const AppInput = () => {
  const [string, setString] = useState("");

  const handleButtonClick = () => {
    adressTypeDetector(string);
  };

  return (
    <PromptBlock>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setString(e.target.value);
        }}
        value={string}
        sx={{ width: "100%", marginRight: "10px" }}
        label="Eneter IP adress or URL with protocol flag"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Search
      </Button>
    </PromptBlock>
  );
};

export default AppInput;
