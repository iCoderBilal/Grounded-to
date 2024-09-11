import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Array containing US states with their names, coordinates (latitude, longitude), and example price per acre.
const usStates = [
  { name: "Alabama", geocode: [32.806671, -86.79113], pricePerAcre: "$3,500" },
  { name: "Alaska", geocode: [61.370716, -152.404419], pricePerAcre: "$1,000" },
  {
    name: "Arizona",
    geocode: [33.729759, -111.431221],
    pricePerAcre: "$4,000",
  },
  {
    name: "Arkansas",
    geocode: [34.969704, -92.373123],
    pricePerAcre: "$2,500",
  },
  {
    name: "California",
    geocode: [36.116203, -119.681564],
    pricePerAcre: "$10,000",
  },
  {
    name: "Colorado",
    geocode: [39.059811, -105.311104],
    pricePerAcre: "$5,000",
  },
  {
    name: "Connecticut",
    geocode: [41.597782, -72.755371],
    pricePerAcre: "$8,500",
  },
  {
    name: "Delaware",
    geocode: [39.318523, -75.507141],
    pricePerAcre: "$7,000",
  },
  { name: "Florida", geocode: [27.994402, -81.760254], pricePerAcre: "$6,500" },
  { name: "Georgia", geocode: [33.040619, -83.643074], pricePerAcre: "$4,500" },
  {
    name: "Hawaii",
    geocode: [21.094318, -157.498337],
    pricePerAcre: "$20,000",
  },
  { name: "Idaho", geocode: [44.240459, -114.478828], pricePerAcre: "$3,000" },
  {
    name: "Illinois",
    geocode: [40.349457, -88.986137],
    pricePerAcre: "$8,000",
  },
  { name: "Indiana", geocode: [39.849426, -86.258278], pricePerAcre: "$7,000" },
  { name: "Iowa", geocode: [42.011539, -93.210526], pricePerAcre: "$8,500" },
  { name: "Kansas", geocode: [38.5266, -96.726486], pricePerAcre: "$2,000" },
  { name: "Kentucky", geocode: [37.66814, -84.670067], pricePerAcre: "$4,000" },
  {
    name: "Louisiana",
    geocode: [31.169546, -91.867805],
    pricePerAcre: "$3,000",
  },
  { name: "Maine", geocode: [44.693947, -69.381927], pricePerAcre: "$5,500" },
  {
    name: "Maryland",
    geocode: [39.063946, -76.802101],
    pricePerAcre: "$10,000",
  },
  {
    name: "Massachusetts",
    geocode: [42.230171, -71.530106],
    pricePerAcre: "$12,000",
  },
  {
    name: "Michigan",
    geocode: [43.326618, -84.536095],
    pricePerAcre: "$6,000",
  },
];

const NewMap = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="section-heading tracking-tighter font-Poppins md:text-[6vw] text-[9vw] text-white font-semibold text-center sm:mb-[0px] mb-[10px]"
      >
        Explore The Land
      </motion.h2>
      <div className="w-[100%] flex items-center justify-center rounded-[40px]">
        <MapContainer
          center={[37.8, -96]}
          zoom={4}
          scrollWheelZoom={true}
          className="sm:w-[84%] w-[90%] sm:h-[600px] h-[400px]"
          //   style={{ height: "600px", width: "84%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=IXREMIsiyDRlNhKALYG46cojVYcNxQl6Wc5EkND8lsGNkd0z0ZrHGSj8GxmJtf6C"
          />
          {usStates.map((state, index) => (
            <Marker key={index} position={state.geocode}>
              <Popup>
                <h2 className="text-[20px] font-Poppins mb-[-10px]">
                  {state.name}
                </h2>
                <p className="text-[14px] font-Poppins">
                  Price per acre: {state.pricePerAcre}
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default NewMap;
