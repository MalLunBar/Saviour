// hooks/useOrientation.js
import { useDeviceOrientation } from '@react-native-community/hooks';

export const useOrientation = () => {
  const { landscape } = useDeviceOrientation();
  return { landscape };
};