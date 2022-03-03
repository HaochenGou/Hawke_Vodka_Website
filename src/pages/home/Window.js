import React, { useState as uState } from "react"
import Popup from "./Popup"
import "./Popup.css"

function Window({ title, overview, vote_average }) {
  const [isOpen, setIsOpen] = uState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {isOpen && (
        <Popup
          content={
            <>
              <b>{title}</b>
              <p>Some text</p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  )
}

export default Window