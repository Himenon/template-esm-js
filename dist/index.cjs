var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Hello: () => world_exports,
  Sub: () => sub_exports,
  hello: () => hello
});
module.exports = __toCommonJS(src_exports);

// src/sub.ts
var sub_exports = {};
__export(sub_exports, {
  thisIsSub: () => thisIsSub
});
var thisIsSub = () => {
  return "this is sub file.";
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Hello,
  Sub,
  hello
});
//# sourceMappingURL=index.cjs.map