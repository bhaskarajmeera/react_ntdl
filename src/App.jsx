import { useState } from 'react'

import './App.css'
import { Form } from './components/Form'

const App =()=> {

const [taskList,setTaskList]=useState([]);

const addTaskList = taskObj=> {
  setTaskList([...taskList,taskObj]);

  };
  console.log(taskList);

  return (
    <>
     <div className="wrapper pt-5">
     
      <div className="container">
        <h1 className="text-center">Not To Do List</h1>

      <Form addTaskList={addTaskList}/>

        <div className="row mt-5">
          <div className="col-md">
            <h3 className="text-center">Entry List</h3>
            <hr />
            <table className="table table-striped table-hover border">
              <tbody id="entryList"></tbody>
            </table>
          </div>
          <div className="col-md">
            <h3 className="text-center">Bad List</h3>
            <hr />
            <table className="table table-striped table-hover border">
              <tbody id="badList"></tbody>
            </table>
            <div className="alert alert-success">
              You could have saved = <span id="savedHrsElm"></span> hr
            </div>
          </div>
        </div>

        <div className="alert alert-success">
          The total hours allocated = <span id="ttlHrs">0</span> hrs
        </div>
      </div>
    </div>
    </>
  )
}

export default App
