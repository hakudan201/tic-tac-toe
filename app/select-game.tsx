import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useRouter } from "expo-router";
import Layout from '@/components/Layout';
import ModeButton from '@/components/ModeButton';

export default function NewGame() {
  const router = useRouter();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <View>
            <Text style={styles.text}>Select Game</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/images/select-game/score-icon.png')}
              style={styles.icon}
            />
            <ImageBackground
              source={require('../assets/images/select-game/score-background.png')}
              style={styles.scoreBackground}
            >
              <Text style={styles.scoreText}>100</Text>
            </ImageBackground>
          </View>
        </View>
      </View>

      <ModeButton title={'Single Player'} onPress={() => { router.push('/game-page?mode=single') }}
        backgroundImage={require('../assets/images/select-game/button-icon-1-rect.png')}
        iconRound={require('../assets/images/select-game/button-icon-1-round.png')}
        icon={require('../assets/images/select-game/button-icon-1.png')} />
      <ModeButton title={'Two Players'} onPress={() => { router.push('/game-page?mode=two') }}
        backgroundImage={require('../assets/images/select-game/button-icon-2-rect.png')}
        iconRound={require('../assets/images/select-game/button-icon-2-round.png')}
        icon={require('../assets/images/select-game/button-icon-2.png')} />
      <ModeButton title={'Market Place'} onPress={() => { }}
        backgroundImage={require('../assets/images/select-game/button-icon-3-rect.png')}
        iconRound={require('../assets/images/select-game/button-icon-3-round.png')}
        icon={require('../assets/images/select-game/button-icon-3.png')} />
      <ModeButton title={'Challenges'} onPress={() => { }}
        backgroundImage={require('../assets/images/select-game/button-icon-4-rect.png')}
        iconRound={require('../assets/images/select-game/button-icon-4-round.png')}
        icon={require('../assets/images/select-game/button-icon-4.png')} />
      <Image source={require('../assets/images/select-game/select-game-decor.png')} style={styles.decor} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Roboto'
  },
  line: {
    width: 150,
    height: 4,
    borderRadius: 30,
    backgroundColor: '#FFA800',
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: -20
  },
  icon: {
    width: 123,
    height: 100
  },
  scoreBackground: {
    width: 52,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: -28
  },
  scoreText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  decor: {
    height: 147,
    width: 172,
    marginRight: -200,
  }
});
