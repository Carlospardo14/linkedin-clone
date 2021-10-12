import { Avatar } from '@material-ui/core'
import { CommentOutlined,  SendOutlined,  ShareOutlined, ThumbUpOutlined } from '@material-ui/icons'
import React, {forwardRef} from 'react'
import InputOptions from './InputOptions'
import './Post.css'
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
      <div ref={ref} className="post">
          <div className="post_header">
            <Avatar src={photoUrl}></Avatar>
            <div className="postInfo">
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="post_body">
            <p>{message}</p>
          </div>
          <div className="post_buttons">
            <InputOptions Icon={ThumbUpOutlined} title="Like" color="gray" />
            <InputOptions Icon={CommentOutlined} title="Comment" color="gray" />
            <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
            <InputOptions Icon={SendOutlined} title="Send" color="gray" />
          </div>
      </div>
    );
  });

export default Post
