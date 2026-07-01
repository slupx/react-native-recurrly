import { CardholderIcon, ChartLineIcon, GearSixIcon, HouseIcon } from "phosphor-react-native";
import { styled } from "react-native-css";

const withTailwind = (Icon: any) => {
  return styled(Icon, {
    className: {
      target: "style",
      nativeStyleMapping: {
        color: "color"
      },
    },
  });
};

export const House = withTailwind(HouseIcon)
export const Cardholder = withTailwind(CardholderIcon)
export const ChartLine = withTailwind(ChartLineIcon)
export const GearSix = withTailwind(GearSixIcon)