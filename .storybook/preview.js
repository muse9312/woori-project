/** @type { import('@storybook/react').Preview } */
import GlobalStyle from '../src/GlobalStyles';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F0F0F0',
        },
        {
          name: 'dark',
          value: '#0d141c',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
    codeBgColor: 'dark',
  },
};

export default preview;
