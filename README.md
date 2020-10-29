# Boxi

<!-- # Short Description -->

Boxi は Div 要素に対してマージンやパディングなどのスタイルを指定できるライブラリです。
指定できるスタイルは[Material-ui の Box](https://material-ui.com/components/box/)を参考にしています。

<!-- # Badges -->

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

```
import Box from 'boxi';

// You can define any props as below
const Component = () => <Box m="4px">Children</Box>
```

# Contributors

- [mura-](https://github.com/mura-)

<!-- CREATED_BY_LEADYOU_README_GENERATOR -->
