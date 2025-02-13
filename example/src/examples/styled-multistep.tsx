import { useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { MultiStep, Step } from 'react-native-multistep';

const StyledMultiStep = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    country: '',
    postalCode: '',
    cardHolder: '',
    expiryDate: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
  };

  return (
    <MultiStep
      onFinalStepSubmit={handleSubmit}
      nextButtonText="Continue"
      prevButtonText="Go Back"
      submitButtonText="Complete"
      nextButtonStyle={styles.nextButton}
      prevButtonStyle={styles.prevButton}
      submitButtonStyle={styles.submitButton}
      nextButtonTextStyle={styles.nextButtonText}
      prevButtonTextStyle={styles.prevButtonText}
      submitButtonTextStyle={styles.submitButtonText}
      progressCircleSize={70}
      progressCircleThickness={6}
      progressCircleColor="#e290a6"
      progressCircleTrackColor="#D3D3D3"
      progressCircleLabelStyle={styles.progressText}
      globalStepTitleStyle={styles.stepTitle}
      globalNextStepTitleStyle={styles.nextStepTitle}
      fullScreenHeight
    >
      <Step title="User Details" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={formData.username}
          onChangeText={(text) => handleChange('username', text)}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={formData.phone}
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange('phone', text)}
        />
      </Step>

      <Step title="Location Info" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your country"
          value={formData.country}
          onChangeText={(text) => handleChange('country', text)}
        />
        <Text style={styles.label}>Postal Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter postal code"
          value={formData.postalCode}
          keyboardType="numeric"
          onChangeText={(text) => handleChange('postalCode', text)}
        />
      </Step>

      <Step title="Payment Info" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Cardholder Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter cardholder's name"
          value={formData.cardHolder}
          onChangeText={(text) => handleChange('cardHolder', text)}
        />
        <Text style={styles.label}>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          value={formData.expiryDate}
          keyboardType="numeric"
          onChangeText={(text) => handleChange('expiryDate', text)}
        />
      </Step>
    </MultiStep>
  );
};

export default StyledMultiStep;

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
    borderColor: '#A6B1E1',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#36cab2',
  },
  nextStepTitle: {
    color: '#696969',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e290a6',
  },
  nextButton: {
    backgroundColor: '#d7b665',
    paddingVertical: 12,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  prevButton: {
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#d7b665',
  },
  prevButtonText: {
    color: '#000',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#1E3E62',
    paddingVertical: 12,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
