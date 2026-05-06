import { useState } from 'react'

import './App.css'
import { Form } from './components/Form'
import { Table } from './components/Table';

const App =()=> {

const [taskList,setTaskList]=useState([]);


const addTaskList = (taskObj )=> {

  const obj = {
    ...taskObj,
    id: randomIdGenerator(),
    type: "entry",
  };
  setTaskList([...taskList,obj]);

  };
  console.log(taskList);

  const randomIdGenerator = (lenght = 6) => {
  const str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

  let id = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }
  return id;
};
const switchTask = (id, type) => {
setTaskList(
taskList.map((item) => {
    if (item.id === id) {item.type = type;}
    return item;
  }));
};

  return (
    <>
     <div className="wrapper pt-5">
     
      <div className="container">
        <h1 className="text-center">Not To Do List</h1>
      <Form addTaskList={addTaskList}/>
      <Table taskList={taskList} switchTask={switchTask}/>  
        <div className="alert alert-success">
          The total hours allocated = <span id="ttlHrs">0</span> hrs
        </div>
      </div>
    </div>
    </>
  )
}

export default App
