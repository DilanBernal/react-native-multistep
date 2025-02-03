import { MultiStep, Step } from 'react-native-multistep';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MultiStep>
        <Step>
          <Text>Step 1: Personal Information</Text>
          {/* You can add form fields here */}
        </Step>

        <Step>
          <Text>Step 2: Address</Text>
          {/* Address form fields */}
        </Step>

        <Step>
          <Text>Step 3: Review</Text>
          {/* Review the information */}
        </Step>
      </MultiStep>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
