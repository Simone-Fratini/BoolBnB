import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdLocationOn, MdBed, MdBathroom } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card({ property }) {
    const { title, host, location, rooms, bathrooms, pricePerNight, rating, img } = property;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        className: "slides-container",
    };

    return (
        <div className="group cursor-pointer">
            {/* Image carousel */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                {img && img.length > 0 ? (
                    <Slider {...settings}>
                        {img.map((image, index) => (
                            <div key={index} className="aspect-square">
                                <img
                                    src={image}
                                    alt={`Property image`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="w-full h-full bg-red-950 flex items-center justify-center text-white">
                        SPAZIO PER IMMAGINE
                    </div>
                )}
                {/* hearth */}
                <button className="absolute top-3 right-3 p-2 hover:opacity-80 transition-opacity z-10">
                    <IoMdHeartEmpty className="text-2xl text-white drop-shadow-lg" />
                </button>
            </div>
            {/* location and rating */}
            <div className="flex flex-col py-2 gap-1">
                <div className="flex justify-between items-center px-1">
                    <span className="font-medium">{title}</span>
                    <span className="flex items-center gap-1">
                        <AiFillStar className="text-sm" />
                        {rating}
                    </span>
                </div>
                <span className="text-gray-500 text-sm px-1">Host: {host}</span>
                
                {/* details */}
                <div className="flex flex-col gap-2 mt-1 text-gray-500 text-sm">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <MdLocationOn className="text-lg" />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MdBed className="text-lg" />
                            <span>{rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <MdBathroom className="text-lg" />
                            <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <TbRulerMeasure className="text-lg" />
                            <span>120 m²</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
