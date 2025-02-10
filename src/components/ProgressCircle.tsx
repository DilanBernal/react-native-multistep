import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import type { ProgressCircleProps } from '../types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ProgressCircle = (props: ProgressCircleProps) => {
  const {
    currentStep,
    totalSteps,
    size = 65,
    strokeWidth = 5,
    tintColor = '#DE3163',
    textStyle,
  } = props;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming((currentStep / totalSteps) * circumference, {
      duration: 500,
    });
  }, [currentStep, totalSteps, progress, circumference]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference - progress.value,
  }));

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={tintColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>

      <Text style={[styles.progressCircleText, textStyle]}>
        {currentStep} of {totalSteps}
      </Text>
    </View>
  );
};

export default ProgressCircle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircleText: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: '600',
  },
});
