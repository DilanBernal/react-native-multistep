# react-native-multistep

A lightweight multi-step view component for React Native with smooth transitions using Reanimated

## Installation

```sh
npm install react-native-multistep
```

Here’s the **Peer Dependencies** section in **one single Markdown block** for easy copying:

### Peer Dependencies

This package relies on the following peer dependencies. Make sure they are installed in your project:

1. **`react-native-reanimated`**
   This library is used for smooth animations and transitions.
   Install it using:
   ```bash
   npm install react-native-reanimated
   ```
   Follow the [official installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) to set it up correctly.

2. **`react-native-svg`**
   This library is used for rendering SVG graphics.
   Install it using:
   ```bash
   npm install react-native-svg@>=15.0.0
   ```
   Follow the [official installation guide](https://github.com/software-mansion/react-native-svg#installation) to configure it properly.


### Notes:
- Ensure that these libraries are installed and linked correctly in your React Native project.
- If you encounter any issues, refer to the official documentation for each library.

## Usage


```js
import { Text, View } from 'react-native';
import { MultiStep, Step } from 'react-native-multistep';

const App = () => {
  return (
    <MultiStep onFinalStepSubmit={() => alert('Submitted!')}>
      <Step title="Step 1">
        <Text>Welcome to Step 1</Text>
      </Step>
      <Step title="Step 2">
        <Text>Fill in some details here.</Text>
      </Step>
      <Step title="Step 3">
        <Text>Review your information.</Text>
      </Step>
    </MultiStep>
  );
};

export default App;
```


# MultiStepProps

The `MultiStepProps` interface defines the properties for the `MultiStep` component, which handles multi-step navigation.

| Property                     | Type                     | Required | Default Value               | Description                                                                 |
|------------------------------|--------------------------|----------|-----------------------------|-----------------------------------------------------------------------------|
| `children`                   | `React.ReactNode`        | Yes      | -                           | The steps or content to be rendered inside the multi-step view. Typically an array of `Step` components. |
| `onFinalStepSubmit`          | `() => void`             | Yes      | -                           | Callback function that is called when the user presses the submit button on the last step. |
| `prevButtonText`             | `string`                 | No       | `"Back"`                    | Text for the "Previous" button.                                             |
| `nextButtonText`             | `string`                 | No       | `"Next"`                    | Text for the "Next" button.                                                 |
| `prevButtonStyle`            | `ViewStyle`              | No       | -                           | Style for the "Previous" button container.                                  |
| `nextButtonStyle`            | `ViewStyle`              | No       | -                           | Style for the "Next" button container.                                      |
| `prevButtonTextStyle`        | `TextStyle`              | No       | -                           | Style for the text inside the "Previous" button.                            |
| `nextButtonTextStyle`        | `TextStyle`              | No       | -                           | Style for the text inside the "Next" button.                                |
| `prevButtonComponent`        | `JSX.Element`            | No       | -                           | Custom component to replace the default "Previous" button. Overrides `prevButtonText` and `prevButtonStyle`. |
| `nextButtonComponent`        | `JSX.Element`            | No       | -                           | Custom component to replace the default "Next" button. Overrides `nextButtonText` and `nextButtonStyle`. |
| `tintColor`                  | `string`                 | No       | -                           | Primary tint color for active indicators and buttons.                        |
| `globalStepTitleStyle`       | `TextStyle`              | No       | -                           | Global style for the step title text. Accepts a React Native `TextStyle` object. |
| `globalNextStepTitleStyle`   | `TextStyle`              | No       | -                           | Global style for the next step title text. Accepts a React Native `TextStyle` object. |
| `progressCircleSize`         | `number`                 | No       | `65`                        | The size (diameter) of the circular progress indicator in pixels.           |
| `progressCircleThickness`    | `number`                 | No       | `5`                         | The thickness of the progress ring.                                         |
| `progressCircleColor`        | `string`                 | No       | `"#DE3163"`                 | The color of the filled (progress) portion of the circle.                   |
| `progressCircleTrackColor`   | `string`                 | No       | `"#E0E0E0"`                 | The color of the unfilled (background) portion of the circle.               |
| `progressCircleLabelStyle`   | `TextStyle`              | No       | -                           | Style for the text inside the progress circle. Accepts a React Native `TextStyle` object. |
| `headerStyle`                | `ViewStyle`              | No       | -                           | Style for the header where the title and progress bar are shown. Accepts a React Native `ViewStyle` object. |
| `globalStepContainerStyle`   | `ViewStyle`              | No       | -                           | Global style for the step container. Accepts a React Native `ViewStyle` object. |
| `fullScreenHeight`           | `boolean`                | No       | `false`                     | If `true`, the step will take the entire available screen height.            |
| `buttonContainerStyle`       | `ViewStyle`              | No       | -                           | Style for the button container. Accepts a React Native `ViewStyle` object.  |
| `submitButtonText`           | `string`                 | No       | `"Submit"`                  | Text for the "Submit" button.                                               |
| `submitButtonStyle`          | `ViewStyle`              | No       | -                           | Style for the "Submit" button. Accepts a React Native `ViewStyle` object.    |
| `submitButtonTextStyle`      | `TextStyle`              | No       | -                           | Style for the text inside the "Submit" button. Accepts a React Native `TextStyle` object. |
| `submitButtonComponent`      | `JSX.Element`            | No       | -                           | Custom component to replace the default "Submit" button. Overrides `submitButtonText` and `submitButtonStyle`. |

### Notes:
- **Required Fields**: `children` and `onFinalStepSubmit` are required properties.
- **Optional Fields**: All other properties are optional and have default values if not provided.
- **Overrides**: Custom components like `prevButtonComponent`, `nextButtonComponent`, and `submitButtonComponent` will override their respective text and style propertiess

# StepProps

The `StepProps` interface defines the properties for a single step in a multi-step process.

| Property             | Type                     | Required | Default Value | Description                                                                 |
|----------------------|--------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `title`              | `string`                 | Yes      | -             | The title of the step. This is displayed as the step's label.               |
| `children`           | `React.ReactNode`        | Yes      | -             | The content of the step. This can be any React component or elements.       |
| `stepTitleStyle`     | `TextStyle`              | No       | -             | Style for the step title text. Accepts a React Native `TextStyle` object.   |
| `nextStepTitleStyle` | `TextStyle`              | No       | -             | Style for the next step title text. Accepts a React Native `TextStyle` object. |
| `titleComponent`     | `() => JSX.Element`      | No       | -             | Custom component for the title. Overrides `title` if provided.              |
| `stepContainerStyle` | `ViewStyle`              | No       | -             | Style for the step container. Accepts a React Native `ViewStyle` object.    |

### Notes:
- **Required Fields**: `title` and `children` are required properties.
- **Optional Fields**: All other properties are optional.
- **Overrides**: The `titleComponent` property will override the `title` if provided.


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
