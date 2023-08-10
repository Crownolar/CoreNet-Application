import React, { useEffect, useState } from "react";
import "./AdminTaskAssign.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";


const AdminTaskAssign = () => {
  const [writer, setWriter] = useState([])
  // const writer = useSelector((state) => state.signup.writer);
  const user = useSelector((state) => state.persistedReducer.user);
  console.log(user);
  const EditorID = user.editorId
  console.log(EditorID);
  // const {id} = useParams
const  [task, setTask] = useState({
  entertask: "",

})

  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;
  // const Url = `https://corenet.onrender.com/accepts/${id}`
  // console.log(Url)

  // const AssignTask = () => {
  //   axios
  //   .post(Url)
  //   .then((res) => {
  //     console.log(res)
  //   })
  // }


  const getAllWriters = () => {
    axios.get(url)
    .then((res) =>{
      setWriter(res?.data.data);
    
      {console.log(res.data)}
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
      }
    });
    
  };
  // console.log(getAllWriters);

  
  useEffect(() => {
    getAllWriters();
  }, []);

  useEffect(() => {
    console.log(writer);
  }, [writer]);


  
  const [items, setItem] = useState([]);
  const [add, setAdd] = useState("");

  const addTodo = () => {
    if (add.trim() !== "") {
      setItem([...items, add]);
      setAdd("");
    }
  };

  const OnChange = (e) => {
    setAdd(e.target.value);
  };
  console.log(add);

  const Del = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItem(updatedItems);
  };

  return (
    <div className="AdminTaskAssign">
      <div className="AdminTaskAssignWrap">
        <div className="AdminTaskassigned">
          <p>Assign Task</p>
        </div>
        <div className="AdminTaskAssignInput">
          <div className="AdminTaskAssignInputsTag">
            <div className="AdminInput">
              <input
                type="text"
                placeholder="Enter task"
                value={add}
                onChange={OnChange}
              />
            </div>
            {/* <div className="AdminTaskAssignButton">
              <button tabIndex={"0"} onClick={addTodo}>
                Enter
              </button>
            </div> */}
          </div>
          {/* <div className="AdminTaskAssignoverallview">
          <div className="AdminTaskAssignedView">
            {items.map((val, index) => (
              <div key={index} className="AdminTaskAssignedViewWrap">
                <div className="AdminView">
                  <p>{val}</p>
                </div>
                <div className="AdminTaskOption">
                  <p>Edit</p>
                  <button onClick={() => Del(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          </div> */}
          
            <div className="AdminTaskAssignSelect">
            <label htmlFor="writers">select writer:</label>
            
            <select name="witer" id="writer">
              {writer?.map((e) => (
                // <option value="audi">Samuel</option>
                <option value={e._id}>{e.FullName}</option>
                ))}
                
            </select>
          </div>
          <div className="AdminTaskAssignCreateTaskButton">
            <button>Assign Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaskAssign;
