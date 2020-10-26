import React from 'react'

import { Playlist, Title, List, Container } from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1" >
        <img
          src="https://www.sunsetweb.com.br/img/posts/postagens/20190129143724974/800/143724290120192577.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>relaxe enquanto você programa ouvindo apenas as melhores musicas</p>
      </Playlist>

      <Playlist to="/playlists/2" >
        <img
          src="https://www.sunsetweb.com.br/img/posts/postagens/20190129143724974/800/143724290120192577.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>relaxe enquanto você programa ouvindo apenas as melhores musicas</p>
      </Playlist>

      <Playlist to="/playlists/3" >
        <img
          src="https://www.sunsetweb.com.br/img/posts/postagens/20190129143724974/800/143724290120192577.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>relaxe enquanto você programa ouvindo apenas as melhores musicas</p>
      </Playlist>

      <Playlist to="/playlists/4" >
        <img
          src="https://www.sunsetweb.com.br/img/posts/postagens/20190129143724974/800/143724290120192577.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>relaxe enquanto você programa ouvindo apenas as melhores musicas</p>
      </Playlist>

    </List>
  </Container>
)

export default Browse;
