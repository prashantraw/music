import { actionTypes } from "./Contants";

export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: "37i9dQZF1E371iyl8h3e96",
  selectedPlaylist: null,
  currentPlaying: null,
  playerState: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case actionTypes.GET_PLAYLIST: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case actionTypes.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case actionTypes.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case actionTypes.SET_PLAYING:
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case actionTypes.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      };
      case actionTypes.SET_PLAYLIST_ID:
        return {
          ...state,
          selectedPlaylistId: action.selectedPlaylistId,
        };  
    default:
      return state;
  }
};

export default reducer;
