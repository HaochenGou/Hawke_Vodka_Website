import React, {useState, useEffect} from "react";
import "./Popup.css"
import { Button, Modal} from "@mui/material";


const Popup = (props) => {
  const[isVerify, setIsVerify] = useState(false)
  useEffect(() =>{localStorage.setItem("verify",JSON.stringify(isVerify));},[isVerify]);
  const verify = localStorage.getItem("verify");
  // if (verify){

  // }
  

  return (
    <Modal
    onClose={false}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    <div className="popup-box">
      <div className="box">
        <Button variant="contained" size="small" onClick={true}>Agree</Button>{' '}
        <Button variant="contained" size="small" href = "https://www.drinksmart.com/">Disagree</Button>

        {props.content}
      </div>
    </div>
    </Modal>
  )
}

export default Popup