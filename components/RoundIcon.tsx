import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

interface RoundIconProps {
    iconRound?: any;
    icon: any;
    background?: any;
    text?: string;
}

const RoundIcon: React.FC<RoundIconProps> = ({
    iconRound,
    icon,
    background,
    text
}) => {
    return (
        <View style={styles.iconContainer}>
            {background ? (
                <View style={[styles.backgroundColor, background]}>
                    {text ? <Text style={styles.text}>{text}</Text> : null}
                    <Image
                        source={icon}
                        style={styles.icon}
                    />
                </View>
            ) : (
                <>
                    <Image
                        source={iconRound}
                        style={styles.iconRound}
                    />
                    <Image
                        source={icon}
                        style={styles.icon}
                    />
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -10,
    },
    iconRound: {
        position: 'absolute',
        width: 100,
        height: 100,
        zIndex: 1,
    },
    icon: {
        width: 60,
        height: 60,
        zIndex: 2,
    },
    backgroundColor: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize:12,
        marginBottom: 3,
    }
});

export default RoundIcon;
