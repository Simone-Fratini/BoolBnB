import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineLocationCity } from "react-icons/md";
import { imagesUrl } from "../globals/apiUrls";
import PaginaContact from "../components/PaginaContact";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
    useAddReviewQuery,
    useGetPropertyQuery,
    useGetReviewsQuery,
} from "../hooks/useDataQuery";

function PropertyDetail() {
    const { id } = useParams();
    const [isLiked, setIsLiked] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); // Indice dell'immagine principale
    const { mutate } = useAddReviewQuery(id);

    //* ACTIONS
    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const [textArea] = e.target.elements;
        const newReview = textArea?.value;
        if (!newReview || !newReview.length)
            return console.log("recensione deve avere caratteri");
        mutate({ property_id: id, title: "prova title", description: newReview });
    };

    const toggleLike = () => {
        setIsLiked((curr) => !curr);
        // todo: qui o fuori (useEffect forse) logica per dec/incrementare likes della property sul db
    };

    //* QUERIES
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

    //* RETURNS
    // attesa risposta
    if (isLoadingP || isLoadingR) return <div>Loading...</div>;
    // chiamata fallita
    if (isErrorP || isErrorR) return <pre>Error</pre>;
    // risposta ricevuta
    return (
        <div className="property-detail mx-auto p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <section>
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
            </section>

            <section>
                <p className="text-sm sm:text-base md:text-lg mb-4 mt-3 ">
                    {property.description}
                    <button
                        onClick={toggleLike}
                        className="text-sm text-black ml-2"
                    >
                        {isLiked ? "❤️ Liked" : "🤍 Like"}
                    </button>
                </p>
                <div className="flex space-x-4 border-b-2 pb-4 mb-4">
                    <p className="text-sm sm:text-base">
                        {property.n_bedrooms} camere da letto
                    </p>
                    <p className="text-sm sm:text-base">
                        {property.n_bathrooms} bagni
                    </p>
                    <p className="text-sm sm:text-base">
                        {" "}
                        {property.n_beds} letti
                    </p>
                </div>
            </section>

            <section className="mb-4">
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
                <div>
                    <MapContainer
                        center={
                            property.city === "Roma"
                                ? [41.9028, 12.4964] // Roma
                                : property.city === "Milano"
                                ? [45.4642, 9.19] // Milano
                                : property.city === "Palermo"
                                ? [38.1157, 13.3615] // Palermo
                                : property.city === "Bologna"
                                ? [44.4949, 11.3426] // Bologna
                                : property.city === "Cortina d'Ampezzo"
                                ? [46.5386, 12.1358] // Cortina d'Ampezzo
                                : property.city === "Trento"
                                ? [46.0704, 11.121] // Trento
                                : property.city === "Firenze"
                                ? [43.7696, 11.2558] // Firenze
                                : property.city === "Torino"
                                ? [45.0703, 7.6869] // Torino
                                : [41.9028, 12.4964] // Default (Roma)
                        }
                        zoom={13}
                        style={{ height: "500px", width: "100%" }}
                    >
                        {/* Layer di OpenStreetMap */}
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {/* Marker */}
                        <Marker
                            position={
                                property.city === "Roma"
                                    ? [41.9028, 12.4964]
                                    : property.city === "Milano"
                                    ? [45.4642, 9.19]
                                    : property.city === "Palermo"
                                    ? [38.1157, 13.3615]
                                    : property.city === "Bologna"
                                    ? [44.4949, 11.3426]
                                    : property.city === "Cortina d'Ampezzo"
                                    ? [46.5386, 12.1358]
                                    : property.city === "Trento"
                                    ? [46.0704, 11.121]
                                    : property.city === "Firenze"
                                    ? [43.7696, 11.2558]
                                    : property.city === "Torino"
                                    ? [45.0703, 7.6869]
                                    : [41.9028, 12.4964] // Default (Roma)
                            }
                        >
                            <Popup>
                                Benvenuto a{" "}
                                {property.city ? property.city : "Roma"}! 🇮🇹
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </section>
            <section className="border-1 rounded-[3vw]  flex max-w-96 m-auto justify-center  p-2 gap-5">
                <div className="flex justify-between">
                    <img
                        src="/images/left.png"
                        alt=""
                        className="scale-x-[-1] pl-1"
                    />
                    <p className="text-center">
                        Amato <br /> dagli ospiti
                    </p>
                    <img src="/images/left.png" alt="" className=" pl-1" />
                </div>
                <p className="text-center">
                    {reviews.length} <br /> recensione
                </p>
            </section>
            <section className="reviews-section mt-6">
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

                <form onSubmit={handleReviewSubmit}>
                    <textarea
                        placeholder="Scrivi una recensione"
                        className="mt-4 w-full p-2 border rounded-lg"
                    />
                    <button
                        type="submit"
                        className="mt-2 p-2 mb-20 bg-teal-700 text-white rounded-lg"
                    >
                        Invia recensione
                    </button>
                </form>
            </section>
        </div>
    );
}

export default PropertyDetail;
