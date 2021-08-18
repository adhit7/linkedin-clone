import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
