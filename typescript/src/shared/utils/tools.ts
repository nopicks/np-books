/*************************************************/
/****               NP-BOOKS v0               ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

export async function Delay(pTime) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), pTime));
}