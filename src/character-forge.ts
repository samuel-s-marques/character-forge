import fs from "fs";
import path from "path";

export interface Character {}

export class CharacterForge {
  private loadedModules: Record<string, any> = {};

  /*
  * By implementing concurrency succesfully, the modules would be read
  * and imported much faster.
  */
  private async moduleLoader() {
    const folders = fs.readdirSync(path.join(__dirname, "modules"));

    for (const folder of folders) {
      const module = await import(`./modules/${folder}/index.js`);
      const moduleName = folder.format();
      const moduleInstance = new module[`${moduleName}Module`]();
      const moduleInterface = moduleInstance["interfaceName"];

      this.loadedModules[moduleInterface] = moduleInstance;
    }
  }

  /*
  * There's a problem here: I really don't know how to pass parameters
  * to the modules.
  * 
  * Some modules have parameters, like `Name` and `BodyType`.
  */ 
  public forge(): Record<string, any> {
    let character: Record<string, any> = {};

    this.moduleLoader().then(() => {
      for (const moduleInterface in this.loadedModules) {
        const module = moduleInterface.toLocaleLowerCase();

        character[module] = this.loadedModules[`getRandom${moduleInterface}`]();
      }
    });

    return character;
  }
}
