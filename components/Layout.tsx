import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LinearGradient colors={['#5D5FEF', '#843CE0']} style={styles.linearGradient}>
      <View style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Layout;
