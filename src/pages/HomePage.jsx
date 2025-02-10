import React, { useRef } from "react";
import CardsSection from "../components/CardsSection";
import Card from "../components/Card";
import { useGetPropertiesQuery } from "../hooks/useDataQuery";
import { Link } from "react-router-dom";

function HomePage() {
    //* QUERIES
    const { isLoading, isError, data } = useGetPropertiesQuery();

    //* RETURNS
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <pre>Error</pre>;
    return (
        <>
            <Jumbotron />

            <SearchAndFilterSection />
            <CardsSection title={""}>
                {data?.map((prop) => (
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
    const filters = [
        "baita",
        "villaschiera",
        "indipendente",
        "villa",
        "appartment",
        "chalet",
    ];

    return (
        <>
            <div className="border-b p-3 bg-white w-screen border-gray-300 fixed top-0 z-10 rounded-b-2xl">
                <div className="overflow-x-auto">
                    <div className="flex gap-10 min-w-max px-2 [&>div]:w-[40px]">
                        {filters.map((filter) => (
                            <div
                                key={filter}
                                className="flex flex-col items-center gap-2"
                            >
                                <img
                                    src={`/filter_imgs/${filter}.png`}
                                    alt={filter}
                                    className="w-6 h-6 opacity-50"
                                />
                                <span className="text-xs text-gray-600">
                                    {filter}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

function Jumbotron() {
    const jumboRef = useRef(null);

    const handleExploreClick = () => {
        window.scrollTo({
            top: jumboRef.current.offsetHeight,
            behavior: "smooth",
        });
    };

    return (
        <section
            ref={jumboRef}
            className="h-[85vh] relative z-20 bg-linear-90/oklch from-[#d4c685] to-[#a7d3a6] text-stone-800 text-center lg:text-start flex items-center p-6 lg:px-[10vw] lg:py-12 justify-center lg:gap-32 lg:[&>div]:w-1/2"
        >
            <div className=" flex flex-col gap-8 items-start">
                <div
                    style={{ fontFamily: `"Noto Sans", serif` }}
                    className="flex flex-col gap-4"
                >
                    <p className="text-4xl lg:text-6xl tracking-wide font-black">
                        Your Dream Getaway Awaits
                    </p>
                    <p className="font-black tracking-wide lg:text-2xl">
                        From cozy cottages to luxurious villas, discover the
                        ideal space for your next adventure
                    </p>
                </div>
                <div
                    style={{ fontFamily: `"Noto Sans", serif` }}
                    className="flex flex-col  rounded-lg p-4 text-sm gap-4 shadow-lg "
                >
                    <div className="font-semibold lg:font-light lg:text-base">
                        <span>
                            <span className="underline underline-offset-2">
                                Already Know
                            </span>{" "}
                            What You're Looking For? <br />
                            Your{" "}
                            <strong className="font-semibold">
                                Dream
                            </strong>{" "}
                            Stay is Just{" "}
                            <strong className="font-semibold">
                                One Click Away
                            </strong>
                            !
                        </span>
                    </div>
                    <div className="flex gap-4 whitespace-nowrap text-lg font-semibold tracking-wider lg:tracking-normal">
                        <Link
                            to={"search"}
                            className="text-center bg-[#d4c685] py-4 rounded-md w-2/3 border-2 border-stone-500 hover:bg-[#cabc7d] cursor-pointer"
                        >
                            Book Now!
                        </Link>
                        <button
                            onClick={handleExploreClick}
                            className="bg-[#fefae0] hover:bg-[#faedcd] px-4 py-2 rounded-md scroll-mt-[-600px] cursor-pointer"
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block h-full relative -translate-y-2">
                <div className="absolute bg-amber-700 w-65 aspect-square -rotate-4 -translate-y-8 rounded-lg"></div>
                <div className="absolute bg-amber-500 w-70 aspect-square rotate-10 -translate-x-4 right-0 rounded-lg"></div>
                <div className="absolute bg-amber-600 w-75 aspect-square -rotate-7 translate-y-3 -translate-x-6 bottom-0 rounded-lg"></div>
                <div className="absolute bg-amber-800 w-77 aspect-square rotate-2 translate-y-9 -translate-x-3 bottom-0 right-0 rounded-lg"></div>
            </div>
        </section>
    );
}

export default HomePage;
