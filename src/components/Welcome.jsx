import { retry } from "@reduxjs/toolkit/query";
import { current } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";

function Welcome(params) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = shuffleArray(Array.from({ length: 12 }, (_, index) => `image-${index + 1}.webp`));
  const nbImages = images.length
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(c => {
        c++;
        if (c >= 5){
          c = 0;
        }
        return c;
      })
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [nbImages]); // Dependency ensures updates if `nbImages` changes


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Choisissez un index aléatoire
      const randomIndex = Math.floor(Math.random() * (i + 1));
  
      // Échangez les éléments
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  return (
    <div className="flex h-full w-full bg-slate-500 max-sm:flex-col max-md:flex-col max-lg:flex-col">
      {/* Section 1 */}
      <div className="pt-3 flex-1 bg-teal-100">
        <div className="h-full text-center overflow-hidden flex flex-col justify-center items-center p-4">
          <img
            src={"/images/" + images[currentImage]}
            alt=""
            className="w-full h-full object-contain rounded-xl max-h-[600px] max-w-[600px]"
          />
          <h1 className="max-sm:text-xl text-3xl font-bold text-slate-700 mt-4 overflow-hidden whitespace-nowrap border-r-2 border-slate-700 animate-typewriter">
            Voyagez à travers de pixels 🚀.
          </h1>
        </div>
      </div>
  
      {/* Section 2 */}
      <div className="pt-3 flex-1 bg-slate-700">
        <div className="h-full text-center overflow-hidden flex flex-col justify-center items-center p-4">
          <h1 className="max-sm:text-xl text-3xl font-bold text-teal-100 mb-4 overflow-hidden whitespace-nowrap border-r-2 border-teal-100 animate-typewriter">
            Le monde 🌍 visuel, entre vos mains.
          </h1>
          <img
            src={"/images/" + images[currentImage + nbImages / 2]}
            alt=""
            className="w-full h-full object-contain rounded-xl max-h-[700px] max-w-[700px]"
          />
        </div>
      </div>
    </div>
  );
  

}

export default Welcome;