import {Platform} from 'react-native';
import * as Keychain from 'react-native-keychain';

const keychainOptions = {
  accessControl: Keychain.ACCESS_CONTROL.USER_PRESENCE,
};

export default Platform.OS === 'android' ? keychainOptions : undefined;
