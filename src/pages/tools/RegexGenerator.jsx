import React, { useState } from 'react';

function RegexGenerator() {
  const [inputString, setInputString] = useState('');
  const [selectedType, setSelectedType] = useState('string');
  const [regexString, setRegexString] = useState('');

  function handleInputChange(event) {
    setInputString(event.target.value);
    switch (selectedType) {
      case 'string':
        setRegexString(`/${event.target.value}/`);
        break;
      case 'email':
        setRegexString(`/^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@${event.target.value}$/`);
        break;
      case 'number':
        setRegexString(`/^${event.target.value}$/`);
        break;
      default:
        setRegexString('');
    }
  }

  function handleSelectChange(event) {
    setSelectedType(event.target.value);
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center p-5 mt-5">
        <select value={selectedType} onChange={handleSelectChange}>
        <option value="string">String</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
      </select>
      <br />
      <input
      className='form-control'
        type="text"
        placeholder="Enter string"
        value={inputString}
        onChange={handleInputChange}
      />
      <p>Regex: {regexString}</p>
        </div>
      </div>
     
    </div>
  );
}

export default RegexGenerator;
