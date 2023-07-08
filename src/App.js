import React from 'react';

import Post from './Post';
import Header from './Header';

const posts = [
    {
        likes: 32,
        title: "João foi assaltado",
        subtitle: "Ipanema continua perigosa"
    },
    {
        likes: 15,
        title: "ENEM Superestimado",
        subtitle: "Inscrições abertas"
    },
    {
        likes: 25,
        title: "Concurso da policia federal",
        subtitle: "Governo abre 5000 vagas"
    },
]
export default function App(){
    return (
        <>   
           <Header title="Teste Blog">
           <h2>Posts da semana</h2>
            </Header>

            <hr/>

          {
          posts.map((post) => (
                <Post
                key={post.title}
                likes={post.likes}
                title={post.title}
                subtitle={post.subtitle}
                />
          ))
          }
           
        </>   
    )
}
