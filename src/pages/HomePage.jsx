import React, { useRef } from "react";
import CardsSection from "../components/CardsSection";
import { properties } from "../data/properties";
import Card from "../components/Card";

function HomePage() {
    const cardSecRef = useRef(null);

    return (
        <>
            <Jumbotron cardSecRef={cardSecRef} />

            <SearchAndFilterSection />
            <CardsSection cardSecRef={cardSecRef} title={""}>
                {properties.map((prop) => (
                    <Card key={prop.id} property={prop} />
                ))}
            </CardsSection>
        </>
    );
}

function SearchBarMobile() {
    return <div></div>;
}

function SearchAndFilterSection() {
    return (
        <>
            <div className="border-y p-4 bg-white fixed w-screen top-18 z-10 border-black">
                qui ci va la sezione dei filtri
            </div>
        </>
    );
}

function Jumbotron({ cardSecRef }) {
    const handleExploreClick = () => {
        cardSecRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="h-[75vh] relative z-20 bg-gradient-to-br from-black to-cyan-950 text-white text-center flex flex-col gap-8 justify-center items-center p-6">
            <div
                style={{ fontFamily: `"Noto Sans", serif` }}
                className="flex flex-col gap-4"
            >
                <p className="text-3xl tracking-widest font-black">
                    Your Dream Getaway Awaits
                </p>
                <p className="font-black tracking-wider">
                    From cozy cottages to luxurious villas, discover the ideal
                    space for your next adventure
                </p>
            </div>
            <div
                style={{ fontFamily: `"Noto Sans", serif` }}
                className="flex flex-col rounded-lg p-4 text-sm gap-4 bg-gradient-to-tl border border-stone-900 from-black/95 to-cyan-950"
            >
                <div className="font-semibold tracking-wider">
                    <span>
                        Already Know What You're Looking For? <br />
                        Your Dream Stay is Just One Click Away!
                    </span>
                </div>
                <div className="flex gap-4 whitespace-nowrap text-lg font-semibold tracking-wider">
                    <button className="bg-black py-4 rounded-md w-2/3 border border-slate-300">
                        Book Now!
                    </button>
                    <button
                        onClick={handleExploreClick}
                        className="bg-blue-950 px-4 py-2 rounded-md scroll-mt-[-600px]"
                    >
                        Explore
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
