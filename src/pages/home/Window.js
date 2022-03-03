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
      <input
        className="btn2"
        type="button"
        value="Read More"
        onClick={togglePopup}
      />
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