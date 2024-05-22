import {View, Text, Image, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import vehiclesApi from '../api/vehicles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '@rneui/themed';

type DetailsProps = {
  id: number;
  brand: string;
  fuel: string;
  image: string;
  model: string;
  type: string;
  vin: string;
};

const DetailScreen = ({route, navigation}) => {
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
        `/vehicle/${route.params.vehicleId}`,
      );

      setVehicleDetails(response.data);
    };

    getVehicleDetails();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.detailsBody}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: vehicleDetails.image}}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>
              {vehicleDetails.brand} {vehicleDetails.model}
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.text}>Brand: {vehicleDetails.brand}</Text>
            <Text style={styles.text}>Model: {vehicleDetails.model}</Text>
            <Text style={styles.text}>Fuel: {vehicleDetails.fuel}</Text>
            <Text style={styles.text}>Type: {vehicleDetails.type}</Text>
            <Text style={styles.text}>VIN: {vehicleDetails.vin}</Text>
          </View>
        </View>
      </View>
      <Button
        style={styles.button}
        title="Back to list"
        onPress={() => {
          navigation.navigate('List');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingTop: 8,
    height: 300,
    width: 300,
  },
  detailsBody: {
    borderRadius: 4,
    backgroundColor: '#14544E',
  },
  detailsContainer: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    marginLeft: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  text: {
    color: '#ffffff',
  },
  button: {
    marginTop: 8,
    width: 160,
  },
});

export default DetailScreen;
