function CardsSection({ children, cardSecRef, title }) {
    return (
        <section ref={cardSecRef} className="p-6 lg:px-20 pt-24 sm:pt-40">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {children}
            </div>
        </section>
    );
}

export default CardsSection;
