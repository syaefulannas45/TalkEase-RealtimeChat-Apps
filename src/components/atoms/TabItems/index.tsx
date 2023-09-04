import {TouchableOpacity, View} from 'react-native';
import {
  ICCallActive,
  ICCallDeactive,
  ICChatActive,
  ICChatDeactive,
  ICGrupActive,
  ICGrupDeactive,
  ICSettingActive,
  ICSettingDeactive,
  ICStatusActive,
  ICStatusDeactive,
} from '../../../assets';

const TabItems = ({title, active, onPress, onLongPress}: any) => {
  const getIcon = () => {
    switch (title) {
      case 'Chat':
        return active ? <ICChatActive /> : <ICChatDeactive />;
      case 'Status':
        return active ? <ICStatusActive /> : <ICStatusDeactive />;
      case 'Grup':
        return active ? <ICGrupActive /> : <ICGrupDeactive />;
      case 'Call':
        return active ? <ICCallActive /> : <ICCallDeactive />;
      case 'Setting':
        return active ? <ICSettingActive /> : <ICSettingDeactive />;
      default:
        return <ICChatActive />;
    }
  };

  return (
    <TouchableOpacity
      className="items-center"
      onPress={onPress}
      onLongPress={onLongPress}>
      {getIcon()}
    </TouchableOpacity>
  );
};

export default TabItems;
