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
      </ul>
    </div>
  );
}
