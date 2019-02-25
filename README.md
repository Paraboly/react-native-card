<img alt="Paraboly React Native Card" src="https://github.com/Paraboly/react-native-card/blob/master/assets/Screenshots/logo.png" width="1050"/>

Fully customizable Card View for React Native.

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-card.svg)](https://www.npmjs.com/package/@paraboly/react-native-card)
[![npm downloads](https://img.shields.io/npm/dm/@paraboly/react-native-card.svg)](https://www.npmjs.com/package/@paraboly/react-native-card)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

<p align="center">
<img alt="Paraboly React Native Card" src="https://github.com/Paraboly/react-native-card/blob/master/assets/Screenshots/example.png" width="49.7%"/>
</p>

## Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-card
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x",
"randomcolor": ">= 0.5.x",
"react-native": ">= 0.55.x",
"react-native-material-ripple": ">= 0.8.x",
"react-native-iphone-x-helper": ">= 1.2.x",
"react-native-dynamic-vector-icons": ">= x.x.x"
```

## Basic Usage

```ruby
 <Card
  iconDisable
  numberOfLines={3}
  title="Title"
  content="Main Content"
  rightBottomText="30"
  onPress={() => {}}
/>
```

## Card with Icon

```ruby
<Card
  iconDisable={false}
  iconName="home"
  iconType="Entypo"
  numberOfLines={3}
  title="Title"
  content="Lorem Ipsum"
  rightBottomText="1.3"
  onPress={() => {}}
/>
```

### Example Application

- [check the code](examples/App.js), and yes! :) all of the images, screenshots are directly taken
  from the this example. Of course, you can simply clone the project and run the example on your own environment.

### Configuration - Props


| Property            |   Type   |       Default        | Description                                        |
| ------------------- | :------: | :------------------: | -------------------------------------------------- |
| title               |  string  |          ""          | use this to change the title                       |
| style               |  style   |        style         | use this to change the main container's style      |
| onPress             | function |         null         | set the onPress function                           |
| content             |  string  |          ""          | set content                                        |
| iconName            |  string  |        "home"        | set icon from dynamic vector icons                 |
| iconColor           |  color   |       #ffffff        | set icon's color                                   |
| iconSize            |  number  |          16          | set icon's size                                    |
| iconType            |  string  |       "Entypo"       | set icon's family type                             |
| iconDisable         | boolean  |        false         | disable the whole icon component                   |
| shadowStyle         |  style   | default shadow style | change the card's shadow style                     |
| defaultTitle        |  string  |          ""          | set the default title if title prop is not set     |
| defaultContent      |  string  |          ""          | set the default content if content prop is not set |
| numberOfLines       |  number  |          3           | set number of lines for the content                |
| rightBottomText     |  string  |          ""          | set the right bottom text                          |
| containerHeight     |  number  |         null         | set the content's container height                 |
| iconBackgroundColor |  color   |        "#fff"        | set the icon's background color                    |


## Author

FreakyCoder, kurayogun@gmail.com | kuray.ogun@paraboly.com

## License

Paraboly React Native Card Library is available under the MIT license. See the LICENSE file for more info.
