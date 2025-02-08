function Card({ property }) {
    const { host, location, rooms, bathrooms, pricePerNight, rating } =
        property;
    return (
        <div>
            {/* image */}
            <div className="w-full aspect-square bg-red-950 rounded-xl text-white">SPAZIO PER IMMAGINE</div>
            {/* desc */}
            <div className="flex flex-col py-2">
                <div className="flex justify-between">
                    <span>{location}</span>
                    <span>{rating}</span>
                </div>
                <span>Host: {host}</span>
                <span>{pricePerNight}€ per Night</span>
            </div>
        </div>
    );
}

export default Card;
