import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders correctly with primary variant', () => {
    const { getByTestId, getByText } = render(
      <Button title="Next" varient="primary" tintColor="#007AFF" />
    );

    const button = getByTestId('button-container');
    const buttonStyles = StyleSheet.flatten(button.props.style);

    expect(getByText('Next')).toBeTruthy();
    expect(buttonStyles.backgroundColor).toBe('#007AFF');
  });

  it('renders correctly with secondary variant', () => {
    const { getByTestId, getByText } = render(
      <Button title="Back" varient="secondary" tintColor="#FF0000" />
    );

    const button = getByTestId('button-container');
    const buttonStyles = StyleSheet.flatten(button.props.style);

    expect(getByText('Back')).toBeTruthy();
    expect(buttonStyles.borderWidth).toBe(1);
    expect(buttonStyles.borderColor).toBe('#FF0000');
  });

  it('applies custom styles correctly', () => {
    const { getByTestId } = render(
      <Button
        title="Styled"
        varient="primary"
        tintColor="#000"
        style={{ paddingVertical: 20 }}
      />
    );

    const button = getByTestId('button-container');
    const buttonStyles = StyleSheet.flatten(button.props.style);

    expect(buttonStyles.paddingVertical).toBe(20);
  });

  it('applies custom text styles correctly', () => {
    const { getByText } = render(
      <Button
        title="Custom Text"
        varient="secondary"
        tintColor="#000"
        textStyle={{ fontSize: 18 }}
      />
    );

    const buttonText = getByText('Custom Text');
    const textStyles = StyleSheet.flatten(buttonText.props.style);

    expect(textStyles.fontSize).toBe(18);
  });
});
