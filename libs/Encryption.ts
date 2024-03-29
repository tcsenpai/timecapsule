
// Encryption.ts
import timeGet from "./timeGet"
import timeKeyHasher from "./timeKeyHasher"
import crypto from "crypto"
import type timeKey from "./types/timeKey";
const algorithm = 'aes-256-ctr';
const IV_LENGTH = 16;

export async function timeEncrypt(text: string, plain_password: string, date: timeKey) {
    console.log("To be opened on: ")
    console.log(date)
    // Getting the timed password and using it to encrypt the text
    let password = await timeKeyHasher(date, plain_password)
    // Adding a random iv
    let iv = crypto.randomBytes(IV_LENGTH);
    // Ciphering the plain text
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(password, 'hex'), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export async function timeDecrypt(text: string, plain_password: string) {
    // Getting the timed password and using it to decrypt the text
    let date = await timeGet()
    console.log("Today is: ")
    console.log(date)
    let password = await timeKeyHasher(date, plain_password)
    // Separating the iv
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift() as string, 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    // Deciphering the encrypted text
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(password, 'hex'), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
