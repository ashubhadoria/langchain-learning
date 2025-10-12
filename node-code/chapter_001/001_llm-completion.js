import { OpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const model = new OpenAI({ model: "gpt-3.5-turbo-instruct" });

const result = await model.invoke("The sky is");

console.log(result);

///// OUTPUT
/*
❯ node node-code/chapter_001/001_llm-completion.js
[dotenv@17.2.3] injecting env (1) from .env -- tip: 🔐 prevent building .env in docker: https://dotenvx.com/prebuild
 my roof, the earth is my bed, this bottle is my Jail, or
 */