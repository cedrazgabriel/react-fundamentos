import React from 'react';

import Post from './Post';
import Header from './Header';

export default function App(){
    return (
        <>
           
           <Header title="Teste Blog">
           <h2>Posts da semana</h2>
            </Header>

            <Post
             likes= {32}
             title="João foi assaltado"
             subtitle="Ipanema continua perigosa"
            />
            <Post
            likes={15}
             title="ENEM Superestimado"
             subtitle="Inscrições abertas"	
            />
            <Post
            likes={25}
             title="Concurso da policia federal"
             subtitle="Governo abre 5000 vagas"
            />
           
        </>   
    )
}
