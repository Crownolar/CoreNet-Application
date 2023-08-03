import React, { useState } from "react";
import "./AdminTaskAssign.css";
const AdminTaskAssign = () => {
  const [items, setItem] = useState([]);
  const [add, setAdd] = useState("");

  const addTodo = () => {
    if (add.trim() !== "") {
      setItem([...items, add]);
      setAdd("");
    }
  };

  const OnChange = (event) => {
    setAdd(event.target.value);
  };

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
            <div className="AdminTaskAssignButton">
              <button tabIndex={"0"} onClick={addTodo}>
                Enter
              </button>
            </div>
          </div>
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
          <div className="AdminTaskAssignSelect">
            <label htmlFor="writers">select writer:</label>
            <select name="witer" id="writer">
              <optgroup label="Recent">
                <option value="volvo">Oriade</option>
                <option value="saab">Tijani Ezekiel</option>
              </optgroup>
              <optgroup label="Writer">
                <option value="mercedes">Raymond</option>
                <option value="audi">Samuel</option>
              </optgroup>
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
