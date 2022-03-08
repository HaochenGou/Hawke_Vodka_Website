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
          <p style={{margin: "20px"}}></p>
          <Button variant="contained" size="large" onClick={toggle}>Yes</Button>
          <Button variant="contained" size="large" href = "https://www.drinksmart.com/">No</Button><br></br>
          <p style={{margin: "40px"}}></p>
          <p className="word">By click the <b>YES</b> button, you certify that you are of legal drinking alcohol age in the state in which you reside</p>
          
        </div>
      </div>
    </div>)}
    </div>
  )
}

export default Popup