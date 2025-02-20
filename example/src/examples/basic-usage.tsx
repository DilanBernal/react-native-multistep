import { MultiStep, Step } from '@brijen/react-native-multistep';
import { Text } from 'react-native';

const BasicUsage = () => {
  return (
    <MultiStep fullScreenHeight>
      <Step title="Step 1">
        <Text>Content for Step 1</Text>
      </Step>
      <Step title="Step 2">
        <Text>Content for Step 2</Text>
      </Step>
    </MultiStep>
  );
};

export default BasicUsage;
