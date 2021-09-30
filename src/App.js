import React from 'react';
import{useSelector} from "react-redux"
import './App.css';
import { selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">

    {/* Header */}
    <Header></Header>
    
    {!user ? (<Login></Login>):
    (<div className="app_body">
    <Sidebar></Sidebar>
    <Feed></Feed>
    </div>
    )}
    {/* Widgets */}
    </div>
  );
}

export default App;
