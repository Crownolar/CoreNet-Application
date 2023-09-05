import React, { useEffect, useState } from 'react'
import "./AllTaskDesc.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { clearTask } from '../../../../../Redux/ActionState/ActionState';
import Loader from '../../../../../Loader/Loader';

const AllTaskDesc = () => {
    const TaskId = useSelector((state) => state.stores.taskId);
    const [writersDescriptions, setWritersDescriptions] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [commentdetails, setCommentDetails] = useState([]);
  const Nav = useNavigate()
  const dispatch = useDispatch()
  const TaskID = TaskId._id;
    console.log(TaskID);
    const Writer = useSelector((state) => state.stores.formDataWriter);
    console.log(Writer);
    const user = useSelector((state) => state.stores.user);
    const EditorID = user.editorId; 
    const WriterId = Writer.id;
    const [taskinfo, setTaskInfo] = useState([]);
    const [taskinfo1, setTaskInfo1] = useState(null);
    const CommentId = useSelector((state) => state.stores.commentid);
    console.log(CommentId);
    const commentID = CommentId._id;
    console.log(commentID);
    const { id } = useParams()
    console.log(id)
    // const url = `https://corenet-api.onrender.com/api/get-all-tasks/${WriterId}`;
    const URL = `https://corenet-api.onrender.com/api/get-one-task/${id}`;
    const urL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${WriterId}`;
    const url = `https://corenet-api.onrender.com/api/delete-task/${TaskID}`;

    const deleteTask = () => {
    setLoading(true)
    axios
      .delete(url)
      .then((res) => {
        console.log(res)
        dispatch(clearTask(res))
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          Nav("/adminpage/admintaskoverview/:id");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error)
      setLoading(false)
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    })
    }

    const replyComment = (commentId) => {
      setLoading(true);
      const replyData = { text: reply, commentId: commentId };
      const replyurl = `https://corenet-api.onrender.com/api/${commentID}/reply-comment/${WriterId}`;
      axios
        .post(replyurl, replyData)
        .then((res) => {
          console.log(res);
          const updatedComments = comments.map((cmt) => {
            if (cmt.id === commentId) {
              const newReply = { id: res.data.replyId, text: reply };
              return { ...cmt, replies: [...cmt.replies, newReply] };
            }
            return cmt;
          });
          setComments(updatedComments);
          setReply("");
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          if (error.response) {
            console.error("Response Data:", error.response.data);
          }
        });
    };


  //   const data = { comment }
  
  // const writerComment = () => {
  //   setLoading(true)
  //   const URL = `https://corenet-api.onrender.com/api/${TaskID}/create-editor-comment/${WriterId}`;
  //   axios
  //   .post(URL, data)
  //   .then((res) => {
  //     console.log(res)
  //     setLoading(false)
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //     setLoading(false)
  //     if (error.response) {
  //       console.error("Response Data:", error.response.data);
  //     }
  //   });
  // }

    const getOneTask = () => {
        axios.get(URL).then((res) => {
          console.log(res);
          console.log(res.data.data)
          setTaskInfo1(res.data.data);
        });
      };
    
    const getDescription = () => {
        axios.get(urL).then((res) => {
          console.log(res);
          setWritersDescriptions(res.data.data);
        });
      };

      useEffect(() => {
        getOneTask();
        console.log(taskinfo1?.isPending);
      }, []);

      useEffect(() => {
        getDescription();
      }, []);


  return (
    <div className='AdminTasOverviewDesc'>
      {showPopup && (
        <div className="popup">
          <p>Deleted Successfully</p>
        </div>
      )}

<div className="task-component">
      <h3>Title: {taskinfo1?.Title}</h3>
      <p>Description: {taskinfo1?.Description}</p>
      <p className="time-allocated">Time Allocated: {taskinfo1?.taskTimeout}</p>
      <div className="task-status"><div className="AdmintaskoverviewStatus">
            <h3>Task Status</h3>
            <div className="AdmintaskoverviewStatusWrap">
              {taskinfo1?.isPending === true &&
                taskinfo1?.isComplete === false && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor1">P</div>
                    <h4>Pending</h4>
                  </div>
                )}
              {taskinfo1?.isActive === true &&
                taskinfo1?.isComplete === false && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor2">A</div>
                    <h4>Active</h4>
                  </div>
                )}
              {taskinfo1?.isComplete === true &&
                taskinfo1?.isActive === true && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor3">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
              {taskinfo1?.isComplete === true &&
                taskinfo1?.isPending === true && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor3">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
            </div>
          </div>
          </div>
            {/* <h3>comment: {taskinfo1?.comment?.[0].comment}</h3>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p className="comment-text">{comment.text}</p>
            <div className="reply-section">
              <textarea
                className="reply-input"
                placeholder="Reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button className="reply-button" onClick={() => replyComment(comment.id)}>
                Reply
              </button>
            </div>
            
            <div className="replies">
              {comment?.replies?.map(reply => (
                <p className="reply-text" key={reply.id}>{reply.text}</p>
              ))}
            </div>
          </div>
        ))}
      </div> */}


      <br />
      <button onClick={deleteTask} className="delete-button">{loading ? <Loader /> : "Delete"}</button>
    </div>
    </div>
  )
}

export default AllTaskDesc