import React, { useEffect, useState } from 'react'
import "./AdminAllWriterDesc.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateWriterId } from '../../../../../Redux/ActionState/ActionState';
import { useParams } from 'react-router-dom';

const AdminAllWriterDesc = () => {
  const [writersDescriptions, setWritersDescriptions] = useState({});
  const [selectedWriterId, setSelectedWriterId] = useState(null);
  const {_id} = useParams()
  const dispatch = useDispatch()
  const Writer = useSelector((state) => state.persistedReducer.writer);
  const user = useSelector((state) => state.persistedReducer.user);
  console.log(selectedWriterId);
//   console.log(writersDescriptions);
  const AWriter = Writer._id;
  console.log(AWriter);
  const EditorID = user.editorId;
  const URL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${AWriter}`;


    



    // const OneWriterDescription = (_id) => {
    //     console.log("Show ID", _id);
    //     axios.get(URL)
    //       .then((res) => {
    //       console.log(res?.data.data);
    //       dispatch(updateWriterId(setSelectedWriterId(res?.data.data)));
    //       // {console.log(setSelectedWriterId);}
    //     });
    //   };

      useEffect(() => {
        const WriterDescription = (_id) => {
            console.log("Show ID", _id);
            axios.get(URL)
              .then((res) => {
              console.log(res?.data.data);
              setSelectedWriterId(res?.data.data)
            //   dispatch(updateWriterId(setSelectedWriterId(res?.data.data)));
              // {console.log(setSelectedWriterId);}
            });
            WriterDescription();
          };
      },[_id])



  return (
    <div className="writerdsc">
      <div className="writerdscwrap">
        <h4>UserName: {selectedWriterId.UserName}</h4>
        <p>Full Name:{selectedWriterId.FullName} </p>
        <p>Email: {selectedWriterId.Email} </p> 
      </div>
  </div>
  )
}

export default AdminAllWriterDesc