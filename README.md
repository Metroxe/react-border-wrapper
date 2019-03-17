# React Border Wrapper 

[![NPM](https://img.shields.io/npm/v/react-border-wrapper.svg)](https://www.npmjs.com/package/react-border-wrapper)

## Installation

### npm
```bash
npm install --save react-border-wrapper
```

### yarn
```bash
yarn add react-border-wrapper
```

## Usage

Use the border wrapper in the same way you would use a `<div>`.

```tsx
import * as React from 'react'
import BorderWrapper from 'react-border-wrapper'

class Example extends React.Component {
  render () {
    return (
      <BorderWrapper>
      	// Content
      </BorderWrapper>
    )
  }
}
```

## Playground
Use the following link to play around with the props and find a proper style. It is highly encouraged to export the props and either [report an issue](https://github.com/Metroxe/react-border-wrapper/issues/new?assignees=&labels=bug&template=bug_report.md&title=) with them or submit them as a style to be used by other users.

[https://metroxe.github.io/react-border-wrapper/](https://metroxe.github.io/react-border-wrapper/)

## Props

| Prop | Type | Description |
| --- | :---: | --- |
| `innerPadding` | `number | string` | Padding around the children on each edge.
| `borderWidth` | `number | string` | Width of the border.
| `borderRadius` | `number | string` | Radius of each corner. This radius is added on top of the inner padding. Thus, a large radius will create a large distance between the top and bottom borders.
| `borderColour` | `string` | CSS compatible string for the border colour
| `borderType` | `string` | CSS compatible `LineStyle` string to change the border drawing style
| `topElement` `rightElement` `bottomElement` `leftElement` | `Element` | JSX Element to be rendered sepcified side. If an element is not specified then all prop values for that side will be ignored.
| `topPosition` `rightPosition` `leftPosition` `rightPosition` | `number` | A number between `0` and `1` to indicate a precentage (`0%` to `100%`) of where the component will be placed along the sides. Values greater than `1` or less than `0` will be at `1` and `0` respectively.
| `topOffset` `rightOffset` `leftOffset` `rightOffset` | `string | number` | Offset the component on the given side by this value. Use this to help center or positiomn each component to your desired location.
| `topGap` `rightGap` `bottomGap` `leftGap` | `string | number` | Distance between the border and the position of the component to be rendered. 

## License

MIT © [Christopher Powroznik](https://github.com/Metroxe)
