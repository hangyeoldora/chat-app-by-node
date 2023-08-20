import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty';
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            {/* <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}
            <PrettyChatWindow 
                projectId={import.meta.env.VITE_PROJECT_ID}
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    );
};

export default ChatsPage