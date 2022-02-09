import * as actionTypes from "./types";

/* Setting type and payload for student */
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

/* Clearing student data */
export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  };
};

/* Setting channels for students */
export const setCurrentChannel = channel => {
  return {
    type: actionTypes.SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel
    }
  };
};
// private channel is being set up for the student
export const setPrivateChannel = isPrivateChannel => {
  return {
    type: actionTypes.SET_PRIVATE_CHANNEL,
    payload: {
      isPrivateChannel
    }
  };
};

//user posts can be set up
export const setUserPosts = userPosts => {
  return {
    type: actionTypes.SET_USER_POSTS,
    payload: {
      userPosts
    }
  };
};

/* Customizing themes */
export const setColors = (primaryColor, secondaryColor) => {
  return {
    type: actionTypes.SET_COLORS,
    payload: {
      primaryColor,
      secondaryColor
    }
  };
};
