import axios from "axios";
import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
const myUrl = "http://localhost:3000";
const propertiesEndPoint = "/properties";
const reviewsEndPoint = "/reviews";

const GlobalProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [liked, setLiked] = useState(false);

  // Funzione per recuperare tutte le proprietà
  const getProperties = () => {
    axios
      .get(myUrl + propertiesEndPoint)
      .then((res) => setProperties(res.data))
      .catch((error) => console.error(error));
  };

  //  recuperare le recensioni di una proprietà
  const getReviews = (propertyId) => {
    axios
      .get(`${myUrl}${reviewsEndPoint}?propertyId=${propertyId}`)
      .then((res) => setReviews(res.data))
      .catch((error) => console.error(error));
  };

  // Funzione per aggiungere una recensione
  const addReview = (propertyId, newReview) => {
    axios
      .post(myUrl + reviewsEndPoint, { propertyId, review: newReview })
      .then((res) => {
        setReviews([...reviews, res.data]);
      })
      .catch((error) => console.error(error));
  };

  // Funzione per gestire il like
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        properties,
        setProperties,
        reviews,
        getReviews,
        addReview,
        liked,
        toggleLike,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
