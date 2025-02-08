import { address } from "motion/react-client";
import React from "react";
import { useState } from "react";

function AddPropertyPage() {
  /* const { AddProperty } = useContext(); */
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    city: "",
    rooms: "",
    bathrooms: "",
    beds: "",
    sqereMeters: "",
    pricePerNight: "",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-[40vh] mt-32">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-5xl">
          {/* Testo */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-blue-600 text-4xl font-bold leading-tight">
              Apri il tuo <span className="text-red-500">BoolBnB</span>!
            </h1>
            <p className="text-gray-700 mt-3">
              Guadagna ospitando viaggiatori da tutto il mondo. Mettere in
              affitto la tua casa è facile e sicuro.
            </p>
            <div className="flex flex-col items-center md:items-start mt-5">
              <p className="text-gray-700 font-medium">
                Stima il tuo guadagno:
              </p>
              <input
                type="range"
                className="mt-2 w-full cursor-pointer"
                min={0}
                max={31}
              />
            </div>
            <button
              className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg shadow-md transition"
              onClick={() => setIsOpen(true)}
            >
              💵 Apri il tuo BnB
            </button>
          </div>

          {/* Immagine */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/480607057/it/foto/milano.jpg?s=1024x1024&w=is&k=20&c=dLyiemAhDSGcnfAJi88hobG-lIFTV8VL9bvwuktadlg="
              alt="Vista panoramica di Milano"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-44 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Con BoolBnB, affittare la tua casa è facile e sicuro
        </h2>

        <div className="flex flex-col items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661768654229-5a2eeeca1857?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Superhost accogliente"
            className="w-full max-w-4xl h-auto rounded-xl shadow-lg"
          />
          <p className="mt-6 text-center text-gray-700 max-w-3xl">
            Unisciti a migliaia di host che guadagnano condividendo i loro
            spazi. Noi ci occupiamo della sicurezza e ti supportiamo in ogni
            fase.
          </p>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✖️
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              add your property
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Es: Perfect house in Milan"
                  value={formData.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Es: Via Roma 10"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Es: Milano"
                  name="city"
                  onChange={handleInputChange}
                  value={formData.city}
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Numero di stanze</label>
                <select
                  className="w-full p-2 border rounded"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden>
                    Select the number of rooms
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                  onChange={handleInputChange}
                </select>
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">
                  Number of bathrooms
                </label>
                <select
                  className="w-full p-2 border rounded"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden>
                    Select the number of bathrooms
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Number of beds</label>
                <select
                  className="w-full p-2 border rounded"
                  name="beds"
                  value={formData.beds}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden>
                    Select the number of beds
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">square meters</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  placeholder="Es: 40"
                  name="squareMeters"
                  value={formData.squareMeters}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">
                  Priece per night (€)
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  placeholder="Es: 100"
                  name="pricePerNight"
                  value={formData.pricePerNight}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-3 transition"
              >
                📌 Add your property
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPropertyPage;
