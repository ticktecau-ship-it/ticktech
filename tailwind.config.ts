import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Brand Color
                'deep-indigo': {
                    DEFAULT: '#0B1C2D',
                    50: '#1B3A5F',
                    100: '#162F4E',
                    200: '#11243D',
                    300: '#0B1C2D',
                    400: '#081523',
                    500: '#060F19',
                    600: '#04090F',
                    700: '#020305',
                    800: '#000000',
                    900: '#000000',
                },
                // Secondary Accent
                'electric-cyan': {
                    DEFAULT: '#00E5FF',
                    50: '#E5FCFF',
                    100: '#B8F8FF',
                    200: '#8AF4FF',
                    300: '#5CF0FF',
                    400: '#2EEBFF',
                    500: '#00E5FF',
                    600: '#00B7CC',
                    700: '#008999',
                    800: '#005B66',
                    900: '#002D33',
                },
                // Support Accent
                'violet-blue': {
                    DEFAULT: '#6C7CFF',
                    50: '#FFFFFF',
                    100: '#F4F5FF',
                    200: '#D4D9FF',
                    300: '#B4BDFF',
                    400: '#949CFF',
                    500: '#6C7CFF',
                    600: '#3C4FFF',
                    700: '#0C22FF',
                    800: '#0019DB',
                    900: '#0014AB',
                },
                // Background & Surfaces
                'dark-glass': {
                    DEFAULT: '#0E1117',
                    lighter: '#1A1F2E',
                    darker: '#080A0F',
                },
                // Text Colors
                'text-primary': '#E6EDF3',
                'text-secondary': '#9BA4B5',
                'text-muted': '#6B7280',
                // Status Colors
                'status-success': '#22C55E',
                'status-warning': '#F59E0B',
                'status-error': '#EF4444',
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, #0B1C2D 0%, #121A2F 50%, #1B2A4E 100%)',
                'gradient-cta': 'linear-gradient(135deg, #00E5FF 0%, #6C7CFF 100%)',
                'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            },
            backdropBlur: {
                'glass': '12px',
                'glass-lg': '20px',
            },
            boxShadow: {
                'glass': '0 8px 30px rgba(0, 0, 0, 0.35)',
                'glass-sm': '0 4px 15px rgba(0, 0, 0, 0.25)',
                'glass-lg': '0 12px 40px rgba(0, 0, 0, 0.45)',
                'cyan-glow': '0 0 30px rgba(0, 229, 255, 0.4), 0 0 60px rgba(0, 229, 255, 0.2)',
                'violet-glow': '0 0 30px rgba(108, 124, 255, 0.4), 0 0 60px rgba(108, 124, 255, 0.2)',
            },
            fontFamily: {
                'clash': ['var(--font-clash-display)', 'system-ui', 'sans-serif'],
                'satoshi': ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
                'inter-tight': ['var(--font-inter-tight)', 'Inter', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                'tighter-1': '-0.01em',
                'wider-2': '0.02em',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.6), 0 0 60px rgba(108, 124, 255, 0.4)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
