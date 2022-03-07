import React, {useState, useEffect} from "react";
import "./Popup.css"
import { Button} from "@mui/material";


const Popup = (props) => {
  const[isVerify, setIsVerify] = useState(true)
  useEffect(() =>{localStorage.setItem("verify",JSON.stringify('verify'));},[isVerify]);
  const verify = localStorage.getItem("verify");
  const toggle=()=>{
    setIsVerify(verify);
  }


  

  return (
    <div>
    {toggle &&
      (<div className="popup-box">
        <div className="box">
          <b>Are you of legal drinking alcohol age?</b>
          <p>By click the Yes button, you certify that you are of legal drinking alcohol age in the state in which you reside</p>
          <Button variant="contained" size="small" onClick={localStorage.setItem()}>Yes</Button>{' '}
          <Button variant="contained" size="small" href = "https://www.drinksmart.com/">No</Button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Popup