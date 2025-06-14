import module from "node:module";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import preserveShebang from "rollup-plugin-preserve-shebang"; // Shebangを保持するプラグイン
import replace from '@rollup/plugin-replace';
import pkg from "./package.json" with { type: "json" }
/**
 * @returns {import("rollup").RollupOptions}
 */
const createConfig = () => {
  return {
    input: "src/cli.ts", // エントリーポイントとなるTypeScriptファイル
    output: {
      file: "dist/cli.cjs",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.CLI_NAME': JSON.stringify(pkg.name),
        'process.env.CLI_VERSION': JSON.stringify(pkg.version),
      }),
      preserveShebang(), // Shebangを保持 (他のプラグインより前に置くことが推奨される)
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      json(),
    ],
    external: [...module.builtinModules],
  };
};


export default createConfig();
