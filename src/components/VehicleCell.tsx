import {Text, View, Image, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

type VehicleCellProps = {
  onPress(): void;
  image: string;
  name: string;
};

const VehicleCell = ({onPress, image, name}: VehicleCellProps) => {
  return (
    <RectButton onPress={() => onPress()}>
      <View style={styles.cellContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: image}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#FDFE9E',
    padding: 8,
    borderRadius: 4,
    borderColor: '#14544E',
    borderWidth: 1,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    borderColor: '#14544E',
    borderWidth: 1,
  },
  textContainer: {
    flex: 3 / 4,
    marginLeft: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default VehicleCell;
