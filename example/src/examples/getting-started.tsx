import { useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { MultiStep, Step } from 'react-native-multistep';

const GettingStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Final Form Data:', formData);
  };

  return (
    <MultiStep onFinalStepSubmit={handleSubmit} tintColor="#007AFF">
      <Step title="Personal Info" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChange('email', text)}
        />
      </Step>

      <Step title="Shipping Address" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Street Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={formData.address}
          onChangeText={(text) => handleChange('address', text)}
        />
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          value={formData.city}
          onChangeText={(text) => handleChange('city', text)}
        />
      </Step>

      <Step title="Payment Information" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter card number"
          value={formData.cardNumber}
          keyboardType="numeric"
          onChangeText={(text) => handleChange('cardNumber', text)}
        />
      </Step>
    </MultiStep>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  stepContent: {
    gap: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
});
