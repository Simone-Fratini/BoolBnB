import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdLocationOn, MdBed, MdBathroom } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";

function Card({ property }) {
    const { host, location, rooms, bathrooms, pricePerNight, rating } =
        property;
    return (
        <div className="group cursor-pointer">
            {/* Image  */}
            <div className="relative w-full aspect-square">
                <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-red-950 flex items-center justify-center text-white">
                        SPAZIO PER IMMAGINE
                    </div>
                </div>
                {/* hearth */}
                <button className="absolute top-3 right-3 p-2 hover:opacity-80 transition-opacity">
                    <IoMdHeartEmpty className="text-2xl text-white drop-shadow-lg" />
                </button>
            </div>
            {/* location and rating */}
            <div className="flex flex-col py-2 gap-1">
                <div className="flex justify-between items-center px-1">
                    <span className="font-medium">{location}</span>
                    <span className="flex items-center gap-1">
                        <AiFillStar className="text-sm" />
                        {rating}
                    </span>
                </div>
                <span className="text-gray-500 text-sm px-1">Host: {host}</span>
                
                {/* details */}
                <div className="grid grid-cols-2 gap-2 mt-1 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                        <MdLocationOn className="text-lg" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdBed className="text-lg" />
                        <span>{rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
                    </div>
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
    );
}

export default Card;
