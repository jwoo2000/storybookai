import OpenAI from "openai";
import { sleep } from "openai/core";

export const ImagePrompt = async (story) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are provided with a story text. Your goal is to create a prompt for Dall E to generate an image. It must be visually descriptive and must include scene description, and character descriptions in 50 words."
        },
        {
          "role": "user",
          "content": `${story}`
        }
      ],
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1,
    });
    return response.choices[0];
  } catch (error) {
    if (error.response) {
      if (error.response.status == 429) {
        console.log("Too many requests. Please wait a few minutes and try again.");
        return 429;
      } else {
        console.log(error.response.status);
      }
    }
    else {
      console.log(error.message);
    }
  }
}

export const MusicPrompt = async (story) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You will be provided with a story text. Your goal is to create a prompt for musicLM to generate a piece of music for the story. It must be auditorily descriptive and must include the scene description, music genre, and tempo in two sentences."
        },
        {
          "role": "user",
          "content": `${story}`
        }
      ],
      temperature: 0.5,
      max_tokens: 50,
      top_p: 1,
    });
    return response.choices[0];
  } catch (error) {
    if (error.response) {
      if (error.response.status == 429) {
        console.log("Too many requests. Please wait a few minutes and try again.");
        return 429;
      } else {
        console.log(error.response.data);
      }
    }
    else {
      console.log(error.message);
    }
  }
}