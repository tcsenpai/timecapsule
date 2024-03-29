import type timeKey from "./types/timeKey";
import { Client as NTP } from "ntp-time"
const ntp_client = new NTP('0.europe.pool.ntp.org', 123, { timeout: 1000 });

// Get time from NTP and create a timeKey without a password linked
export default async function timeGet(): Promise<timeKey>{
    const ntp = await ntp_client.syncTime();
    const date = new Date(ntp.time);
    return {
        time: {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        },
        password: "",
    } as timeKey;
}