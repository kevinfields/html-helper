import React, {useState, useEffect} from 'react';
import EmailOptionButtons from './components/EmailOptionButtons';
import ExtraInput from './components/ExtraInput';
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

  const [ccs, setCCs] = useState({
    editing: false,
    input: '',
  });

  const [subject, setSubject] = useState({
    editing: false,
    input: '',
  })

  const [output, setOutput] = useState('Invalid Address');

  const addSubject = () => {
    setSubject({
      ...subject,
      editing: true,
    });
  };

  const addCCs = () => {
    setCCs({
      ...ccs,
      editing: true,
    });
  };

  useEffect(() => {

    if (address.type === 1) {
      if (subject.input !== '') {
        setOutput(makeEmailHREF(address.input, subject.input));
      } else {
      setOutput(makeEmailHREF(address.input));
      }
    }

    if (address.type === 0) {
      setOutput(makePhoneHREF(address.input));
    }
   
  }, [address, subject, ccs])


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
            <div className="add-options-screen">
              <EmailOptionButtons
                addSubject={() => addSubject()}
                addCCs={() => addCCs()}
              />
              {
                subject.editing ?
                  <ExtraInput
                    type="subject"
                    editSubject={(newSubject) => setSubject({...subject, input: newSubject})}
                  />
                : ccs.editing ?
                  <ExtraInput
                    type="ccs"
                    editCCs={(newCC) => setCCs({...ccs, input: newCC})}
                  />
                : null
              }
            </div>
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