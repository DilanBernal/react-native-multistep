import { render } from '@testing-library/react-native';
import { Text, StyleSheet } from 'react-native';
import Step from '../components/Step';

describe('Step Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Step title="Step 1">
        <Text>Step Content</Text>
      </Step>
    );

    expect(getByText('Step Content')).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const { getByTestId } = render(
      <Step
        title="Step 1"
        style={{
          padding: 10,
        }}
      >
        <Text>Step Content</Text>
      </Step>
    );

    const step = getByTestId('step-container');
    const stepStyles = StyleSheet.flatten(step.props.style);

    expect(stepStyles.padding).toBe(10);
  });
});
