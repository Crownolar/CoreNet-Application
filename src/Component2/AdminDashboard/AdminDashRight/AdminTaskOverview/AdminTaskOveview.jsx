import React from "react";
import "../AdminTaskOverview/AdminTaskOverview.css";
import "../AdminTaskOverview/AdminTaskOverviewMedia.css"
import { Progress, Space } from 'antd';
import { useParams } from "react-router-dom";


const AdminTaskOveview = () => {

  // const Editor = useSelector((state) => state.persistedReducer.user);
  // const EditorId = Editor.editorId;
  // const [taskinfo, setTaskInfo] = useState();
  // // const { id } = useParams()
  // const url = `https://corenet-api.onrender.com/api/tasks/${EditorId}`;

  // const getOneEditor = () => {
  //   const url = `https://corenet-api.onrender.com/api/get-one-editor/${EditorId}`;
  //   axios.get(url).then((res) => {
  //     console.log(res.data.data);
  //     setEditorInfo(res.data.data);
  //   });
  // };

  // const deleteAdmin = () => {
  //   axios.delete(url).then((res) => {
  //     console.log(res);
  //   });
  // };

  // useEffect(() => {
  //   getOneEditor();
  // }, []);

  return (
    <div className="Admintaskoverview">
      <div className="Admintaskassigner">
        <div className="Admintaskassignerwrap">
          <div className="Admintaskassigntext">
            <p>Deliver an article about The CurveAfrica</p>
            <span>Tijani Ezekiel</span>
          </div>
          <div className="AdmintaskoverviewStatus">
            <div className="Admintaskoverviewcolor1">I</div>
            <div className="Admintaskoverviewcolor2">P</div>
            <div className="Admintaskoverviewcolor3">C</div>
          </div>
        </div>  
      </div>
      <div className="Admintaskassigner">
        <div className="Admintaskassignerwrap">
          <div className="Admintaskassigntext">
            <p>Deliver an article about The CurveAfrica</p>
            <span>Tijani Ezekiel</span>
          </div>
          <div className="AdmintaskoverviewStatus">
            <div className="Admintaskoverviewcolor1">I</div>
            <div className="Admintaskoverviewcolor2">P</div>
            <div className="Admintaskoverviewcolor3">C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaskOveview;
