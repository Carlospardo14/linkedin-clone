import { createUserWithEmailAndPassword, getAuth, updateProfile ,signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import "./Login.css";
function Login() {
  const auth = getAuth();

  const [name, setName]= useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const logginToApp = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        profileUrl: userCredential.user.photoURL
      }))
    }).catch(error => alert(error))
  }
  
  const register = () =>{
    if(!name){
      return alert('Please enter a full name!')
    }
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      updateProfile(userCredential.user,{
        displayName:name,
        photoURL: profilePic
      }).then(()=>{
        dispatch(
          login({
          email:userCredential.user.email,
          uid: userCredential.user.uid,
          displayName:name,
          photoURL: profilePic
        }))
      })
    }).catch((error)=> alert(error))
  };

    return (
        <div className="login">
        <img
        src="https://www.pinclipart.com/picdir/middle/55-557165_graphic-transparent-library-file-logo-wikimedia-commons-transparent.png"
        alt="linkin logo"
      />

      <form >
        <input 
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="Full Name (is required if registering)"
          type="text"
        />

        <input type="text"
          value={profilePic}
          onChange={e=>setProfilePic(e.target.value)}
          placeholder="Profile Picture URL (optional)" />

        <input value={email} 
          type="email" 
          onChange={e=>setEmail(e.target.value)} 
          placeholder="Email" 
        />

        <input type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          placeholder="Password" 
        />

        <button type="submit" onClick={logginToApp}>Sign In</button>
      </form>

      <p>Not a member?{" "}
        <span className="login_register" onClick={register}>Register Now</span>
      </p>

        </div>  
    )
}

export default Login
