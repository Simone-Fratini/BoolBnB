import React, { useState, useEffect, useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext";

const myUrl = "http://localhost:3000";
const propertiesEndPoint = "/properties";
const reviewsEndPoint = "/reviews";

function PropertyDetail() {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const { getReviews, reviews, addReview, liked, toggleLike } =
    useContext(GlobalContext);
  const [selectedProperty, setSelectedProperty] = useState(null);

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

  if (!selectedProperty) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-detail mx-auto p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        {selectedProperty.title}
      </h1>
      <img
        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="w-full h-auto rounded-lg mb-4"
      />
      <p className="text-sm sm:text-base md:text-lg mb-4">
        {selectedProperty.description}
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
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              Mostra tutti i servizi
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>
          <MenuItems className="absolute left-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-none">
            <div className="py-1">
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  <p>Superficie: {selectedProperty.square_meters} m²</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  <p>Indirizzo: {selectedProperty.address}</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  <p>Numero civico: {selectedProperty.address_number}</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  <p>Città: {selectedProperty.city}</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  <p>Tipo di proprietà: {selectedProperty.property_type}</p>
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>

      <button onClick={toggleLike} className="text-sm text-blue-500">
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

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
          className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Submit Review"
        </button>
      </div>
    </div>
  );
}

export default PropertyDetail;
