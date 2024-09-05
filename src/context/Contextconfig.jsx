import { createContext, useState } from "react";
import run from "../config/GerminaiApi";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);

  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const formatResponse = (response) => {
    return response
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **text** to <strong>text</strong>
      .replace(/\n/g, "<br/>"); // Convert new lines to HTML line breaks
  };

  const onSent = async (prompt, context) => {
    // setResultData("");
    // setLoading(true);
    // setShowResult(true);

    
    setResultData("")
    setLoading(true)
    setShowResult(true)

    
    // setRecentPromp(input)
  

    try {
      const finalPrompt = context 
        ? `${context}: ${prompt || input}` 
        : prompt || input;

      // Update previous prompts before sending the request
      setPrevPrompts((prev) => [...prev, finalPrompt]);
      setRecentPrompt(finalPrompt);

      const response = await run(finalPrompt);
      const formattedResponse = formatResponse(response);
      const responseArray = formattedResponse.split(" ");

      responseArray.forEach((word, i) => delayPara(i, word + " "));

    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  // console.log(setPrevPrompts)
  console.log(recentPrompt);
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
