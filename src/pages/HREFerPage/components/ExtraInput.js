import React from 'react'

const ExtraInput = (props) => {
  return (
    <div className={`extra-input-opts-${props.type}`}>
      { props.type === 'subject' ?
        <input 
          className="extra-input"
          type="text"
          onChange={(e) => props.editSubject(e.target.value)}
        />
      :
        <input
          type="text"
          className="extra-input"
          onChange={(e) => props.editCCs(e.target.value)}
        />
      } 
    </div>
  )
}

export default ExtraInput