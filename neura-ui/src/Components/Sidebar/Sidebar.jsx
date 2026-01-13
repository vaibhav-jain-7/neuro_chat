// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {

  
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img className="new-chat" src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img className="message-icon" src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="botton-item recent-entry">
          <img className="question-icon" src={assets.question_icon} alt="" />
          {extended?<p>Help</p> : null}
        </div>

        <div className="botton-item recent-entry">
          <img className="history_icon" src={assets.history_icon} alt="" />
          {extended?<p>Activity</p> : null} 
        </div>

        <div className="botton-item recent-entry">
          <img className="setting_icon" src={assets.setting_icon} alt="" />
          {extended?<p>Settings</p> : null} 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
