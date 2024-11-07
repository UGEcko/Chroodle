// Although this is TS, you arent required to use ReMapper, this utility was just developed in TS. Its why we can have those beautifully organized type conditions :)
import * as DCol from "https://deno.land/std@0.189.0/fmt/colors.ts";

type BeatsaberVersion = "1.29.1" | "1.34.0" | "1.37.0"

type Environment_1_29 = 
"Default" |
"Triangle" | 
"Nice" |
"BigMirror" | 
"KDA" | 
"Monstercat" | 
"CrabRave" | 
"Dragons" |
"Origins" | 
"Panic" | 
"Rocket" |
"GreenDay" | 
"GreenDayGrenade" | 
"Timbaland" |
"FitBeat" |
"LinkinPark" |
"BTS" |
"Kaleidoscope" | 
"Interscope" | 
"Skrillex" |
"Billie" |
"Halloween" | 
"Gaga" | 
"GlassDesert" |
"Weave" |
"Pyro" |
"EDM" | 
"TheSecond" |
"Lizzo" |
"TheWeeknd" |
"RockMixtape" | 
"Dragons2" |
"Panic2"

type Environment_1_34 =
Environment_1_29 |
"Queen" |
"LinkinPark2" |
"RollingStones" |
"Lattice"

type Environment_1_37 =
Environment_1_34 | 
"DaftPunk" |
"HipHopMixtape" |
"Collider"

type BeatsaberVersionEnvironment<T> =
    T extends "1.29.1" ? Environment_1_29 :
    T extends "1.34.0" ? Environment_1_34 :
    T extends "1.37.0" ? Environment_1_37 :
    never;

export async function VerifyRegex<T extends BeatsaberVersion>(expression: string, BeatsaberVersion: T, environment: BeatsaberVersionEnvironment<T>) {
    let URL: string = "https://raw.githubusercontent.com/UGEcko/Chroodle/main/ChromaLogs/"
    URL += BeatsaberVersion // Add the version to the end of the URL.
    URL += `/${environment}Environment.log`

    const match = new RegExp(expression, "gm").test(await (await fetch(URL)).text());

    let verdict = DCol.green("exists")
    if(!match) verdict = DCol.red("does not exist")

    console.log(`${DCol.bold(expression)} ${verdict} in the ${environment} Environment`);
}
