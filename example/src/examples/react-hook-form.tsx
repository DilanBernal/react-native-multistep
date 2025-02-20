import { useForm, Controller } from 'react-hook-form';
import { Text, TextInput, StyleSheet } from 'react-native';
import { MultiStep, Step } from '@brijen/react-native-multistep';

const ReactHookForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      cardNumber: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Final Form Data:', data);
  };

  return (
    <MultiStep
      onFinalStepSubmit={handleSubmit(onSubmit)}
      tintColor="#DA498D"
      fullScreenHeight
    >
      <Step title="Personal Info" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Full Name</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Text style={styles.label}>Email Address</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={value}
              keyboardType="email-address"
              onChangeText={onChange}
            />
          )}
        />
      </Step>

      <Step title="Shipping Address" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Street Address</Text>
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Text style={styles.label}>City</Text>
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your city"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </Step>

      <Step title="Payment Information" stepContainerStyle={styles.stepContent}>
        <Text style={styles.label}>Card Number</Text>
        <Controller
          control={control}
          name="cardNumber"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter card number"
              value={value}
              keyboardType="numeric"
              onChangeText={onChange}
            />
          )}
        />
      </Step>
    </MultiStep>
  );
};

export default ReactHookForm;

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
    borderColor: '#DA498D',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
});
