export const GET_ALL_VIDEOS = 'GET_ALL_VIDEOS';
export const GET_ENROLLED_VIDEOS = 'GET_ENROLLED_VIDEOS';

export const SET_ALL_VIDEOS = 'SET_ALL_VIDEOS';
export const SET_ENROLLED_VIDEOS = 'SET_ENROLLED_VIDEOS';
export const SET_SELECTED_VIDEO_DATA = 'SET_SELECTED_VIDEO_DATA';


export const setAllVideos = payload => ({type: SET_ALL_VIDEOS, payload})
export const setSelectedVideoData = payload => ({type: SET_SELECTED_VIDEO_DATA, payload})