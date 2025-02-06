import { View, Text, StyleSheet } from 'react-native';

interface IButton {
  title: string;
  varient: 'primary' | 'secondary';
  tintColor: string;
}

const Button = (props: IButton) => {
  const { title, varient, tintColor } = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: varient === 'primary' ? tintColor : 'white',
          borderWidth: varient === 'secondary' ? 1 : 0,
          borderColor: tintColor,
        },
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
