import { ThemeProvider } from '@material-ui/core/styles';
import { withNextRouter } from 'storybook-addon-next-router';
import theme from '../src/theme'
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

const addParameters = require('@storybook/react').addParameters;
const addDecorator = require('@storybook/react').addDecorator;

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {} // defaults to using addon actions integration, can override any method in the router
  })
)

addDecorator((story) => (
<ThemeProvider theme={theme}>{story()}</ThemeProvider>
))