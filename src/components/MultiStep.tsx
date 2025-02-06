import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  type ViewProps,
  Dimensions,
} from 'react-native';
import React, { useState, useRef } from 'react';
import Button from './Button';

interface IMultiStep extends ViewProps {
  children: React.ReactNode;
  prevButtonText?: string;
  nextButtonText?: string;
  tintColor?: string;
}

const MultiStep = (props: IMultiStep) => {
  const { children, prevButtonText, nextButtonText, tintColor, ...rest } =
    props;

  const COLOR = tintColor || '#DE3163';

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

  const titles = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return child.props.title || '';
    }
    return '';
  });

  return (
    <View style={styles.container} {...rest}>
      <View style={styles.navigationContainer}>
        {titles?.map((title, index) => (
          <View key={index} style={styles.navigationItem}>
            <Text
              style={{
                textAlign: 'center',
                color: currentStep >= index ? COLOR : '#758694',
                fontWeight: currentStep >= index ? '500' : 'normal',
              }}
            >
              {title}
            </Text>
            <View
              style={{
                height: 5,
                borderRadius: 5,
                backgroundColor: currentStep >= index ? COLOR : '#758694',
              }}
            ></View>
          </View>
        ))}
      </View>
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
        <TouchableOpacity onPress={prevStep} disabled={currentStep === 0}>
          <Button
            title={prevButtonText || 'Back'}
            varient="secondary"
            tintColor={COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nextStep}
          disabled={currentStep === stepCount - 1}
        >
          <Button
            title={nextButtonText || 'Next'}
            varient="primary"
            tintColor={COLOR}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MultiStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    gap: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    width: '100%',
    padding: 10,
  },
  navigationItem: {
    flexGrow: 1,
    gap: 10,
  },
  stepContainer: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 20,
  },
});
