import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import stateData from "../usStates.json"; // Import GeoJSON data for US states

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  // Function to handle state click
  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  // Define how each state should behave on the map
  const onEachState = (state, layer) => {
    layer.on({
      click: () => handleStateClick(state),
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <MapContainer
        style={{ height: "600px", width: "70%" }}
        zoom={4}
        center={[37.8, -96]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={stateData} onEachFeature={onEachState} />
        {selectedState && (
          <Popup
            position={[
              selectedState.geometry.coordinates[0][0][1],
              selectedState.geometry.coordinates[0][0][0],
            ]}
            onClose={() => {
              setSelectedState(null);
            }}
          >
            <div>
              <h2>{selectedState.properties.name}</h2>
              <p>Land Price per Acre: ${selectedState.properties.landPrice}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
