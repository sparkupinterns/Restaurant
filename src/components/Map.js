"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={13}
      className="h-full w-full rounded-lg shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6139, 77.209]}>
        <Popup>Delhi, India</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
