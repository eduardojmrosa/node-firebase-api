import jfe from "json-file-encrypt";
import serviceAccountJson from "./serviceAccountKey.json" assert { type: "json" };

const convertedJson = JSON.stringify(serviceAccountJson);

//create Instance with "test Key" as the key
let jfeKey1 = new jfe.encryptor("Google Key");

//Encrypt a string:
let encrypted = jfeKey1.encrypt(convertedJson); //returns encrypted string

console.log(encrypted);
//Decrypt an encrypted string
let data = jfeKey1.decrypt(encrypted);

export default data;
