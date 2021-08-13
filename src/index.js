import { IniConfig } from "./iniConfig.js";
import { JsonConfig } from "./jsonConfig.js";

async function main() {

    const iniConfig = new IniConfig();
    await iniConfig.load("samples/config.ini");
    iniConfig.set('book.nodejs', 'design patterns');
    await iniConfig.save("samples/config_mod.ini");

    const jsonConfig = new JsonConfig();
    await jsonConfig.load("samples/config.json");
    jsonConfig.set('book.nodejs', 'design patterns');
    await jsonConfig.save("samples/config_mod.json");

}

main();
