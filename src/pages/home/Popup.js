import React, {useState} from "react";
import "./Popup.css";
import { Button, Stack} from "@mui/material";
import Logo from "../../components/header/Logo";




const Popup = (props) => {
  const[isShow, setIsShow] = useState(true);
  const showcase=(window.localStorage.getItem("show")===null);

  
  function toggle(){
    setIsShow(!isShow)
    document.getElementById("pop").style.visibility="hidden";
    window.localStorage.setItem("show",JSON.stringify(isShow));
  }

  return (
    <div>
    {showcase &&
    (<div id = 'pop' style={{visibility:'visible'}}>
      <div className="popup-box">
        <div className="box">
        <b className="brand">Hawke Prohibition Distilleries</b><br></br>
        <p style={{margin: "20px"}}></p>
        <Logo
                imageUrl="/assets/img/logo/logo.webp"
                logoClass="logo-hm-9"
          />
          <p style={{margin: "20px"}}></p>
          <b className="title">Are you of legal drinking alcohol age?</b><br></br>
          <p style={{margin: "40px"}}></p>
          <Stack justifyContent="center" direction="row" spacing={5} alignItems="center">
          <Button variant="contained" size="large" onClick={toggle}>Yes</Button>
          <Button variant="contained" size="large" href = "https://www.drinksmart.com/">No</Button><br></br>
          </Stack>
          <p style={{margin: "40px"}}></p>
          <p className="word">By click the <b>YES</b> button, you certify that you are of legal drinking alcohol age in the state in which you reside</p>
          
        </div>
      </div>
    </div>)}
    </div>
  )
}

export default Popup