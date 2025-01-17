import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Button from './Button';
import RoundIcon from './RoundIcon';

interface ModeButtonProps {
    onPress: () => void;
    title: string;
    backgroundImage?: any;
    iconRound?: any;
    icon?: any;
}

const ModeButton: React.FC<ModeButtonProps> = ({
    onPress,
    title,
    backgroundImage,
    iconRound,
    icon
}) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20, marginTop: 50}}>
            <RoundIcon iconRound={iconRound} icon={icon}/>
            <Button title={title} onPress={() => { }}
                backgroundImage={backgroundImage}
                backgroundStyle={styles.button} textStyle={styles.buttonText}/>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 178,
        height: 47
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default ModeButton;
