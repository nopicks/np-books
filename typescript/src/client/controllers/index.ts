/*************************************************/
/****               NP-BOOKS v0               ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

import { InitCopy } from "./copy";
import { InitEvents } from "./events";
import { InitWrite } from "./write";

export async function Init(): Promise<void> {
    await InitWrite();
    await InitCopy();
    await InitEvents();
}