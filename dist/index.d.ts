export { s as Sub } from './sub-f2ed71a2.js';

declare const thisIsSubDirectoryFile: () => string;

declare const world_thisIsSubDirectoryFile: typeof thisIsSubDirectoryFile;
declare namespace world {
  export {
    world_thisIsSubDirectoryFile as thisIsSubDirectoryFile,
  };
}

declare const hello: (name: string) => string;

export { world as Hello, hello };
