import { StyleSheet, View } from 'react-native';
import type { StepProps } from '../types';

/**
 * Represents a single step in a multi-step process.
 * Can display a title, a custom title component, and any child content.
 *
 * @example
 * ```tsx
 * <Step title="Step 1">
 *   <Text>Content for step 1</Text>
 * </Step>
 * ```
 */

const Step = (props: StepProps) => {
  const { children, style, ...rest } = props;

  return (
    <View style={[styles.container, style]} {...rest} testID="step-container">
      {children}
    </View>
  );
};

export default Step;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
