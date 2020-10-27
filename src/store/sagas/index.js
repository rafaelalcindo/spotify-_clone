import { all, takeLatest } from 'redux-saga/effects'
import { Playlist } from '../../pages/browse/styles'

import { Types as PlaylistsTypes } from '../ducks/playlists'

import { getPlaylists } from './playlists'

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)
  ])
}
