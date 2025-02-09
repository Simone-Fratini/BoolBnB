import { address } from "motion/react-client";
import React from "react";
import { useState, useContext } from "react";
import { CgDanger } from "react-icons/cg";
import { GlobalContext } from "../Context/GlobalContext";

function AddPropertyPage() {
  const { AddProperty } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    city: "",
    rooms: "",
    bathrooms: "",
    beds: "",
    squareMeters: "",
    pricePerNight: "",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    const requiredFields = [
      "title",
      "address",
      "city",
      "squareMeters",
      "pricePerNight",
      "rooms",
      "beds",
      "bathrooms",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = (
          <span className="flex items-center gap-1 text-red-500">
            <CgDanger /> Required
          </span>
        );
      }
    });

    if (formData.title && formData.title.length < 10) {
      newErrors.title = (
        <span className="flex items-center gap-1 text-red-500">
          <CgDanger /> Title must be at least 10 characters
        </span>
      );
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      AddProperty(formData);
      console.log("Form data inviato:", formData);
    } else {
      console.log("Form data non inviato:", formData);
    }
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
          <div className="bg-white p-6 rounded-lg shadow-xl w-[600px] relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✖️
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Add Your Property
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              {/*parte sinistra */}
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-gray-700 flex justify-between">
                    Title
                    {errors.title && (
                      <span className="text-red-500">{errors.title}</span>
                    )}
                  </label>
                  <input
                    type="text"
                    className={`w-full p-2 border rounded ${
                      errors.title ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Es: Perfect house in Milan"
                    value={formData.title}
                    onChange={handleInputChange}
                    name="title"
                  />
                </div>
                <div>
                  <label className=" text-gray-700 flex justify-between">
                    Address
                    {errors.address && (
                      <span className="text-red-500">{errors.address}</span>
                    )}
                  </label>
                  <input
                    type="text"
                    className={`w-full p-2 border rounded ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Es: Via Roma 10"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="flex justify-between text-gray-700">
                    City
                    {errors.city && (
                      <span className="text-red-500">{errors.city}</span>
                    )}
                  </label>
                  <input
                    type="text"
                    className={`w-full p-2 border rounded ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Es: Milano"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="flex justify-between text-gray-700">
                    Square Meters
                    {errors.squareMeters && (
                      <span className="text-red-500">
                        {errors.squareMeters}
                      </span>
                    )}
                  </label>
                  <input
                    type="number"
                    className={`w-full p-2 border rounded ${
                      errors.squareMeters ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Es: 40"
                    name="squareMeters"
                    value={formData.squareMeters}
                    onChange={handleInputChange}
                    min={0}
                  />
                </div>
              </div>

              {/* destra */}
              <div className="flex flex-col gap-3">
                <div>
                  <label className="flex justify-between text-gray-700">
                    Price per Night (€)
                    {errors.pricePerNight && (
                      <span className="text-red-500">
                        {errors.pricePerNight}
                      </span>
                    )}
                  </label>
                  <input
                    type="number"
                    className={`w-full p-2 border rounded ${
                      errors.pricePerNight
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Es: 100"
                    name="pricePerNight"
                    value={formData.pricePerNight}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="flex justify-between text-gray-700">
                    Number of Rooms
                    {errors.beds && (
                      <span className="text-red-500">{errors.beds}</span>
                    )}
                  </label>
                  <select
                    className={`w-full p-2 border rounded ${
                      errors.rooms ? "border-red-500" : "border-gray-300"
                    }`}
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
                  </select>
                </div>
                <div>
                  <label className="flex justify-between text-gray-700">
                    Number of Bathrooms
                    {errors.bathrooms && (
                      <span className="text-red-500">{errors.bathrooms}</span>
                    )}
                  </label>
                  <select
                    className={`w-full p-2 border rounded ${
                      errors.bathrooms ? "border-red-500" : "border-gray-300"
                    }`}
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
                <div>
                  <label className="flex justify-between text-gray-700">
                    Number of Beds
                    {errors.beds && (
                      <span className="text-red-500">{errors.beds}</span>
                    )}
                  </label>
                  <select
                    className={`w-full p-2 border rounded ${
                      errors.beds ? "border-red-500" : "border-gray-300"
                    }`}
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
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-3 transition"
                >
                  📌 Add Your Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPropertyPage;
