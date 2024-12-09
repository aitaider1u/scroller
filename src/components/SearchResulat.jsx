import React from "react";
import useImageSearch from "../hook/UseImageSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  updatecurrentPage,
  addLikedImage,
  removeLikedImage,
} from "./../features/searchSlice";
import likedIcon from "./../assets/liked-icon.svg";
import likeIcon from "./../assets/like-icon.svg";
import LikeCounter from "../layouts/LikeCounter";

function SearchResult() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.search.currentPage);
  const likedImages = useSelector((state) => state.search.likedImages);
  const currentSearch = useSelector((state) => state.search.currentSearch);

  const { nbImages, nbPages, urlImages, error, loading } = useImageSearch();

  const nextPage = () => {
    if (currentPage < nbPages) {
      dispatch(updatecurrentPage(currentPage + 1));
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      dispatch(updatecurrentPage(currentPage - 1));
    }
  };

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
              <span className="max-sm:text-xl font-bold text-2xl text-gray-800">
                {nbImages}{" "}
              </span>
              pics <span className="text-3xl">📸</span> found ({currentSearch})
            </p>
            {nbImages > 0 && <p className="p-1">{currentPage}/{nbPages}</p>}
          </div>

          {nbImages === 0 && (
            <div className="h-full w-full flex justify-center items-center flex-col">
              <p className="text-4xl max-sm:text-2xl text-gray-500">No 📸</p>
              <p className="text-4xl max-sm:text-2xl text-gray-500">Try again 🧐</p>
            </div>
          )}

          {!loading && nbImages !== 0 && (
            <>
              <div className="max-sm:grid-cols-1 max-md:grid-cols-2 grid max-lg:grid-cols-3 grid-cols-4 gap-4 pt-3">
                {urlImages.map((url, index) => (
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
              <div className="flex justify-between mt-4 pb-4">
                <button
                  onClick={previousPage}
                  className={`bg-teal-200 pl-2 pr-2 rounded-lg p-3 ${
                    currentPage > 1 ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  Previous
                </button>
                {loading && (
                  <div className="flex items-center justify-center w-auto">
                    <div className="px-3 py-1 text-xs font-medium leading-none text-center flex justify-center items-center text-gray-800 bg-blue-200 rounded-full animate-pulse dark:bg-gray-300 p-2 dark:text-gray-700">
                      <span className="pl-2 pr-2">loading...</span>
                    </div>
                  </div>
                )}
                <button
                  onClick={nextPage}
                  className={`bg-teal-200 pl-2 pr-2 rounded-lg p-3 ${
                    currentPage < nbPages ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {loading && (
            <div className=" absolute h-full w-full flex justify-center items-center flex-col">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-teal-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
     
      </div>
    </>
  );
}

export default SearchResult;
