import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		grey400: '#9CA3AF',
		grey500: '#6B7280',
		grey900: '#111827',
		white: '#FFFFFF',
	},
	fonts: [],
	fontSize: {
		sx: '0.75rem',
		sm: '0.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		xxl: '1.5rem',
		xxxl: '1.875rem',
		xxxxl: '2.25rem',
		xxxxxl: '3rem',
	},
	lineHeight: {
		sx: '1rem',
		sm: '1.25rem',
		base: '1.5rem',
		lg: '1.75rem',
		xl: '1.75rem',
		xxl: '2em',
		xxxl: '2.25rem',
		xxxxl: '2.5rem',
		xxxxxl: '3rem',
	},
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
