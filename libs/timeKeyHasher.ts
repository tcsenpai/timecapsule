import type timeKey from "./types/timeKey";
import { sha256digest } from '@digitalcredentials/sha256-universal'

// Join together a timeKey + a password in a sha256 hash that can be used to encrypt / decrypt data
export default async function timeKeyHasher(time: timeKey, password: string): Promise<string> {
    time.password = password;
    let timeString = JSON.stringify(time)
    let timeKeyHash = await sha256digest(timeString);
    let timeKeyHashHex = Buffer.from(timeKeyHash).toString('hex')
    return timeKeyHashHex;
}