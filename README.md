# React-Mobile-Share

Provides an easy and simple way to share data (such as text, url and media) via mobile’s built-in share module.
It is based on [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share).

This works only with secure contexts (HTTPS).

## 💡 Features

- Lightweight
- Share text, url and images
- Works on Android and iOS

## 🔧 Installation

```bash
npm i react-mobile-share    # npm
yarn add react-mobile-share # yarn
```

## 🖥️ Demo

[![Try with CodeSandbox](https://img.shields.io/badge/Edit%20with%20CodeSandBox-000000?style=for-the-badge&logo=codesandbox&logoColor=white)](https://codesandbox.io/s/react-mobile-share-example-r11kjs?file=/src/App.js)

## 📱 Preview

![Android](https://raw.githubusercontent.com/encoresky/react-mobile-share/main/sample-android-share.png)&nbsp;&nbsp;&nbsp;
![iOS](https://raw.githubusercontent.com/encoresky/react-mobile-share/main/sample-ios-share.png)

## 📦 Usage

```tsx
import React from "react";
import { shareOnMobile } from "react-mobile-share";

const imgBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2...";

const App = () => {
  return (
    <div>
      <button
        onClick={() =>
          shareOnMobile({
            text: "Hey checkout our package react-mobile-share",
            url: "https://www.npmjs.com/package/react-mobile-share",
            title: "React-Mobile-Share",
            images: [imgBase64],
          })
        }
      >
        Share
      </button>
    </div>
  );
};

export default App;
```

## 👀 API References

#### Functions

```
  shareOnMobile(data, fallbackFn)
```

Takes the following parameters:

| Parameter    | Type       | Description                   |
| :----------- | :--------- | :---------------------------- |
| `data`       | `object`   | **Required**                  |
| `fallbackFn` | `function` | **Options**: return a message |

#### Data Object (1st Parameter)

```
{
    text: <string>,
    url: "https://www.npmjs.com/package/react-mobile-share",
    title: "React-Mobile-Share",
    images: [imgBase64],
}
```

Object must contains the following fields:
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `title` | `string` | **Required**. Must have a title.|
| `text` | `string` | **Optional**. Add a description. |
| `url` | `string` | **Optional**. Any valid url. |
| `images` | `array` | **Optional**. Should be a valid array of base64 strings. |

#### Fallback Function (2nd Parameter)

```
function(message) {
    console.log("fallback", message)
}
```

This will invoked when any failure occures.

## 📜 License

[MIT](https://github.com/encoresky/react-mobile-share/blob/main/LICENSE)



## 🤝🏼 Contributions

“We welcome pull requests! Explore open issues to find opportunities to contribute or open a new issue to share your ideas or report bugs—your help improves this library

[Contrbution Guidelines](https://github.com/encoresky/react-mobile-share/blob/main/CONTRIBUTION.md)


