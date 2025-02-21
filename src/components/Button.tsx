import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { ButtonProps } from '../types';

/**
 * @internal
 * A reusable button component used internally within the library.
 * Supports `primary` (solid) and `secondary` (outline) variants.
 *
 * - `primary`: A solid button with a background color.
 * - `secondary`: An outline button with a border and transparent background.
 *
 * @example
 * ```tsx
 * <Button title="Next" varient="primary" tintColor="#007AFF" />
 * <Button title="Back" varient="secondary" tintColor="#007AFF" />
 * ```
 */

const Button = (props: ButtonProps) => {
  const { title, variant, tintColor, style, textStyle, ...rest } = props;

  return (
    <TouchableOpacity
      testID="button-container"
      style={[
        styles.container,
        {
          backgroundColor: variant === 'primary' ? tintColor : 'white',
          borderWidth: variant === 'secondary' ? 1 : 0,
          borderColor: tintColor,
        },
        style,
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: variant === 'primary' ? 'white' : tintColor,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 10,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '500',
  },
});
