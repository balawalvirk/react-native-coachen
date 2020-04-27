import AsyncStorage from '@react-native-community/async-storage';


export async function _storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Storage error:' + error);
  }
}

export async function _retrieveData(key){
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error('Error in retrieving:'+ error);
  }
};

export async function _retrieveDataWithoutJsonParse(key){
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error('Error in retrieving:'+ error);
  }
};
