import likedIcon from './../assets/liked-icon.svg'
import { useSelector, useDispatch } from "react-redux";

import {
  updateState
} from "./../features/appSlice";
import { PageEnum } from "./../utils/EnumApp";

function LikeCounter() {
    const dispatch = useDispatch()
    const likedImages = useSelector((state) => state.search.likedImages);

    const handleChangeAppState = (newState) => {
      dispatch(updateState(newState))
    }

    return (
        <button onClick={() => handleChangeAppState(PageEnum.LIKED_LIST)} type="button" class="relative h-full inline-flex items-center  text-sm font-medium text-center text-white bg-teal-300 rounded-lg hover:bg-teal-200 pl-3 pr-3">
        <img src={likedIcon} alt=""  className='h-8 w-8'/>
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{likedImages.length}</div>
        </button>
    )
}

export default LikeCounter;