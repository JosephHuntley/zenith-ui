# Zenith-UI

## Installation

To install use the following command:

```sh
npm i zenith-ui

# or

yarn add zenith-ui
```

## Usage

1. Wrap your application with the `ZenithProvider` provided by **zenith-ui**.

```jsx
import { ZenithProvider } from "zenith-ui"
// Do this at the root of your application
function App({ children }) {
  return <ZenithProvider>{children}</ZenithProvider>
}
```

2.  Now you can start using components like so!:

```jsx
import { Button } from "zenith-ui"
function Example() {
  return <Button></Button>
}
```

MIT © [Joseph Huntley](https://github.com/josephhuntley)
