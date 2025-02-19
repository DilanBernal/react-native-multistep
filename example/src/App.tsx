import { StyleSheet, SafeAreaView } from 'react-native';
import BasicUsage from './examples/basic-usage';

/**
 * You can import other example files from the "examples" folder
 * to see different implementations in action.
 */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BasicUsage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
