import React, {useState, useEffect} from "react";
import "./Popup.css"
import { Button} from "@mui/material";




const Popup = (props) => {
  const[isShow, setIsShow] = useState(true);
  const showcase=(window.localStorage.getItem("show")===null)

  
  function toggle(){
    setIsShow(!isShow)
    document.getElementById("pop").style.visibility="hidden";
    window.localStorage.setItem("show",JSON.stringify(isShow))
  }

  return (
    <div>
    {showcase &&
    (<div id = 'pop' style={{visibility:'visible'}}>
      <div className="popup-box">
        <div className="box">
          <b className="title">Are you of legal drinking alcohol age?</b><br></br>
          <Button variant="contained" size="small" onClick={toggle}>Yes</Button>
          <Button variant="contained" size="small" href = "https://www.drinksmart.com/">No</Button><br></br>
          <p className="word">By click the <b>YES</b> button, you certify that you are of legal drinking alcohol age in the state in which you reside</p>
          
        </div>
      </div>
    </div>)}
    </div>
  )
}

export default Popup