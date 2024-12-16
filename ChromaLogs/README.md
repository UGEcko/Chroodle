# Chroma Logs
Beatsaber Versions:

- [1.29.1](https://github.com/UGEcko/Chroodle/tree/main/ChromaLogs/1.29.1)
- [1.34.0](https://github.com/UGEcko/Chroodle/tree/main/ChromaLogs/1.34.0)
- [1.37.0](https://github.com/UGEcko/Chroodle/tree/main/ChromaLogs/1.37.0)

<hr>

Some environment names that may confuse you:

| ID Name | Beatsaber Name |
| ------  | -------------  |
| HalloweenEnvironment | Spooky |
| HipHopEnvironment | HipHop Mixtape |
| PyroEnvironment | Fall Out Boy |
| Rocket Environment | Rocket League |


Any environments that have a 2 in their name is the "Remastered" version. <br>
Ex: ``LinkinPark2Environment``


I have also provided ``.zip`` files for each version if you just want to download all of the environment logs instead of coming back here.

**NOTICE**: However very unlikely, there may be some imperfections in any of the environment logs. If you _do_ find any imperfections please let me know. All logs were taken from a fresh installation of Beatsaber, so there shouldn't be any extra mod objects.


Environment Releases (Environments that have been added from the previous version)
| 1.29.1 | 1.34.0 | 1.37.0 |
| :------:| :-------: | :------:|
| Default | Queen | DaftPunk
| Triangle | LinkinPark2 | HipHopMixtape
| Nice    | RollingStones | Collider
| BigMirror | Lattice
| KDA
| Monstercat
| CrabRave
| Dragons
| Origins
| Panic
| Rocket
| GreenDay
| GreenDayGrenade
| Timbaland
| FitBeat
| LinkinPark
| BTS
| Kaleidoscope
| Interscope
| Skrillex
| Billie
| Halloween
| Gaga
| Glass Desert
| Weave
| Pyro
| EDM
| TheSecond
| Lizzo
| TheWeeknd
| RockMixtape
| Dragons2
| Panic2


<hr>

(INFO)
Im not exactly sure how helpful this may be to some of you, but there is now a regex verifier posted on here (Developed in TS, but you're not required to use ReMapper), that uses chroodle to check if regular expressions are valid to the environment (version specific). Its pretty much Regex101.com but in your script...
<br> Import it into your script here: <br> ``
import { VerifyRegex } from "https://raw.githubusercontent.com/UGEcko/Chroodle/main/ChromaLogs/RegexVerifier.ts"``

Example: 
```ts
VerifyRegex("BasicGameHUD", "1.34.0", "CrabRave", true); // (Expression, BSVersion, Environment, LogToConsole)
// Returns a boolean, but can also just log to console for other purposes.
```
