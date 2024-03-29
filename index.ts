import type timeKey from "./libs/types/timeKey"
import { timeEncrypt, timeDecrypt } from "./libs/Encryption";

async function main() {
    // We set our secret and passwords here
    let secret = "secret";
    let password = "password";
    // We want this to be opened only this day
    let proposedTimeKey: timeKey = {
        time: {
            day: 29,
            month: 3,
            year: 2024,
        },
        password: ""
    }
    // Testing
    let enc = await timeEncrypt(secret, password, proposedTimeKey);
    console.log(`Encrypted: ${enc}`);
    let dec = await timeDecrypt(enc, password);
    console.log(`Decrypted: ${dec}`);
}

main()