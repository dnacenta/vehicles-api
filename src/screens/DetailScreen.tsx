import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import vehiclesApi from "../api/vehicles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

type DetailsProps = {
  id: number;
  brand: string;
  fuel: string;
  image: string;
  model: string;
  type: string;
  vin: string;
};

const DetailScreen = ({ route, navigation }) => {
  const [vehicleDetails, setVehicleDetails] = useState<DetailsProps>({
    id: null,
    brand: null,
    fuel: null,
    image: null,
    model: null,
    type: null,
    vin: null,
  });

  useEffect(() => {
    const getVehicleDetails = async () => {
      const response = await vehiclesApi.get(
        `/vehicle/${route.params.vehicleId}`
      );

      setVehicleDetails(response.data);
    };

    getVehicleDetails();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: vehicleDetails.image }} />
      </View>
      <View style={styles.textContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {vehicleDetails.brand} {vehicleDetails.model}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text>Brand: {vehicleDetails.brand}</Text>
          <Text>Model: {vehicleDetails.model}</Text>
          <Text>Fuel: {vehicleDetails.fuel}</Text>
          <Text>Type: {vehicleDetails.type}</Text>
          <Text>VIN: {vehicleDetails.vin}</Text>
        </View>
      </View>
      <Button
        style={{ marginTop: 8, width: 160 }}
        title="Back to list"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 80,
  },
  imageContainer: {
    width: 220,
    height: 220,
    borderTopEndRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  textContainer: {
    paddingTop: 8,
    backgroundColor: "white",
    height: 300,
    width: 300,
    borderRadius: 4,
  },
  detailsContainer: {
    flex: 1,
    alignContent: "flex-start",
    justifyContent: "space-evenly",
    marginLeft: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
});

export default DetailScreen;
