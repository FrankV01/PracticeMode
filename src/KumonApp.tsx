import './App.css'
import {useEffect, useState} from "react";
import {openAIToken, openAIUrl} from "./Utils.ts";



const fetchOpenAI = async (prompt: string, maxTokens: number): Promise<any> => {
  const response = await fetch(openAIUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openAIToken}`,

    },
    body: JSON.stringify({
      "model": "gpt-4.1",
      'input': prompt,
      // max_output_tokens: maxTokens,
    }),
  })

  const data = await response.json()

  return data
}


function KumonApp() {
  const [passage, setPassage] = useState<string>();
  
  useEffect(() => {

    const d = fetchOpenAI('Generate a Kumon-like Passage about a cat named mittens. Describe a unique adventure that Mittens had.', 10);
    d.then((data) => {
      console.log('Response', data)
      setPassage(data.output[0].content[0].text)
    });
  }, [])
  return (
    <>
      <h1>PracticeMode</h1>
      
      <div>
        <p className={'big'}>{passage}</p>
      </div>
     

    </>
  )
}

export default KumonApp
