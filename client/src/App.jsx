import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelListContainer, ChannelContainer, Auth } from './components';
import './App.css';
//TODO: Create Backend on Server Directory timestamp: 1:08:57

const apiKey = 'zman9kwqm2w6';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

//the actual app thing
const App = () => {
  if(!authToken) return <Auth />

  return (
    <div className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChannelListContainer 

          />
        <ChannelContainer
        
        />
      </Chat>
    </div>
  );
}

export default App;
