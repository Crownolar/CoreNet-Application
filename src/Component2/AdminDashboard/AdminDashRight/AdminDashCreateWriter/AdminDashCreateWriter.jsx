import React, { useState } from "react";
import "./AdminDashCreateWriter.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminDashCreateWriterNextContent from "./AdminDashCreateWriterNextContent/AdminDashCreateWriterNextContent";
import { useSelector } from "react-redux";

const AdminDashCreateWriter = () => {
  const [next, setNext] = useState(false);
  const user = useSelector((state) => state.stores.user);
  // console.log(user.editorId);


  const Nav = useNavigate();

  return (
    <div className="AdminDashCreateWriter">
      {!next ? (
        <>
          <div className="AdminDashCreateWriterwrap">
            <div className="AdminDashCreateWriterActionCenter">
              <p>Create New Writer</p>
              <div className="AdminCreateWriterAdd">
                <BsFillPlusCircleFill
                  className="AdminCreateWriterAddIcon"
                  onClick={() => setNext(!next)}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="AdminDashCreateWriterNextContent">
          <AdminDashCreateWriterNextContent editorID={user.editorId} />
        </div>
      )}
    </div>
  );
};

export default AdminDashCreateWriter;
//
