import React from "react";
import { Button, TextField, FormControl, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function InputSearch({onInputChange, onSearch, locationText}) {
  const classes = useStyles();
  return (
    <div>
      <Container fixed>
        <FormControl fullWidth>
          <TextField className={classes.textField} label="Place" onChange={onInputChange} value={locationText}/>
          <Button onClick={onSearch} color="primary">Search</Button>
        </FormControl>
      </Container>
    </div>
  );
}
