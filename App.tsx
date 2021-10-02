import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Link, NativeRouter, Route, BackButton} from 'react-router-native';

const App = () => {
  return (
    <SafeAreaView>
      <NativeRouter>
        <BackButton>
          <View style={styles.nav}>
            <Link to="/" style={styles.navItem}>
              <Text>Go to Home Page</Text>
            </Link>
            <Link to="/test" style={styles.navItem}>
              <Text>Go to Test Page</Text>
            </Link>
          </View>
          <Route exact path="/">
            <Text>Home</Text>
          </Route>
          <Route path="/test">
            <Text>Test</Text>
          </Route>
        </BackButton>
      </NativeRouter>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    flexGrow: 1,
    height: 50,
    padding: 16,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
});

export default App;
