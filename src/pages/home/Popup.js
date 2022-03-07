import React, {useState, useEffect} from "react";
import "./Popup.css"
import { Button} from "@mui/material";




const Popup = (props) => {
  const[isShow, setIsShow] = useState(true);

 
  const toggle=()=>{
    setIsShow(!isShow)
  }

  return (
    <div>
    {isShow &&
      (
      <div className="popup-box">
        <div className="box">
          <b>Are you of legal drinking alcohol age?</b>
          <p>By click the Yes button, you certify that you are of legal drinking alcohol age in the state in which you reside</p>
          <Button variant="contained" size="small" onClick={toggle}>Yes</Button>
          <Button variant="contained" size="small" href = "https://www.drinksmart.com/">No</Button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Popup