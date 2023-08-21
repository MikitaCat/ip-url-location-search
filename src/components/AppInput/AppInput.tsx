import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { PromptBlock } from "./AppInput.styled";

const AppInput = () => {
  const [string, setString] = useState("");
  return (
    <PromptBlock>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setString(e.target.value);
          console.log(string);
        }}
        value={string}
        sx={{ width: "100%", marginRight: "10px" }}
        label="Eneter IP adress or URL"
        variant="outlined"
      />
      <Button variant="contained">Search</Button>
    </PromptBlock>
  );
};

export default AppInput;
