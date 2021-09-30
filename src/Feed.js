import { CalendarViewDay, Create,  Event, OndemandVideo, Photo } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import { db, auth } from './firebase'
import { collection ,addDoc, serverTimestamp,  query, onSnapshot, orderBy } from '@firebase/firestore'
import InputOptions from './InputOptions'
import Post from './Post'
function Feed() {   
    const [input,setInput] = useState('')
    const [posts,setPosts] = useState([]);



    useEffect(() =>{
        const q = query(collection(db,"posts"), orderBy("timeStamp", "desc") );
        const unsuscribe = onSnapshot(q,(querySnapshot)=>{
            setPosts(
                querySnapshot.docs.map((doc)=>({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            })
        
        
    }, []);

    const sendPost = (e) =>{
        e.preventDefault();

        addDoc(collection(db,"posts"),{
            name: "Carlos Pardo",
            description:"Ingeniero en Computación",
            message: input,
            photoUrl :"",
            timeStamp: serverTimestamp()
        });

        setInput("")
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a Post" />
                        <button
                         onClick={sendPost}
                         type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions title="Photo" Icon={Photo} color="#70B5F9"></InputOptions>
                    <InputOptions title="Video" Icon={OndemandVideo} color="#E7A33E"></InputOptions>
                    <InputOptions title="Event" Icon={Event} color="#C0CbCD"></InputOptions>
                    <InputOptions title="Photo" Icon={CalendarViewDay} color="#7fc15e"></InputOptions>
                </div>
            </div>

            {/* Post */}

            {posts.map(({id, data: { name, description,photoUrl,message}} )=>
            
            (<Post 
            key={id}
            id={id}
            name={name}
            message={message}
            description={description}
            photoUrl={photoUrl}
            />
           
            ))}
            {/* <Post name="Carlos Pardo" description="This is not a test" message="wow this works"  /> */}
        </div>
    )
}
export default Feed 
