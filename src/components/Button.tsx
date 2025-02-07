import { View, Text, StyleSheet, type ViewProps } from 'react-native';

interface IButton extends ViewProps {
  title: string;
  varient: 'primary' | 'secondary';
  tintColor: string;
}

const Button = (props: IButton) => {
  const { title, varient, tintColor, style } = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: varient === 'primary' ? tintColor : 'white',
          borderWidth: varient === 'secondary' ? 1 : 0,
          borderColor: tintColor,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: varient === 'primary' ? 'white' : tintColor,
          },
        ]}
      >
        {title}
      </Text>
    </View>
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
