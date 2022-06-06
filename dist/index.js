import {
  __export,
  sub_exports
} from "./chunk-4CCY263V.js";

// src/hello/world.ts
var world_exports = {};
__export(world_exports, {
  thisIsSubDirectoryFile: () => thisIsSubDirectoryFile
});
var thisIsSubDirectoryFile = () => {
  return "this is sub directory file.";
};

// src/index.ts
var hello = (name) => {
  const params = {
    hoge: 1,
    fuga: 2
  };
  return `Hello ${name} ${JSON.stringify(params)}`;
};
console.log(hello("Your name"));
export {
  world_exports as Hello,
  sub_exports as Sub,
  hello
};
//# sourceMappingURL=index.js.map