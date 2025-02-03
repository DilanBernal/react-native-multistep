import { View, type ViewProps } from 'react-native';

interface IStep extends ViewProps {
  children: React.ReactNode;
}

const Step = (props: IStep) => {
  const { children, style, ...rest } = props;

  return (
    <View style={style} {...rest}>
      {children}
    </View>
  );
};

export default Step;
