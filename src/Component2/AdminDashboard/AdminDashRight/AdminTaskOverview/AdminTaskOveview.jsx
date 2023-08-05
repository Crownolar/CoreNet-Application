import React from "react";
import "../AdminTaskOverview/AdminTaskOverview.css";
import "../AdminTaskOverview/AdminTaskOverviewMedia.css"
import { Progress, Space } from 'antd';


const AdminTaskOveview = () => {
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
