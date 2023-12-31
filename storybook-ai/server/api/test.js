import { ImagePrompt, MusicPrompt } from "./GPT.js";
import { ImageGeneration } from "./DALLE.js";
import { MusicAI } from "./riffusion.js";

export const test = async (story) => {

    var imagePrompt = await ImagePrompt(story);
    if (imagePrompt != 429) {
        console.log("image prompt: " + imagePrompt.message.content);

        var imageUrl = await ImageGeneration(imagePrompt.message.content, "./assets/test.png");
        console.log("image url: " + imageUrl);
    }




    var musicPrompt = await MusicPrompt(story);
    if (musicPrompt != 429) {
        console.log("music prompt: " + musicPrompt.message.content);

        var musicUrl = await MusicAI(musicPrompt.message.content, "./assets/test.wav");
        console.log(musicUrl);
    }

    if (imagePrompt == 429 || musicPrompt == 429) {
        return { "image": 429 };
    }

    return {
        "image": imagePrompt.message.content,
        "music": musicPrompt.message.content,
        "imageUrl": imageUrl,
        "musicUrl": musicUrl
    }
}
