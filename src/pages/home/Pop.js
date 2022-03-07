import React from "react";
import "./Popup.css"
import { Button} from "@mui/material";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
        <Button variant="contained" size="small" onClick={props.handleClose}>Yes</Button>{' '}
        <Button variant="contained" size="small" href = "https://www.drinksmart.com/">No</Button>

      </div>
    </div>
  );
};

export default Popup;
