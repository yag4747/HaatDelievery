import React, { useRef, useEffect,useState } from "react";
import MapView, { Marker } from "react-native-maps";
import useMqtt from "../../res/useMqtt";
import { useSelector } from "react-redux";
import { images } from "../../res/images";
import { Image } from "react-native";

const TrackOrderContainer = () => {
  const mapRef = useRef(null);
  const appReducer = useSelector((state) => state.appReducer);
  const config = appReducer?.driverLocations;
  const location = useMqtt(config);
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 37.78825,  // Default initial position
    longitude: -122.4324,
  });

  useEffect(() => {
    if (location.lat && location.lng) {
      setMarkerPosition({
        latitude: location.lat,
        longitude: location.lng,
      });

      mapRef.current.animateToRegion({
        latitude: location.lat,
        longitude: location.lng,
      });
    }
  }, [location]);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={{
       latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta:0.01,
      }}
    >
        <Marker
          coordinate={markerPosition}
          title="Driver Location"
        >
          <Image
            source={images.location}
            style={{ width: 40, height: 40 }} // Set width and height here
            resizeMode="contain" // Optional: Adjust how the image scales
          />
        </Marker>
    </MapView>
  );
};

export default TrackOrderContainer;
