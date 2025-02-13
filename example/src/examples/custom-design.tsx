import { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { MultiStep, Step } from 'react-native-multistep';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const CustomDesign = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Final Form Data:', formData);
  };

  return (
    <MultiStep
      onFinalStepSubmit={handleSubmit}
      tintColor="#AD49E1"
      progressCircleColor="#FFAF00"
      nextButtonComponent={<NextButton />}
      prevButtonComponent={<PrevButton />}
      submitButtonComponent={<SubmitButton />}
    >
      <Step
        title="User Info"
        titleComponent={() => <StepTitle title="User Info" icon="user" />}
        stepContainerStyle={styles.stepContent}
      >
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={formData.username}
          onChangeText={(text) => handleChange('username', text)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChange('email', text)}
        />
      </Step>

      <Step
        title="Security"
        titleComponent={() => <StepTitle title="Security" icon="lock" />}
        stepContainerStyle={styles.stepContent}
      >
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
        />
      </Step>

      <Step
        title="Additional Info"
        titleComponent={() => <StepTitle title="Additional Info" icon="info" />}
        stepContainerStyle={styles.stepContent}
      >
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(text) => handleChange('age', text)}
        />
      </Step>
    </MultiStep>
  );
};

export default CustomDesign;

const StepTitle = ({ title, icon }: { title: string; icon: string }) => (
  <View style={styles.stepTitleContainer}>
    <FontAwesome name={icon} size={20} color="#000" />
    <Text style={styles.stepTitle}>{title}</Text>
  </View>
);

const NextButton = () => (
  <View style={styles.nextButton}>
    <Text style={styles.buttonText}>Next</Text>
    <MaterialIcons name="arrow-forward-ios" size={18} color="white" />
  </View>
);

const PrevButton = () => (
  <View style={styles.prevButton}>
    <MaterialIcons name="arrow-back-ios" size={18} color="white" />
    <Text style={styles.buttonText}>Back</Text>
  </View>
);

const SubmitButton = () => (
  <View style={styles.submitButton}>
    <Text style={styles.buttonText}>Submit</Text>
    <FontAwesome name="check-circle" size={18} color="white" />
  </View>
);

const styles = StyleSheet.create({
  stepContent: {
    gap: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#5CA9FF',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  stepTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7C00FE',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#F5004F',
    paddingVertical: 12,
    borderRadius: 8,
    width: 100,
  },
  prevButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#B6CBBD',
    paddingVertical: 12,
    borderRadius: 8,
    width: 100,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#16C47F',
    paddingVertical: 12,
    borderRadius: 8,
    width: 100,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
