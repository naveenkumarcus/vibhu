import environment from "../../../environment"
import { RestClientService } from "../../../service"
import { setAllVideos, setSelectedVideoData } from "../../actions/video";

export const getAllVideos = ()  => async dispatch => {
    const _list = await RestClientService.get(environment.getAllVideos);
    dispatch(setAllVideos(_list));   
}

export const getVideoDataById = (id)  => async dispatch => {
    const selectedVideo = await RestClientService.get(environment.getVideoDataById.replace(':id', id));
    dispatch(setSelectedVideoData(selectedVideo));   
}