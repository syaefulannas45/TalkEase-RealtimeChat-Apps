import {TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import CText from '../TextCustom';

interface CustomButtonProps {
  type?: 'buttonImg' | 'withOutline' | 'withOutlineRound';
  title?: string;
  onPress?: () => void;
  source?: ImageSourcePropType;
  className?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  type,
  onPress,
  title,
  source,
  className,
}) => {
  if (type === 'buttonImg' && source) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={source} className={`h-[50px] w-[50px]`} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      className={`${
        type === 'withOutline'
          ? 'bg-white border-2 border-border'
          : 'border-none bg-button-blue_1'
      } py-[10px] rounded-[10px] mb-[11px] ${
        type === 'withOutlineRound'
          ? 'bg-white border-text-grey_100 border-2  rounded-full h-[60px] justify-center items-center'
          : 'border-none'
      }${className} `}
      onPress={onPress}>
      <CText
        className={`${
          type === 'withOutline' ? 'text-text-blue_100' : 'text-white'
        } text-center font-500 text-[20px] ${
          type === 'withOutlineRound'
            ? 'text-text-dark_100 text-[16px] font-600 justify-center items-center '
            : ''
        }${className} `}>
        {title}
      </CText>
    </TouchableOpacity>
  );
};

export default Button;
