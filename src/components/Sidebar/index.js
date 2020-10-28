import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import playlists, { Creators as PlaylistsActions } from '../../store/ducks/playlists'

import { Container, NewPlaylist, Nav } from './styles'

import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

import Loading from '../../components/Loading'

class Sidebar extends Component {

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      })),
      loading: PropTypes.bool
    }).isRequired
  }

  render() {
    return(
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/"> Navegar </Link>
            </li>
            <li>
              <Link to="/"> Rádio </Link>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href=""> Seu Daily Mix </a>
            </li>
            <li>
              <a href=""> Tocadas recentemente </a>
            </li>
            <li>
              <a href=""> Música </a>
            </li>

            <li>
              <a href=""> Música </a>
            </li>
          </Nav>

          <Nav>
            <li>
              <a href=""> Álbums </a>
            </li>
            <li>
              <a href=""> Artistas </a>
            </li>
            <li>
              <a href=""> Estações </a>
            </li>

            <li>
              <a href=""> Arquivos locais </a>
            </li>

            <li>
              <a href=""> Vídeos </a>
            </li>

            <li>
              <a href=""> Podcasts </a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id} >
                <Link to={`/playlists/${playlist.id}`} >{ playlist.title }</Link>
              </li>
            ))}
          </Nav>

        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  };
}




const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
