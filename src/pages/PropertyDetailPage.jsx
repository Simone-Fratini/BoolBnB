import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineLocationCity } from "react-icons/md";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext";
import { baseUrl, propsEndpoint, imagesUrl } from "../globals/apiUrls";
import { useGetPropertyQuery, useGetReviewsQuery } from "../hooks/useDataQuery";

function PropertyDetail() {
    const { id } = useParams();
    const { addReview, liked, toggleLike } = useContext(GlobalContext);
    const [activeIndex, setActiveIndex] = useState(0); // Indice dell'immagine principale

    // query per la proprieta
    const {
        isLoading: isLoadingP,
        isError: isErrorP,
        data: property,
    } = useGetPropertyQuery(id);
    // query per le recensioni della proprieta
    const {
        isLoading: isLoadingR,
        isError: isErrorR,
        data: reviews,
    } = useGetReviewsQuery(id);

    // attesa risposta
    if (isLoadingP || isLoadingR) return <div>Loading...</div>;
    // chiamata fallita
    if (isErrorP || isErrorR) return <pre>Error</pre>;
    // risposta ricevuta
    return (
        <div className="property-detail mx-auto p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                {property.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="flex-1 mb-4 sm:mb-0">
                    <img
                        src={`${imagesUrl}/${property.id}${property.img_endpoints[activeIndex]}`}
                        alt={`Property Image ${activeIndex + 1}`}
                        className="w-full h-80 rounded-lg object-cover"
                    />
                </div>

                <div className="flex flex-row sm:flex-col justify-between space-x-2 sm:space-x-0 sm:space-y-2 sm:ml-4 max-h-90 overflow-auto">
                    {property.img_endpoints.map((img, index) => (
                        <img
                            key={index}
                            src={`${imagesUrl}/${property.id}${img}`}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-20 h-20 rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                                activeIndex === index
                                    ? "border-2 border-blue-500"
                                    : ""
                            }`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg mb-4">
                {property.description}
                <button onClick={toggleLike} className="text-sm text-black">
                    {liked ? "❤️ Liked" : "🤍 Like"}
                </button>
            </p>

            <div className="flex space-x-4 border-b-2 pb-4 mb-4">
                <p className="text-sm sm:text-base">
                    {property.n_bedrooms} camere da letto
                </p>
                <p className="text-sm sm:text-base">
                    {property.n_bathrooms} bagni
                </p>
                <p className="text-sm sm:text-base"> {property.n_beds} letti</p>
            </div>

            <div className="mb-4">
                <p className="flex items-center gap-2">
                    <FaHouse />
                    Superficie: {property.square_meters} m²
                </p>
                <p className="flex items-center gap-2">
                    <MdOutlineLocationCity />
                    Città: {property.city}
                </p>
                <p className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    Indirizzo: {property.address}
                </p>
                <p className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    Numero civico: {property.address_number}
                </p>
                <p className="flex items-center gap-2">
                    <GiFamilyHouse />
                    Tipo di proprietà: {property.property_type}
                </p>
            </div>

            <div className="reviews-section mt-6">
                <h3 className="text-xl font-semibold mb-4">Recensioni</h3>
                {reviews?.length > 0 ? (
                    reviews?.map((review) => (
                        <div
                            key={review.id}
                            className="review-card border-b-2 py-2"
                        >
                            <p className="font-medium">{review.title}</p>
                            <p className="text-sm text-gray-700">
                                {review.description}
                            </p>
                            <p className="text-xs text-gray-500">
                                {review.create_at}
                            </p>
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
