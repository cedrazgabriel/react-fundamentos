import React from 'react'
import PropTypes from 'prop-types' 

export default function Post(props) {
    return (
        <>
         <article>
            <strong>{props.title}</strong>
            <br />
            <small>{props.subtitle}</small>
            <p>Likes: {props.likes}</p>
        </article> 
        <br /> 
        </>
       
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}