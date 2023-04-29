import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import vehiclesApi from "../api/vehicles";
import { SafeAreaView } from "react-native-safe-area-context";
import VehicleCell from "../components/VehicleCell";

const ListScreen = ({ navigation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getVehiclesList = async () => {
      const response = await vehiclesApi.get("/vehicle");
      setList(response.data);
    };

    getVehiclesList();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(vehicle) => vehicle.id}
        data={list}
        renderItem={({ item }) => {
          const onPress = () =>
            navigation.navigate("Detail", { vehicleId: item.id });

          return (
            <VehicleCell
              onPress={onPress}
              image={item.image}
              name={item.name}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
