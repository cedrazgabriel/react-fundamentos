import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import ThemeProvider from './ThemeContext';

export default function App(){
    const [posts, setPosts] = useState([
        {id: Math.random(),likes: 32,title: "João foi assaltado",subtitle: "Ipanema continua perigosa", read: false, removed: true },
        {id: Math.random(),likes: 15,title: "ENEM Superestimado",subtitle: "Inscrições abertas", read: true, removed: false},
        {id: Math.random(),likes: 25,title: "Concurso da policia federal",subtitle: "Governo abre 5000 vagas", read: false, removed: false}
    ])
    
    function handleRefresh(){
        setPosts((prevState) => [
            ...prevState,
            {id: Math.random(),
            likes:35,
            title: "teste post novo " + (prevState.length + 1),
            subtitle: "teste subtitulo " + (prevState.length + 1)}
        ])
    }

    function handleRemovePost(postId){
        setPosts((prevState) => prevState.map(post =>
            post.id === postId ?
            {
                ...post,
                removed:true
            } : post
            ))
    }

    return ( 
        <ThemeProvider>   
           <Header title="Teste Blog"
           >
           <h2>Posts da semana</h2>
           <button onClick={handleRefresh}>Atualizar</button>
            </Header>

            <hr/>

          {
          posts.map((post) => (
                <Post
                key={post.id}
                post= {post}
                onRemove = {handleRemovePost}     
                />
          ))
          }          
        </ThemeProvider>   
    )
}
