import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  // organization: process.env.NEXT_PUBLIC_OPENAI_ORG_KEY,
});


// const chatCompletion = openai.chat.completions.create({

//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
//   });



export default openai