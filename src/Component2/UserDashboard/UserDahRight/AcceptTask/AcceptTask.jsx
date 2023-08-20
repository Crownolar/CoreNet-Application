import { useSelector } from 'react-redux';
import './AcceptTask.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

const AcceptTask = () => {
    const Writer = useSelector((state) => state.stores.formDataWriter);
  const WriterId = Writer.id;
  const [taskinfo, setTaskInfo] = useState([]);
  // const { id } = useParams()get-all-tasks/:writerId
  const url = `https://corenet-api.onrender.com/api/get-all-tasks/${WriterId}`;

  const getAllTask = () => {
    axios
    .get(url)
    .then((res) => {
      console.log(res);
      setTaskInfo(res.data.data);
    });
  };

  useEffect(() => {
    getAllTask();
  }, []);


    return (
        <>
            <div className='AcceptTask'>
                <div className='AcceptTaskBox'>
                    <div className='AcceptTaskAlign'>
                        <h3>{taskinfo.title}</h3>
                        <p>{taskinfo.Description}</p>
                        <button className='acceptTakBttn'> {taskinfo.taskTimeout} </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcceptTask 