import { MultiStep, Step } from 'react-native-multistep';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MultiStep onFinalStepSubmit={() => console.log('submit')}>
        <Step title="User Details">
          <TextInput placeholder="First name" style={styles.input} />
          <TextInput placeholder="Last name" style={styles.input} />
        </Step>

        <Step title="Product Details">
          <TextInput placeholder="Price" style={styles.input} />
          <TextInput placeholder="Remarks" style={styles.input} />
        </Step>

        <Step title="Order Details">
          <TextInput placeholder="Order" style={styles.input} />
        </Step>

        <Step title="Product Details 2">
          <TextInput placeholder="Price" style={styles.input} />
          <TextInput placeholder="Remarks" style={styles.input} />
        </Step>

        <Step title="Product Details 3">
          <TextInput placeholder="Price" style={styles.input} />
          <TextInput placeholder="Remarks" style={styles.input} />
        </Step>

        <Step title="Product Details 4">
          <TextInput placeholder="Price" style={styles.input} />
          <TextInput placeholder="Remarks" style={styles.input} />
        </Step>
      </MultiStep>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'gray',
  },
});
