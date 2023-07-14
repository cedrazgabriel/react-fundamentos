import React from 'react'
import PropTypes from 'prop-types' 
import PostHeader from './PostHeader'

import styles from './Post.scss'
export default function Post(props) {
    console.log()
    return (    
      
         <article className={props.post.removed ? styles.deleted : styles.post}>
          <PostHeader
          onRemove = {props.onRemove}
          post = {{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read
          }}
           />         
            
            <small>{props.post.subtitle}</small>
            <p>Likes: {props.post.likes}</p>
         </article>       
    )
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number,
        likes: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
        removed: PropTypes.bool.isRequired
    }).isRequired    
}