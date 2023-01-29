import React, {useState, useEffect} from 'react';
import makeEmailHREF from './functions/makeEmailHREF';
import makePhoneHREF from './functions/makePhoneHREF';
import "./HREFerPage.css";

const HREFerPage = () => {

  const [address, setAddress] = useState({
    input: '',
    type: 0,
  });

  const [output, setOutput] = useState('Invalid Address');

  useEffect(() => {

    if (address.type === 1) {
      setOutput(makeEmailHREF(address.input));
    }

    if (address.type === 0) {
      setOutput(makePhoneHREF(address.input));
    }
   
  }, [address])


  return (
    <div className="page">
      <h3 className="page-header">Make an email or phone number an href tag</h3>
      <div className="page-content">
        <div className="href-type-switch-buttons">
          <button
            className={"href-switch-" + address.type === 0 ? 'selected' : 'unselected'}
            onClick={() => setAddress({...address, type: 0})}
          >
            Phone Number
          </button>
          <button
            className={"href-switch-" + address.type === 1 ? 'selected' : 'unselected'}
            onClick={() => setAddress({...address, type: 1})}
          >
            Email Address
          </button>
        </div>
        <input
          className="href-page-input"
          type="text"
          value={address.input}
          onChange={(e) => setAddress({...address, input: e.target.value})}
        />
        <div className="info-box">
          <ul>
            <li>
              Type: {address.type === 0 ? "Phone Number" : "Email"}
            </li>
            <li>
              Input: {address.input}
            </li>
          </ul>
          <div className="href-output-screen">
            {output}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HREFerPage