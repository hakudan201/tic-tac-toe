import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: any;
  backgroundImage?: any;
  backgroundStyle?: any;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  textStyle,
  backgroundImage,
  backgroundStyle,
}) => {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        source={backgroundImage}
        style={[styles.imageBackground, backgroundStyle]}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Roboto',
  },
});

export default Button;
