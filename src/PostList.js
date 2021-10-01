import './App.css';
import { useEffect, useState } from 'react';

{/* Fetch API Data using useEffect react hook (In the background) */ }
function PostList() {
  let initialdata = { title: "Waiting for Data..." };
  const [todo, setTodo] = useState( initialdata ); // State to store data
  const [isData, setData] = useState( false ); // It will rerender the function when there is a change in isData
  const [isfetching, setFetching] = useState( false ); // State to store data

  useEffect(()=> {     
    async function fetchData() {  // Never Use fetch(), it might be built in func.
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response = ", response);
      let data = await response.json();
      setTodo (data) ;
      setFetching(false) ;
      console.log("data = ", todo);
    }
    fetchData();
  } , [isData]);

if (isfetching) {
  return <div> Data loading... </div>
}

  return (
    <div>
      Post List  <br/><br/>
      <span>Title: {todo.title}</span> <br/><br/>
      Visit inspect/console ...
    </div>
  );
}

export default PostList;
