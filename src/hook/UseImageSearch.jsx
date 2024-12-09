import { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import {
  addToHistoryResearches,
  updatecurrentSearch,
  updatecurrentPage,
} from "./../features/searchSlice";
import { use } from "react";


const useImageSearch = () => {
  const [data, setData] = useState({
    nbImages: 0,
    nbPages: 0,
    urlImages: [],
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Récupérer la valeur de currentSearch depuis le store Redux
  const currentSearch = useSelector((state) => state.search.currentSearch);
  const currentPage = useSelector((state) => state.search.currentPage);
  
  const apiUrlEnv = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
    const fetchImages = async () => {
      
      setLoading(true);
      setError(null);
      
      const apiUrl = `${apiUrlEnv}?per_page=12&page=${currentPage}&query=${currentSearch}&client_id=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Erreur : ${response.statusText}`);
        }

        const result = await response.json();
        setData({
          nbImages: result.total,
          nbPages: result.total_pages,
          urlImages: result.results.map((img) => img.urls.full),
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (currentSearch) {
      fetchImages();
    }
  }, [currentSearch,currentPage]); // L'effet se déclenche uniquement lorsque currentSearch change

  return { ...data, error, loading };
};

export default useImageSearch;
