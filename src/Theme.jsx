import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {},
	fonts: [],
	fontSizes: {
		small: '',
		medium: '',
		large: '',
	},
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
