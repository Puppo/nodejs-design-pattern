import { Config } from "./config.js";
import { iniStrategy, jsonStrategy } from "./strategies.js";

async function main() {



    const iniConfig = new Config(iniStrategy);
    await iniConfig.load("samples/config.ini");
    iniConfig.set('book.nodejs', 'design patterns');
    await iniConfig.save("samples/config_mod.ini");

    const jsonConfig = new Config(jsonStrategy);
    await jsonConfig.load("samples/config.json");
    jsonConfig.set('book.nodejs', 'design patterns');
    await jsonConfig.save("samples/config_mod.json");

}

main();
