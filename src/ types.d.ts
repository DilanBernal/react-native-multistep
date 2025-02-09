import { ViewProps, ViewStyle, TextStyle } from 'react-native';

export interface StepProps extends ViewProps {
  /**
   * The title of the step.
   * This is displayed as the step's label.
   */
  title: string;

  /**
   * Style for the title text.
   * Accepts a React Native `TextStyle` object.
   */
  titleStyle?: TextStyle;

  /**
   * Style for the subtitle text.
   * Accepts a React Native `TextStyle` object.
   */
  subTitleStyle?: TextStyle;

  /**
   * Custom component for the title.
   */
  titleComponent?: () => JSX.Element;

  /**
   * The content of the step.
   * This can be any React component or elements.
   */
  children: React.ReactNode;
}

/**
 * @internal
 * Props for the internal ProgressCircle component, which visually represents step progress.
 * This component is not exposed to end users.
 */
export interface ProgressCircleProps {
  /**
   * The current step number, starting from 1.
   */
  currentStep: number;

  /**
   * The total number of steps in the process.
   */
  totalSteps: number;

  /**
   * The size (diameter) of the circular progress indicator in pixels.
   * Defaults to `65`.
   */
  size?: number;

  /**
   * The thickness of the progress ring.
   * Defaults to `5`.
   */
  strokeWidth?: number;

  /**
   * The color of the progress ring.
   * Defaults to `#DE3163.
   */
  tintColor?: string;
}

/**
 * Props for the MultiStep component, which handles multi-step navigation.
 */
export interface MultiStepProps {
  /**
   * The steps or content to be rendered inside the multi-step view.
   * Typically an array of `Step` components.
   */
  children: React.ReactNode;

  /**
   * Text for the "Previous" button. Defaults to "Back" if not provided.
   */
  prevButtonText?: string;

  /**
   * Text for the "Next" button. Defaults to "Next" if not provided.
   */
  nextButtonText?: string;

  /**
   * Style for the "Previous" button container.
   */
  prevButtonStyle?: ViewStyle;

  /**
   * Style for the "Next" button container.
   */
  nextButtonStyle?: ViewStyle;

  /**
   * Style for the text inside the "Previous" button.
   */
  prevButtonTextStyle?: TextStyle;

  /**
   * Style for the text inside the "Next" button.
   */
  nextButtonTextStyle?: TextStyle;

  /**
   * Custom component to replace the default "Previous" button.
   * If provided, it will override `prevButtonText` and `prevButtonStyle`.
   */
  prevButtonComponent?: JSX.Element;

  /**
   * Custom component to replace the default "Next" button.
   * If provided, it will override `nextButtonText` and `nextButtonStyle`.
   */
  nextButtonComponent?: JSX.Element;

  /**
   * Primary tint color for active indicators and buttons.
   */
  tintColor?: string;

  /**
   * Style for the step indicator titles.
   */
  indicatorTitleStyle?: TextStyle;

  /**
   * Style for the step indicator subtitles.
   */
  indicatorSubtitleStyle?: TextStyle;

  /**
   * The size (diameter) of the circular progress indicator in pixels.
   * Defaults to `65`.
   */
  progressCircleSize?: number;

  /**
   * The thickness of the progress ring.
   * Defaults to `5`.
   */
  progressCircleStrokeWidth?: number;

  /**
   * The color of the progress ring.
   * Defaults to `#DE3163`.
   */
  progressCircleTintColor?: string;

  /**
   * Style for the header where the title and progress bar are shown.
   * Accepts a React Native `ViewStyle` object.
   */
  headerStyle?: ViewStyle;

  /**
   * Style for the form container.
   * Accepts a React Native `ViewStyle` object.
   */
  formContainerStyle?: ViewStyle;

  /**
   * Style for the button container.
   * Accepts a React Native `ViewStyle` object.
   */
  buttonContainerStyle?: ViewStyle;

  /**
   * Callback function that is called when the user presses the submit button on the last step.
   */
  onSubmit: () => void;
}

/**
 * @internal
 * Props for the internal Button component used within the library.
 * Not exposed to end users.
 */
export interface ButtonProps extends ViewProps {
  /**
   * The text displayed inside the button.
   */
  title: string;

  /**
   * Button variant that determines the style.
   * - `primary`: A solid button using the main `tintColor`.
   * - `secondary`: An outline button with a border matching `tintColor`.
   */
  varient: 'primary' | 'secondary';

  /**
   * The main color used for the button.
   */
  tintColor: string;

  /**
   * Style for the button text.
   */
  textStyle?: TextStyle;
}
