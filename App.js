import './App.css';
import React,{ useState } from 'react';
import Header from "./components/Header";

function App() {
  const [user,setUser]=useState("Shivam Tiwari");
  return (
    <>
      <Header user={user}/>
      <h1 className='heading'>My total marks is 80</h1>
    </>
  );
}

export default App;