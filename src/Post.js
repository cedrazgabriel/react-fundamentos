import React from 'react'
import PropTypes from 'prop-types' 
import PostHeader from './PostHeader'

export default function Post(props) {
    return (
        <>
         <article>
          <PostHeader
          onRemove = {props.onRemove}
          post = {{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read
          }}
           />         
            <br />
            <small>{props.post.subtitle}</small>
            <p>Likes: {props.post.likes}</p>
         </article> 
          <br /> 
        </>
       
    )
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number,
        likes: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired    
}