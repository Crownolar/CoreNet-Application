import React, { useEffect, useState } from 'react'
import "./AdminAllWriterDesc.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AdminAllWriterDesc = () => {
  const [writersDescriptions, setWritersDescriptions] = useState({});
  const {id} = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.persistedReducer.user);
  const EditorID = user.editorId;
  const URL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${id}`;

    const getDescription = () => {
        axios.get(URL)
          .then((res) => {
            console.log(res)
            setWritersDescriptions(res.data.data)
        });
    }

      useEffect(() => {
            getDescription();
      },[])



  return (
    <div className="writerdsc">
      <div className="writerdscwrap">
        <h4>UserName: {writersDescriptions.UserName}</h4>
        <p>Full Name:{writersDescriptions.FullName} </p>
        <p>Email: {writersDescriptions.Email} </p> 
      </div>
  </div>
  )
}

export default AdminAllWriterDesc