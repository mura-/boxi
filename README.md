# Boxi

Boxi は Div 要素に対してマージンやパディングなどのスタイルを指定できるライブラリです。  
指定できるスタイルは[Material-ui の Box](https://material-ui.com/components/box/)を参考にしています。

[![Github issues](https://img.shields.io/github/issues/mura-/boxi)](https://github.com/mura-/boxi/issues)
[![Github forks](https://img.shields.io/github/forks/mura-/boxi)](https://github.com/mura-/boxi/network/members)
[![Github stars](https://img.shields.io/github/stars/mura-/boxi)](https://github.com/mura-/boxi/stargazers)
[![Github top language](https://img.shields.io/github/languages/top/mura-/boxi)](https://github.com/mura-/boxi/)
[![Github license](https://img.shields.io/github/license/mura-/boxi)](https://github.com/mura-/boxi/)
[![npm version](https://badge.fury.io/js/boxi.svg)](https://badge.fury.io/js/boxi)

# Tags

`react`

# Advantages

- div に対してマージンやパディング、色、並びなどのプロパティを渡すことができます。inline style よりも書きやすいです。
- Emotion を用い CSS in JS で記述されているため inline style よりもパフォーマンス上メリットがあるはずです。（未計測）

# Installation

- yarn

  ```
  yarn add boxi
  ```

- npm
  ```
  npm install boxi
  ```

# Usage

```tsx
import Box from 'boxi';

// You can define any props as below
const Component = () => <Box m="4px">Children</Box>;
```

# API

## borders

| Prop         | CSS property  |
| ------------ | ------------- |
| border       | border        |
| borderTop    | border-top    |
| borderLeft   | border-left   |
| borderRight  | border-right  |
| borderBottom | border-bottom |
| borderColor  | border-color  |
| borderRadius | border-radius |

```tsx
<Box border="1px" borderColor="red"></Box>
<Box borderTop="1px"></Box>
```

## display

| Prop         | CSS property  |
| ------------ | ------------- |
| display      | display       |
| overflow     | overflow      |
| textOverflow | text-overflow |
| visiblity    | visiblity     |
| whiteSpace   | white-space   |

```tsx
<Box whiteSpace="nowrap"></Box>
```

## flexbox

| Prop           | CSS property    |
| -------------- | --------------- |
| flexBasis      | flex-basis      |
| flexDirection  | flex-direction  |
| flexWrap       | flex-wrap       |
| justifyContent | justify-content |
| justifyItems   | justify-items   |
| justifySelf    | justify-self    |
| alignItems     | align-items     |
| alignContent   | align-content   |
| order          | order           |
| flex           | flex            |
| flexGrow       | flex-grow       |
| flexShrink     | flex-shrink     |
| alignSelf      | align-self      |

```tsx
<Box display="flex" justifyContent="space-between" alignItems="center">
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
</Box>
```

## palette

| Prop            | CSS property     |
| --------------- | ---------------- |
| color           | color            |
| background      | background       |
| backgroundColor | background-color |

```tsx
<Box color="red" backgroundColor="gray">
  colored box
</Box>
```

## positions

| Prop     | CSS property |
| -------- | ------------ |
| position | position     |
| zIndex   | z-index      |
| top      | top          |
| right    | right        |
| bottom   | bottom       |
| left     | left         |

```tsx
<Box zIndex="1000"></Box>
```

## shadows

| Prop      | CSS property |
| --------- | ------------ |
| boxShadow | boxShadow    |

```tsx
<Box boxShadow="10px 10px 10px 10px rgba(0,0,0,0.4)"></Box>
```

## sizing

## spacing

## typography

# Contributors

- [mura-](https://github.com/mura-)
