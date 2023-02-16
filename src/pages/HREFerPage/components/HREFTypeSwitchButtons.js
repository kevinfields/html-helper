import React from 'react'

const HREFTypeSwitchButtons = (props) => {
  return (
    <div className="href-type-switch-buttons">
          <button
            className={"href-switch-" + props.address.type === 0 ? "selected" : "unselected"}
            onClick={() => props.addressSetterRef({...props.address, type: 0})}
          >
            Phone Number
          </button>
          <button
            className={"href-switch-" + props.address.type === 1 ? "selected" : "unselected"}
            onClick={() => props.addressSetterRef({...props.address, type: 1})}
          >
            Email Address
          </button>
        </div>
  )
}

export default HREFTypeSwitchButtons