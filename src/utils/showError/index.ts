import {showMessage, MessageOptions} from 'react-native-flash-message';

export const showError = (message: string) => {
  const options: MessageOptions = {
    message: message,
    type: 'danger',
    backgroundColor: '#e06379',
    color: '#ffffff',
  };
  showMessage(options);
};
export const showSucces = (message: string) => {
  const options: MessageOptions = {
    message: message,
    type: 'success',
    backgroundColor: '#0bcad4',
    color: '#ffffff',
  };
  showMessage(options);
};
