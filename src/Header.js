import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header(props){
    return (
        <>
            <h1>{ props.title }</h1>  
           {props.children}
           <Button
            onClick={props.onToggleTheme
        }>
            Mudar tema
            </Button>       
        </>       
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

Header.defaultProps = {
    title: "Cedraz Blog"
}