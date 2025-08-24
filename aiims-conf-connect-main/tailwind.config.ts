
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				medical: {
					50: '#e3f2fd',
					100: '#bbdefb',
					200: '#90caf9',
					300: '#64b5f6',
					400: '#42a5f5',
					500: '#1e88e5',
					600: '#1976d2',
					700: '#0A5C99',
					800: '#0d47a1',
					900: '#0a2e63',
				},
				maroon: {
					50: '#f9e6e6',
					100: '#f0c4c4',
					200: '#e49e9e',
					300: '#d77777',
					400: '#ca5757',
					500: '#b83e3e',
					600: '#9b2c2c',
					700: '#7d1e1e',
					800: '#5f1515',
					900: '#420b0b',
				},
				gold: {
					50: '#fdf6e3',
					100: '#f9e9bb',
					200: '#f5db8f',
					300: '#f1cd62',
					400: '#eec141',
					500: '#d4af37',
					600: '#ac8e2c',
					700: '#856e22',
					800: '#5d4d18',
					900: '#362c0d',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				wave: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-80%)' },
				  },
			},
			animation: {
				'accordion-down': 'accordion-down 0.5s ease-out',
				'accordion-up': 'accordion-up 0.5ls ease-out',
				'wave-scroll': 'wave 4.5s linear infinite',

			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
