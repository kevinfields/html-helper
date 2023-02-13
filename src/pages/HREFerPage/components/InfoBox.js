import React from 'react'

const InfoBox = (props) => {
  return (
    <div className="info-box">
      <ul>
        <li>
          Type: {props.address.type === 0 ? "Phone Number" : "Email"}
        </li>
        <li>
          Input: {props.address.input}
        </li>
      </ul>
      <div className="href-output-screen">
        {props.output}
      </div>
    </div>
  )
}

export default InfoBox