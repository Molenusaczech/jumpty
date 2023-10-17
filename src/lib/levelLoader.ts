import { testLvl } from "../testLvl";
import { Level } from "../interfaces/level";

let level: Level = JSON.parse(JSON.stringify(testLvl));

export { level };