import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseUrl, propsEndpoint, revsEndpoint } from "../globals/apiUrls";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [liked, setLiked] = useState(false);

  // Funzione per recuperare tutte le proprietà
  const getProperties = () => {
    axios
      .get(baseUrl + propsEndpoint)
      .then((res) => setProperties(res.data))
      .catch((error) => console.error(error));
  };

  //  recuperare le recensioni di una proprietà
  const getReviews = (propertyId) => {
    axios
      .get(`${baseUrl}${revsEndpoint}?propertyId=${propertyId}`)
      .then((res) => setReviews(res.data))
      .catch((error) => console.error(error));
  };

  // Funzione per aggiungere una recensione
  const addReview = (propertyId, newReview) => {
    axios
      .post(baseUrl + revsEndpoint, { propertyId, review: newReview })
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

  const addProperty = (newProperty) => {
    axios
      .post(baseUrl + propsEndpoint, newProperty)
      .then((res) => {
        setProperties([...properties, res.data]);
      })
      .catch((error) => console.error(error));
  };

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
        addProperty,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
