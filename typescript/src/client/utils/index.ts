/*************************************************/
/****               NP-BOOKS v0               ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

export function progressBar(pLength: number, pName: string, pRunCheck = false): Promise<number> {
    return new Promise((resolve) => {
        if (pName) {
            exports['np-taskbar'].taskbar(pLength, pName, pRunCheck, true, null, false, resolve);
        } else {
            setTimeout(() => resolve(100), pLength);
        }
    });
}

export const loadAnimDict = (dict: string): Promise<boolean> => {
    return new Promise((resolve) => {
        RequestAnimDict(dict);

        const loaded = setInterval(() => {
            if (HasAnimDictLoaded(dict)) {
                clearInterval(loaded);

                resolve(true);
            }
        }, 200);

        setTimeout(() => {
            clearInterval(loaded);
            resolve(false);
        }, 5000)
    });
};