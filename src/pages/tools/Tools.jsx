import React from "react";
import { Link } from "react-router-dom";

export default function Tools() {
  return (
    <div>
      <h1>List Tools</h1>
      <ul>
        <li>
          <Link to={"/tools/caesar-cipher"}>Caesar Cipher</Link>
        </li>
        <li>
          <Link to={"/tools/encode-sha256"}>Encode SHA256</Link>
        </li>
        <li>
          <Link to={"/tools/validate-sha256"}>Validate SHA256</Link>
        </li>
        <li>
          <Link to={"/tools/regex"}>Regex absurd</Link>
        </li>
      </ul>
    </div>
  );
}
