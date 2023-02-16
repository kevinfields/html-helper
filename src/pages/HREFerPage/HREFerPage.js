import React, {useState, useEffect} from 'react';
import EmailOptionButtons from './components/EmailOptionButtons';
import HREFTypeSwitchButtons from './components/HREFTypeSwitchButtons';
import InfoBox from './components/InfoBox';
import makeEmailHREF from './functions/makeEmailHREF';
import makePhoneHREF from './functions/makePhoneHREF';
import "./HREFerPage.css";

const HREFerPage = () => {

  const [address, setAddress] = useState({
    input: '',
    type: 0,
  });

  const [output, setOutput] = useState('Invalid Address');

  const addSubject = () => {
    console.log('add subject here');
  };

  const addCCs = () => {
    console.log('add ccs here');
  }

  useEffect(() => {

    if (address.type === 1) {
      setOutput(makeEmailHREF(address.input));
    }

    if (address.type === 0) {
      setOutput(makePhoneHREF(address.input));
    }
   
  }, [address.type])


  return (
    <div className="page">
      <h3 className="page-header">Make an email or phone number an href tag</h3>
      <div className="page-content">
        <HREFTypeSwitchButtons
          address={address}
          addressSetterRef={(addrObj) => setAddress(addrObj)}
        />
        { 
          address.type === 1 ?
            <EmailOptionButtons
              addSubject={() => addSubject()}
              addCCs={() => addCCs()}
            />
          :
            null
        }
        <input
          className="href-page-input"
          type="text"
          value={address.input}
          onChange={(e) => setAddress({...address, input: e.target.value})}
        />
        <InfoBox
          address={address}
          output={output}
        />
      </div>
    </div>
  )
}

export default HREFerPage