import { StyleSheet, SafeAreaView } from 'react-native';
import GettingStarted from './examples/getting-started';

/**
 * You can import other example files from the "examples" folder
 * to see different implementations in action.
 */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GettingStarted />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
