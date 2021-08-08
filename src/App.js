import React from 'react'
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default () => {
  return (
    <div className = "app-window">
      <div className = "sidebar">

        <header>
          
          <img className = "header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>

          <div className = "header--buttons">

            <div className = "header--btn">
              <DonutLargeIcon style={{color:'#919191'}} />
            </div>

            <div className = "header--btn">
              <ChatIcon style = {{color:'#919191'}}/>
            </div>

            <div className = "header--btn">
              <MoreVertIcon style = {{color:'#919191'}}/>
            </div>
            
          </div>

        </header>

        <div className = "search">
          busca

        </div>

        <div className = "chatlist">
          chat

        </div>


      </div>
      <div className = "contentarea">
        div dois
      </div>
    </div>
  );
}