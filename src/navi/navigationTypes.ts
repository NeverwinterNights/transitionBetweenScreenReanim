import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackNavigatorParamList = {
  Main: undefined;
  Details: undefined;
};

export type NavigationUserNavType = NavigationProp<RootStackNavigatorParamList>;
export const useAppNavigation = () => useNavigation<NavigationUserNavType>();
