import React, { useState } from "react";

export default function CaesarCipher() {
  const [encrypt, setEncrypt] = useState({
    encryptInitial: "",
    encryptKey: 0,
    encryptResult: "",
  });

  const encryptNow = (str, key) => {
    let alphaLow = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let alphaHigh = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    // Merubah string menjadi pecahan array (Langkah 1)
    let strArr = str.split("");

    // Mendapatkan key dari huruf (Langkah 2)
    let strMap = strArr.map((strA) => {
      // Jika input adalah huruf
      if (/[a-zA-Z]/.test(strA)) {
        // Jika input adalah huruf kecil
        if (/[a-z]/.test(strA)) {
          let strMap = alphaLow.findIndex((alp) => {
            return alp == strA;
          });
          return [strMap, "low"];
        }

        // Jika input adalah huruf besar
        else {
          let strMap = alphaHigh.findIndex((alp) => {
            return alp == strA;
          });
          return [strMap, "high"];
        }
      }

      // Jika input bukanlah huruf
      else {
        return [26, strA];
      }
    });

    // Merangkai enkripsi (Langkah 3)
    let strFinal = strMap.map((strM) => {
      if (strM[0] == 26) {
        return strM[1];
      }

      // Mengurangi index huruf dengan key
      strM[0] -= key;

      // Jika saat pengurangan dengan key menjadi negatif
      if (strM[0] < 0) {
        if (strM[0] < -26) {
          // Mencari modulus
          strM[0] = Math.abs(strM[0] % 26);
          // Jika modulus adalah 0
          if (strM[0] === 0) {
            strM[0] = -26;
          } else {
            strM[0] = -Math.abs(strM[0]);
          }
        }

        if (strM[1] == "low") {
          return strM[0] === -1
            ? alphaLow.slice(strM[0])
            : alphaLow.slice(strM[0], strM[0] + 1);
        } else {
          return strM[0] === -1
            ? alphaHigh.slice(strM[0])
            : alphaHigh.slice(strM[0], strM[0] + 1);
        }
      }

      // Jika saat pengurangan dengan key tetap positif
      else {
        if (strM[0] > 25) {
          if (strM[1] == "low") {
            return alphaLow[strM[0] % 26];
          } else {
            return alphaHigh[strM[0] % 26];
          }
        } else {
          if (strM[1] == "low") {
            return alphaLow[strM[0]];
          } else {
            return alphaHigh[strM[0]];
          }
        }
      }
    });

    // console.log(strArr)
    // console.log(strMap)

    return strFinal.join("");
  };

  const inputChangeHandler = (e) => {
    setEncrypt({
      ...encrypt,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10">
          <div class="mb-3">
            <label for="encryptInitial" class="form-label">
              Encrypt
            </label>
            <input
              type="text"
              class="form-control"
              id="encryptInitial"
              placeholder="String yang akan dienkripsi"
              value={encrypt.encryptInitial}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="col-2">
          <div class="mb-3">
            <label for="encryptKey" class="form-label">
              Key
            </label>
            <input
              type="number"
              class="form-control"
              id="encryptKey"
              placeholder="Key"
              value={encrypt.encryptKey}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="mb-3">
            <label for="encryptResult" class="form-label">
              Hasil Encrypt
            </label>
            <input
              disabled
              type="text"
              class="form-control"
              id="encryptResult"
              placeholder="String hasil enkripsi"
              value={encrypt.encryptResult}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
      </div>
      <div
        className="btn btn-primary"
        onClick={() =>
          setEncrypt({
            ...encrypt,
            encryptResult: encryptNow(
              encrypt.encryptInitial,
              encrypt.encryptKey
            ),
          })
        }
      >
        Encrypt Now!
      </div>
    </div>
  );
}
