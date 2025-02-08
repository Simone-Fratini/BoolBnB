import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineLocationCity } from "react-icons/md";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext";

const myUrl = "http://localhost:3000";
const propertiesEndPoint = "/properties";

function PropertyDetail() {
  const { id } = useParams();
  const { getReviews, reviews, addReview, liked, toggleLike } =
    useContext(GlobalContext);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Indice dell'immagine principale

  useEffect(() => {
    axios
      .get(`${myUrl}${propertiesEndPoint}/${id}`)
      .then((res) => {
        setSelectedProperty(res.data);
        getReviews(id);
      })
      .catch((error) => {
        console.error("Errore nel recupero della proprietà", error);
      });
  }, [id, getReviews]);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  if (!selectedProperty) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-detail mx-auto p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        {selectedProperty.title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="flex-1 mb-4 sm:mb-0">
          <img
            src={`http://localhost:3000/images/${selectedProperty.id}${selectedProperty.img_endpoints[activeIndex]}`}
            alt={`Property Image ${activeIndex + 1}`}
            className="w-full h-80 rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-row sm:flex-col justify-between space-x-2 sm:space-x-0 sm:space-y-2 sm:ml-4 max-h-90 overflow-auto">
          {selectedProperty.img_endpoints.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:3000/images/${selectedProperty.id}${img}`}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                activeIndex === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>

      <p className="text-sm sm:text-base md:text-lg mb-4">
        {selectedProperty.description}
        <button onClick={toggleLike} className="text-sm text-black">
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </p>

      <div className="flex space-x-4 border-b-2 pb-4 mb-4">
        <p className="text-sm sm:text-base">
          {selectedProperty.n_bedrooms} camere da letto
        </p>
        <p className="text-sm sm:text-base">
          {selectedProperty.n_bathrooms} bagni
        </p>
        <p className="text-sm sm:text-base"> {selectedProperty.n_beds} letti</p>
      </div>

      <div className="mb-4">
        <p className="flex items-center gap-2">
          <FaHouse />
          Superficie: {selectedProperty.square_meters} m²
        </p>
        <p className="flex items-center gap-2">
          <MdOutlineLocationCity />
          Città: {selectedProperty.city}
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt />
          Indirizzo: {selectedProperty.address}
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt />
          Numero civico: {selectedProperty.address_number}
        </p>
        <p className="flex items-center gap-2">
          <GiFamilyHouse />
          Tipo di proprietà: {selectedProperty.property_type}
        </p>
      </div>

      <div className="reviews-section mt-6">
        <h3 className="text-xl font-semibold mb-4">Recensioni</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card border-b-2 py-2">
              <p className="font-medium">{review.title}</p>
              <p className="text-sm text-gray-700">{review.description}</p>
              <p className="text-xs text-gray-500">{review.create_at}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}

        <textarea
          placeholder="Scrivi una recensione"
          className="mt-4 w-full p-2 border rounded-lg"
        />
        <button
          onClick={() => addReview(id, "Nuovo testo recensione")}
          className="mt-2 p-2 mb-20 bg-teal-700 text-white rounded-lg"
        >
          Invia recensione
        </button>
      </div>
    </div>
  );
}

export default PropertyDetail;
