import { Avatar } from '@material-ui/core'
import { CommentOutlined,  SendOutlined,  ShareOutlined, ThumbUpOutlined } from '@material-ui/icons'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
function Post({name, description, message, photoUrl, id}) {
    return (
        <div className="post" id={"Post#"+id} >
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOptions Icon={ThumbUpOutlined} color="grey" title="Like"/>
                <InputOptions Icon={CommentOutlined} color="grey" title="Comment"/>
                <InputOptions Icon={ShareOutlined} color="grey" title="Share"/>
                <InputOptions Icon={SendOutlined} color="grey" title="Send"/>

            </div>
        </div>
    )
}

export default Post
