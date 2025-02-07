import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  type ViewProps,
  Dimensions,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import React, { useState, useRef } from 'react';
import Button from './Button';

interface IMultiStep extends ViewProps {
  children: React.ReactNode;
  prevButtonText?: string;
  nextButtonText?: string;
  prevButtonStyle?: ViewStyle;
  nextButtonStyle?: ViewStyle;
  prevButtonTextStyle?: TextStyle;
  nextButtonTextStyle?: TextStyle;
  prevButtonComponent?: JSX.Element;
  nextButtonComponent?: JSX.Element;
  tintColor?: string;
  indicatorTitleStyle?: TextStyle;
  indicatorTitleStyle;
}

const MultiStep = (props: IMultiStep) => {
  const {
    children,
    prevButtonText,
    nextButtonText,
    prevButtonStyle,
    nextButtonStyle,
    prevButtonTextStyle,
    nextButtonTextStyle,
    prevButtonComponent,
    nextButtonComponent,
    tintColor,
    indicatorTitleStyle,
    ...rest
  } = props;

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

  const handleNavigationItemPress = (index: number) => {
    setCurrentStep(index);
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const titles = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return {
        title: child.props.title || '',
        titleStyle: child.props.titleStyle || {},
        titleComponent: child.props.titleComponent,
      };
    }
    return { title: '', titleStyle: {}, titleComponent: null };
  });

  return (
    <View style={styles.container} {...rest}>
      <View style={styles.navigationContainer}>
        {titles?.map(({ title, titleStyle, titleComponent }, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navigationItem}
            onPress={() => handleNavigationItemPress(index)}
          >
            {titleComponent ? (
              titleComponent
            ) : (
              <Text
                style={[
                  indicatorTitleStyle,
                  {
                    textAlign: 'center',
                    color: currentStep >= index ? COLOR : '#758694',
                    fontWeight: currentStep >= index ? '500' : 'normal',
                  },
                  titleStyle,
                ]}
              >
                {title}
              </Text>
            )}

            <View
              style={{
                height: 5,
                borderRadius: 5,
                backgroundColor: currentStep >= index ? COLOR : '#758694',
              }}
            ></View>
          </TouchableOpacity>
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
          {prevButtonComponent ? (
            prevButtonComponent
          ) : (
            <Button
              title={prevButtonText || 'Back'}
              varient="secondary"
              tintColor={COLOR}
              style={prevButtonStyle}
              textStyle={prevButtonTextStyle}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nextStep}
          disabled={currentStep === stepCount - 1}
        >
          {nextButtonComponent ? (
            nextButtonComponent
          ) : (
            <Button
              title={nextButtonText || 'Next'}
              varient="primary"
              tintColor={COLOR}
              style={nextButtonStyle}
              textStyle={nextButtonTextStyle}
            />
          )}
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
