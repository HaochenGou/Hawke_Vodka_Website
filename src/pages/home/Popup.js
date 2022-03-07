import React, {useState, useEffect} from "react";
import "./Popup.css"





const Popup = (props) => {
  const[isVerify, setIsVerify] = useState(false);
  useEffect(() =>{localStorage.setItem("verify",JSON.stringify('verify'));},[isVerify]);
  const verify = localStorage.getItem("verify");
  const toggle=()=>{
    setIsVerify(true);
  }
 
 
  return (
    <div>
    {verify &&
      <Popup
      content={<>
        <b>Are you of legal drinking alcohol age?</b>
        <p>By click the Yes button, you certify that you are of legal drinking alcohol age in the state in which you reside</p>
      </>}
      handleClose={toggle}/>}
    </div>
  )
}

export default Popup