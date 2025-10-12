import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });
const prompt = [new HumanMessage("What is the capital of France?")];
const result = await model.invoke(prompt);
console.log(result);

/////// OUTPUT
/*
❯ node node-code/chapter_001/002_simple_chat_prompt.js
[dotenv@17.2.3] injecting env (1) from .env -- tip: 📡 add observability to secrets: https://dotenvx.com/ops
AIMessage {
  "id": "chatcmpl-CMMoxmcLhpTwpQWVOol0o9PRrJ5op",
  "content": "The capital of France is Paris.",
  "additional_kwargs": {},
  "response_metadata": {
    "tokenUsage": {
      "promptTokens": 14,
      "completionTokens": 7,
      "totalTokens": 21
    },
    "finish_reason": "stop",
    "model_name": "gpt-3.5-turbo-0125"
  },
  "tool_calls": [],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "output_tokens": 7,
    "input_tokens": 14,
    "total_tokens": 21,
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