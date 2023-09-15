import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  try {
    const todos = formatTodosForAI(board);

    // console.log('Formatted TODOS to send >>', todos)

    const res = await fetch("/api/generateSummary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todos }),
    });
    const GPTdata = await res.json();

    // Update this line to access the correct field in the GPT data
    // const { content } = GPTdata;
    const { suggestion } = GPTdata;

    // return content
    return suggestion || "AI bot is summarizing your tasks for the day...";
  } catch (error) {
    console.error("Error fetching suggestion:", error);
    // Return a default message in case of error
    return "AI bot is summarizing your tasks for the day...";
  }
};

export default fetchSuggestion;
