import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function ValidateSHA256() {
  const [data, setData] = useState('');
  const [encodedData, setEncodedData] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encoded = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
    setEncodedData(encoded);
  };

  const handleCompare = (event) => {
    event.preventDefault();
    const inputData = event.target.inputData.value;
    const encodedInput = CryptoJS.SHA256(inputData).toString(CryptoJS.enc.Hex);
    if (encodedInput === encodedData) {
      setResult('Data cocok');
    } else {
      setResult('Data tidak cocok');
    }
  };

  return (
    <div className='container' >
        <div className="row">
            <div className="col-md-12">
            <form onSubmit={handleSubmit} className="mt-5">
        <label>
          Data:
          <input type="text" value={data} onChange={handleChange} />
        </label>
        <button type="submit">Encode</button>
      </form>
      <p>Encoded data: {encodedData}</p>
      <form onSubmit={handleCompare}>
        <label>
          Data yang tidak dikenal:
          <input type="text" name="inputData" />
        </label>
        <button type="submit">Compare</button>
      </form>
      <p>{result}</p>
            </div>
        </div>
        
     
    </div>
  );
}

export default ValidateSHA256;
