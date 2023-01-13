import React, { useState } from "react";
import CryptoJS from "crypto-js";

export default function EncodeSHA256() {
  const [data, setData] = useState("");
  const [encodedData, setEncodedData] = useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encoded = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
    setEncodedData(encoded);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mt-5">
              <form onSubmit={handleSubmit} className="p-2 text-center">
                <label className="text-center">
                  Masukan kode bodohmu yang akan di encode
                  <input className="form-control me-2" type="text" value={data} onChange={handleChange} />
                </label>
                <button className="btn btn-primary m-2" type="submit">Encode</button>
              </form>
              <pre>hasilnya: {encodedData}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
