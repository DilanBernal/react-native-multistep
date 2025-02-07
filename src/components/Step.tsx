import type React from 'react';
import { StyleSheet, View, type TextStyle, type ViewProps } from 'react-native';

interface IStep extends ViewProps {
  title?: string;
  titleStyle?: TextStyle;
  titleComponent?: JSX.Element;
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
