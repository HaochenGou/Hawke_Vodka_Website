import React, {useState, useEffect} from "react";
import "./Popup.css"
import { Button, Modal} from "@mui/material";


const Popup = (props) => {
  const[isVerify, setIsVerify] = useState(false)
  let popup = true
  useEffect(() =>{localStorage.setItem("verify",JSON.stringify('isVerify'));},[isVerify]);
  const verify = localStorage.getItem("verify");
  if (verify){
    popup = false

  }
  

  return (
    <div>
    {popup
      ?<Modal
      onClose={false}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="popup-box">
        <div className="box">
          <Button variant="contained" size="small" onClick={setIsVerify}>Agree</Button>{' '}
          <Button variant="contained" size="small" href = "https://www.drinksmart.com/">Disagree</Button>

          {props.content}
        </div>
      </div>
      </Modal>
      :<div></div>
    }
    </div>
  )
}

export default Popup