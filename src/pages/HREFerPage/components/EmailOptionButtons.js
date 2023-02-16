import React from 'react'

//TODO: ADD BUTTONS TO ADD AN SUBJECT OR BODY OR CCS TO AN EMAIL
const EmailOptionButtons = (props) => {
  return (
    <div className="email-options">
      <button
        className="email-option"
        onClick={() => props.addSubject()}
      >
        Add a Subject
      </button>
      <button
        className="email-option"
        onClick={() => props.addCCs()}
      >
        CC Someone
      </button>
    </div>
  )
}

export default EmailOptionButtons