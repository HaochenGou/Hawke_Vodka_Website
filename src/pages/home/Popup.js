import React from "react"
import "./Popup.css"
import { Button} from "@mui/material";


const Popup = (props) => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  return (
    <div className="popup-box">
      <div className="box">
        <Button variant="primary" onClick={close}>Agree</Button>{' '}
        <Button variant="primary" onclick="location.href = 'https://www.drinksmart.com/';">Disagree</Button>

        {props.content}
      </div>
    </div>
  )
}

export default Popup