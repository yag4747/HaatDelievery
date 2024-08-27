import React,{useRef,useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import useMqtt from '../../res/useMqtt';
import { useSelector } from "react-redux";
import { images } from '../../res/images';
import { Image } from 'react-native';

const TrackOrderContainer = () => {
    const mapRef = useRef(null);
    const appReducer = useSelector(state => state.appReducer);
  const config = appReducer?.driverLocations;
  const location = useMqtt(config);

  useEffect(() => {
    if (location.lat && location.lng && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [location]);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location?.lat || 37.78825,
        longitude: location?.lng || -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {location?.lat && location?.lng && (
        <Marker
        coordinate={{ latitude: location.lat, longitude: location.lng }}
        title="Driver Location"
        description={`Lat: ${location.lat}, Lng: ${location.lng}`}
      >
        <Image
            source={images.location}
            style={{ width: 40, height: 40 }}  // Set width and height here
            resizeMode="contain"  // Optional: Adjust how the image scales
          />
      </Marker>
      )}
    </MapView>
  );
};

export default TrackOrderContainer;