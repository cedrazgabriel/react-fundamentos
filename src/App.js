import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import ThemeProvider from './ThemeContext';

export default function App(){
    const [posts, setPosts] = useState([
        {id: Math.random(),likes: 32,title: "João foi assaltado",subtitle: "Ipanema continua perigosa", read: false },
        {id: Math.random(),likes: 15,title: "ENEM Superestimado",subtitle: "Inscrições abertas", read: true},
        {id: Math.random(),likes: 25,title: "Concurso da policia federal",subtitle: "Governo abre 5000 vagas", read: false}
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
        setPosts((prevState)=> (
            prevState.filter((item) => item.id != postId)
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
