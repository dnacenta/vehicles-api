import { render, screen } from "@testing-library/react-native";
import VehicleCell from "./VehicleCell";

describe("<VehicleCell />", () => {
  it("matches snapshot", () => {
    render(
      <VehicleCell
        onPress={jest.fn()}
        image="http://loremflickr.com/640/640/transport?70161"
        name="lorem"
      />
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
