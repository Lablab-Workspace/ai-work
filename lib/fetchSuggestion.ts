// import formatTodosForAPI from "./formatTodosForAPI";

// const fetchSuggestion = async (board: Board) => {
//   try {
//     const todos = formatTodosForAPI(board);

//     console.log('Formatted TODOS to send >>', todos)

//     const res = await fetch("/api/generateSummary", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ todos }),
//     });
//     const GPTdata = await res.json();

//     // Update this line to access the correct field in the GPT data
//     const { content } = GPTdata;

//     return content
    
//     // const { suggestion } = GPTdata;
//     // return suggestion || "AI bot is summarizing your tasks for the day...";
//     // return suggestion;
//   } catch (error) {
//     console.error("Error fetching suggestion:", error);
//     // Return a default message in case of error
//     return "AI bot is summarizing your tasks for the day...";
//   }
// };

// export default fetchSuggestion;


import formatTodoForAPI from "./formatTodosForAPI";

const fetchSuggestion = async(board: Board) => {
  const todos = formatTodoForAPI(board);
  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({ todos })
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
}

export default fetchSuggestion;