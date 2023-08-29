import AsyncStorage from '@react-native-async-storage/async-storage';
import {showError} from '../showError';

export const storeData = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error: any) {
    showError(error);
  }
};
export const getData = async (key: string): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) return JSON.parse(value);
    return null;
  } catch (error: any) {
    showError(error.message);
    return null;
  }
};
export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error: any) {
    showError(error.message);
  }
};
