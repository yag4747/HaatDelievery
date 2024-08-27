import { useEffect, useState } from "react";
import init from "react_native_mqtt";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

// Initialize the MQTT library
init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync: {},
});

const useMqtt = (config) => {
  const [location, setLocation] = useState({ lat: 0.00001, lng: 0.00001 });

  useEffect(() => {
    const setupMqtt = async () => {
      try {
        const options = {
          useSSL: true,
          userName: config?.userName,
          password: config?.password,
          onSuccess: () => {
            // console.log("Connected to MQTT broker");
            client.subscribe(config?.topic, { qos: config?.qos });
          },
          onFailure: (error) => {
            // console.log("Connection failed:", error.errorMessage);
            setupMqtt();
          },
        };

        const client = new Paho.MQTT.Client(
          `wss://${config?.host}/mqtt`,
          config?.clientId
        );    

        client.onConnectionLost = (responseObject) => {
          if (responseObject.errorCode !== 0) {
            setupMqtt()
            //console.log("Connection lost:", responseObject.errorMessage);
          }
        };

        client.onMessageArrived = (message) => {
          const locationData = JSON.parse(message.payloadString);
          const coordinates = locationData.location.geometry.coordinates;
          console.log(coordinates)
          setLocation({ lat: coordinates[1], lng: coordinates[0] });
        };

        client.connect(options);
      } catch (error) {
        // Reconnect on fail
        setupMqtt();
      }
    };
    setupMqtt();
  }, [config]);

  return location;
};

export default useMqtt;
