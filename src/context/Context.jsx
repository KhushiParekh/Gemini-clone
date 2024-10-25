import { createContext } from "react";
import run from "../config/Gemini";
import { useState, useEffect } from "react";

export const Context = createContext();//This function creates a Context object, 
//which will be used to share values across components.

const ContextProvider = (props) => {

    const[input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt]= useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Step 2: Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

  //   const [isDarkMode, setIsDarkMode] = useState(() => {
  //     // Check local storage for theme preference
  //     const savedTheme = localStorage.getItem('theme');
  //     return savedTheme === 'dark'; // Default to light mode if no preference is set
  //   });

  // // Save theme preference to local storage whenever it changes
  // useEffect(() => {
  //     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  // }, [isDarkMode]);

  // const toggleDarkMode = () => {
  //     setIsDarkMode((prev) => !prev); // Toggle dark mode state
  // };

    const delayPara=(index, nextword) => {
      setTimeout(function(){
        setResultData(prev=>prev+nextword);
      } ,75*index)
    }

    const newChat=()=>{
      setLoading(false)
      setShowResult(false)
    }

    const onSent = async (prompt) => {
      setResultData("");  // reset the result data from the previous prompts
      setLoading(true);   // show loading animation
      setShowResult(true);
      console.log(run);
      //logic for both if direct prompt diya and if recent wale mai se gaye hai
      let response;
      if(prompt !== undefined){
        response =await run(prompt)
        setRecentPrompt(prompt);
      }
      else{
        setPrevPrompts(prev=>[...prev, input])
        setRecentPrompt(input);
        response =await run(input)
      }
      
      let RespArr =response.split("**");
      let newArr="";
      for(let i=0; i<RespArr.length; i++){
        if(i===0 || i%2 !== 1){
          newArr += RespArr[i];
        }
        else{
          newArr +="<b>"+RespArr[i]+"</b>";
        }
      }
      let newArr2= newArr.split("*").join("</br>")
      //setResultData(newArr2)

      let newResArr=newArr2.split(" ")
      for(let i=0;i<newResArr.length;i++){
        let nextword= newResArr[i]
        delayPara(i,nextword+" ")
      }
      setLoading(false)
      setInput("")
     
  };
  
    


    const contextValue =  // This is the value that will be shared via the context.
    {
        input,
        setInput,
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        newChat,
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode
    };
    
    return (
      <Context.Provider value={contextValue}>
         {props.children} {/*This renders the components that are passed as children to ContextProvider*/}
      </Context.Provider>
    );
  };
  export default ContextProvider;
  