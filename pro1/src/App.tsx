import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
interface apiType{
   
word: string, score: number

}

function App() {
  const [list, setList] = useState<apiType[]>([]);

  const [word, setWord] = useState('');

  const getData = async () => {
    // const { data } = await axios.get(`https://api.datamuse.com/words?ml=`);
    // setList(data);
  };

  useEffect(() => {
    getData();
  }, []);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
  fetch(`https://api.datamuse.com/words?rel_syn=${word}` )
    .then(res => res.json()).then(setList)
 
    
};
console.log(list,">")
  return (
    <div className="App">
      <h3>API CALL</h3>
      <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="enter word"
        style={{ padding: "10px 30px" }}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setWord(e.target.value)}
      />
       <button type='submit'>submit</button>
       </form>
       {list.length>0&& list?.map(li=><p>{li.word}</p>)}
    </div>
  );
}

export default App;
