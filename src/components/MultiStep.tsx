import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  type ViewProps,
} from 'react-native';
import React, { useState, useRef } from 'react';

interface IMultiStep extends ViewProps {
  children: React.ReactNode;
  prevButtonText?: string;
  nextButtonText?: string;
}

const MultiStep = (props: IMultiStep) => {
  const { children, prevButtonText, nextButtonText, style, ...rest } = props;

  const stepCount = React.Children.count(children);
  const [currentStep, setCurrentStep] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const nextStep = () => {
    if (currentStep < stepCount - 1) {
      setCurrentStep((prev) => prev + 1);
      flatListRef.current?.scrollToIndex({
        index: currentStep + 1,
        animated: true,
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      flatListRef.current?.scrollToIndex({
        index: currentStep - 1,
        animated: true,
      });
    }
  };

  return (
    <View style={[styles.container, style]} {...rest}>
      <FlatList
        ref={flatListRef}
        data={React.Children.toArray(children)}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.stepContainer}>{item}</View>
        )}
        extraData={currentStep}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={prevStep}
          disabled={currentStep === 0}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{prevButtonText || 'Prev'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nextStep}
          disabled={currentStep === stepCount - 1}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{nextButtonText || 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MultiStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stepContainer: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
