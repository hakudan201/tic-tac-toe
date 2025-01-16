import { Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <LinearGradient
      colors={['#5D5FEF', '#843CE0']}
      style={styles.linearGradient}>
      <View style={styles.mainTitleContainer}>
        <Image
          source={require('../assets/images/main-title.png')}
          style={styles.mainTitleImage}
        />
        <View style={styles.topStarsContainer}>
          <Image
            source={require('../assets/images/star-small.png')}
            style={[styles.starSmall, { marginLeft: -75 }]}
          />
          <Image
            source={require('../assets/images/star-small.png')}
            style={[styles.starSmall, { marginLeft: 175 }]}
          />
        </View>
        <View style={styles.middleStarsContainer}>
          <Image
            source={require('../assets/images/star-small.png')}
            style={[styles.starSmall, { marginLeft: -60 }]}
          />
          <Image
            source={require('../assets/images/star-small.png')}
            style={[styles.starSmall, { marginLeft: 135 }]}
          />
        </View>
        <View style={styles.bottomStarsContainer}>
          <Image
            source={require('../assets/images/star-big.png')}
            style={styles.starBig}
          />
          <Image
            source={require('../assets/images/star-big.png')}
            style={styles.starBig}
          />
          <Image
            source={require('../assets/images/star-big.png')}
            style={styles.starBig}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's play</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/images/index-decor-1.png')}
        style={styles.decorImage1}
      />
      <Image
        source={require('../assets/images/index-decor-2.png')}
        style={styles.decorImage2}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
  },
  mainTitleContainer: {
    position: 'relative',
    marginTop: 40,
  },
  mainTitleImage: {
    width: 234,
    height: 277,
  },
  topStarsContainer: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
  },
  middleStarsContainer: {
    position: 'absolute',
    top: 78,
    flexDirection: 'row',
  },
  bottomStarsContainer: {
    position: 'absolute',
    top: 228,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starSmall: {
    width: 108,
    height: 98,
  },
  starBig: {
    width: 61,
    height: 57,
    marginHorizontal: 10,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#FFF',
    width: 184,
    height: 48,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 59,
  },
  buttonText: {
    width: 111,
    height: 29,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29,
  },
  decorImage1: {
    width: 98,
    height: 112,
    marginLeft: 269,
  },
  decorImage2: {
    width: 140,
    height: 136,
    marginRight: 243,
    marginTop: 20,
  },
});
