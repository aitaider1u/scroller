import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLikedImage,
  removeLikedImage,
} from "../features/searchSlice";
import likedIcon from "./../assets/liked-icon.svg";
import likeIcon from "./../assets/like-icon.svg";


function LikedImagesList() {
  const dispatch = useDispatch();
  const likedImages = useSelector((state) => state.search.likedImages);

  
  const handleLikeToggle = (url) => {
    if (likedImages.includes(url)) {
      dispatch(removeLikedImage(url)); // Supprime l'image des favoris
    } else {
      dispatch(addLikedImage(url)); // Ajoute l'image aux favoris
    }
  };


  return (
    <>
      <div className="relative flex flex-col items-center h-screen m-3 ml-5 mr-5">
        <div className="w-full h-full flex flex-col relative max-w-[1200px]">
          <div className="flex justify-between mt-4 pb-4">
            <p className="text-xl max-sm:text-lg text-gray-500">

              <span className="max-sm:text-xl font-bold text-3xl text-gray-800">
                Your Favorite 
              </span>
              <span className="max-sm:text-xl text-2xl text-gray-800">
                 {" "} Pics 📸  ({likedImages.length})
              </span>
              
            </p>
          </div>

          {likedImages.length === 0 && (
            <div className="h-full w-full flex justify-center items-center flex-col">
              <p className="text-4xl max-sm:text-2xl text-gray-500">Empty 🥲</p>
            </div>
          )}

          {likedImages.length !== 0 && (
            <>
              <div className="max-sm:grid-cols-1 max-md:grid-cols-2 grid max-lg:grid-cols-3 grid-cols-4 gap-4 pt-3">
                {likedImages.map((url, index) => (
                  <div
                    key={index}
                    className="relative max-sm:w-full max-sm:h-[220px] w-full h-[220px] bg-slate-400"
                  >
                    <img
                      src={url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <img
                      src={likedImages.includes(url) ? likedIcon : likeIcon} // Affiche l'icône correspondante
                      alt=""
                      className="w-8 h-8 absolute top-2 right-2 cursor-pointer"
                      onClick={() => handleLikeToggle(url)} // Gestion des clics pour liker ou unliker
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
     
      </div>
    </>
  );
}

export default LikedImagesList;
