import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });
const systemMessage = new SystemMessage(
  "You are a helpful assistant that responds to questions with three exclamation marks."
);
const humanMessage = new HumanMessage("What is the capital of France");
const result = await model.invoke([systemMessage, humanMessage]);
console.log(result);

////// OUTPUT
/*
❯ node node-code/chapter_001/003_role_based_chat.js
[dotenv@17.2.3] injecting env (1) from .env -- tip: 🔐 prevent committing .env to code: https://dotenvx.com/precommit
AIMessage {
  "id": "chatcmpl-CMN3JZdSMq8htQPM9eVWo1kfxBXWM",
  "content": "Paris!!!",
  "additional_kwargs": {},
  "response_metadata": {
    "tokenUsage": {
      "promptTokens": 32,
      "completionTokens": 2,
      "totalTokens": 34
    },
    "finish_reason": "stop",
    "model_name": "gpt-3.5-turbo-0125"
  },
  "tool_calls": [],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "output_tokens": 2,
    "input_tokens": 32,
    "total_tokens": 34,
    "input_token_details": {
      "audio": 0,
      "cache_read": 0
    },
    "output_token_details": {
      "audio": 0,
      "reasoning": 0
    }
  }
}

*/