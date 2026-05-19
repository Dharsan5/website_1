/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        error: '#ffb4ab',
        'on-primary-fixed-variant': '#484739',
        outline: '#939187',
        'surface-tint': '#cac7b5',
        'on-primary-container': '#616051',
        'on-secondary-container': '#bab8b7',
        'on-tertiary': '#303030',
        'tertiary-fixed': '#e5e2e1',
        'surface-container-high': '#2a2a2a',
        background: '#131313',
        'error-container': '#93000a',
        'on-secondary-fixed': '#1c1b1b',
        'primary-fixed': '#e6e3d0',
        'on-tertiary-container': '#605f5f',
        'inverse-surface': '#e2e2e2',
        'on-surface': '#e2e2e2',
        'surface-container-low': '#1b1b1b',
        'on-secondary-fixed-variant': '#474646',
        'on-tertiary-fixed-variant': '#474746',
        'surface-dim': '#131313',
        primary: '#fbf7e4',
        'secondary-container': '#4a4949',
        'surface-container': '#1f1f1f',
        'inverse-primary': '#605f50',
        'secondary-fixed': '#e5e2e1',
        'surface-container-lowest': '#0e0e0e',
        'inverse-on-surface': '#303030',
        'surface-variant': '#353535',
        'on-tertiary-fixed': '#1b1c1c',
        tertiary: '#f9f6f6',
        'on-background': '#e2e2e2',
        'on-primary-fixed': '#1c1c10',
        'primary-fixed-dim': '#cac7b5',
        'on-secondary': '#313030',
        'tertiary-container': '#dcdad9',
        'on-primary': '#323124',
        'outline-variant': '#48473f',
        'surface-container-highest': '#353535',
        'surface-bright': '#393939',
        surface: '#131313',
        'on-error-container': '#ffdad6',
        'on-surface-variant': '#c9c6bc',
        'on-error': '#690005',
        'primary-container': '#dedbc8',
        'tertiary-fixed-dim': '#c8c6c5',
        'secondary-fixed-dim': '#c8c6c5',
        secondary: '#c8c6c5'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'container-margin': '2rem',
        'stack-sm': '0.5rem',
        'stack-lg': '2rem',
        'stack-md': '1rem',
        gutter: '1.5rem',
        'inset-padding': '2.5rem'
      },
      fontFamily: {
        'display-lg-mobile': ['Hanken Grotesk'],
        'display-lg': ['Hanken Grotesk'],
        'headline-xl': ['Hanken Grotesk'],
        'label-sm': ['Hanken Grotesk'],
        'body-lg': ['Hanken Grotesk'],
        'headline-accent': ['Playfair Display'],
        'body-md': ['Hanken Grotesk']
      },
      fontSize: {
        'display-lg-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['72px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '800' }],
        'headline-xl': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
        'headline-accent': ['40px', { lineHeight: '1.2', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }]
      }
    }
  },
  plugins: []
}
