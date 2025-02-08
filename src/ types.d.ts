import { ViewProps, ViewStyle, TextStyle } from 'react-native';

export interface StepProps extends ViewProps {
  /**
   * The title of the step.
   * This is displayed as the step's label.
   */
  title?: string;

  /**
   * Style for the title text.
   * Accepts a React Native `TextStyle` object.
   */
  titleStyle?: TextStyle;

  /**
   * Custom component for the title.
   * Receives an `isCompleted` prop to indicate if the step is completed.
   */
  titleComponent?: ({ isCompleted }: { isCompleted?: boolean }) => JSX.Element;

  /**
   * The content of the step.
   * This can be any React component or elements.
   */
  children: React.ReactNode;
}

/**
 * Props for the MultiStep component, which handles multi-step navigation.
 */
export interface MultiStepProps extends ViewProps {
  /**
   * The steps or content to be rendered inside the multi-step view.
   * Typically an array of `Step` components.
   */
  children: React.ReactNode;

  /**
   * Text for the "Previous" button. Defaults to "Previous" if not provided.
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
   * Height of the step indicator.
   */
  indicatorHeight?: number;
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
