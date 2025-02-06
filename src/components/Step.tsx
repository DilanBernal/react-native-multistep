import { StyleSheet, View, type ViewProps } from 'react-native';

interface IStep extends ViewProps {
  title?: string;
  children: React.ReactNode;
}

const Step = (props: IStep) => {
  const { children, style, ...rest } = props;

  return (
    <View style={[styles.container, style]} {...rest}>
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
