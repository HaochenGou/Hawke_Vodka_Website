import React from "react"
import "./Popup.css"
import { Button } from "react-bootstrap"

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <Button variant="primary">Agree</Button>{' '}
        <Button variant="primary">Disagree</Button>
        {props.content}
      </div>
    </div>
  )
}

export default Popup