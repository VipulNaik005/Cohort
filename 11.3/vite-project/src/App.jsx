import React from "react";
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { networkAtom, jobAtom, notificationAtom, messagingAtom } from "./atoms/atoms";
import { useState } from "react";

function App() {
  
  return (
    <RecoilRoot>
      <Dashboard />
    </RecoilRoot>
  );
}

function Dashboard(){
  const notificationCount = useRecoilValue(notificationAtom);
  const jobCount = useRecoilValue(jobAtom);
  const networkCount = useRecoilValue(networkAtom);
  const [messageCount,setMessageCount] = useRecoilState(messagingAtom);

  return (
    <div>
      <button>Notifictaions : ({notificationAtom > 99 ?"99+":notificationCount})</button>
      <button>Jobs : {jobCount}</button>
      <button>Network : {networkCount}</button>
      <button onClick={()=>setMessageCount(c=>c+1)}>messages : {messageCount>99?"99+":messageCount}</button>
    </div>
  )
}

export default App;