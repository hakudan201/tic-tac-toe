import { Image, View, StyleSheet } from "react-native";

interface RoundIconProps {
    iconRound: any;
    icon: any;
}

const RoundIcon: React.FC<RoundIconProps> = ({
    iconRound,
    icon
}) => {
    return (
        <View style={styles.iconContainer}>
            <Image
                source={iconRound}
                style={styles.iconRound}
            />
            <Image
                source={icon}
                style={styles.icon}
            />
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
        width: 71,
        height: 69,
        zIndex: 2,
    }
});

export default RoundIcon;
