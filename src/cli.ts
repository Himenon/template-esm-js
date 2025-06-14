#!/usr/bin/env node

import { program } from "commander";
import * as z from "zod";

const CliSchema = z.object({
  version: z.boolean().optional(),
});

type CliSchema = z.infer<typeof CliSchema>;

const main = async () => {
  program.name(`${process.env.CLI_NAME}`).description("Template CLI Library").option("-v, --version", `print ${process.env.CLI_NAME} version`);
  program.parse(process.argv);
  const options = program.opts<CliSchema>();
  const parsed = await CliSchema.parseAsync(options).catch((error) => {
    if (error instanceof z.ZodError) {
      const messages: string[] = [];
      for (const issue of error.issues) {
        if (issue.path.length > 0) {
          messages.push(`- ${issue.path.join(".")}: ${issue.message}`);
        } else {
          messages.push(`- ${issue.message}`);
        }
      }
      throw new Error(["CLIの引数が不正です。", ...messages, ""].join("\n"));
    }
    throw error;
  });

  if (parsed.version) {
    console.log(`v${process.env.CLI_VERSION}`);
    return;
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
