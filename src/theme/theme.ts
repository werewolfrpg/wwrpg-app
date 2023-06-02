import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		// divider: '#808080',
		background: {
			default: '#212121',
			paper: '#141414'
		},
		text: {
			primary: '#FFF',
			secondary: '#C0C0C0',
			disabled: '#808080'
		}
	},
	typography: {
		fontFamily: ['Roboto'].join(',')
	},
	components: {
		MuiDivider: {
			defaultProps: {
				style: {
					background: 'background.default'
				}
			}
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: 'lg'
			}
		},
		MuiChip: {
			defaultProps: {
				style: {
					cursor: 'inherit'
				}
			}
		},
		MuiCard: {
			defaultProps: {
				variant: 'outlined',
				style: {
					flex: 1,
					borderRadius: 7.5
				}
			}
		},
		MuiTooltip: {
			defaultProps: {
				disableInteractive: true,
				arrow: true,
				placement: 'top'
			},
			styleOverrides: {
				tooltip: {
					fontSize: 13,
					fontWeight: 'bold',
					backgroundColor: 'black'
				},
				arrow: {
					color: 'black'
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				h1: {
					fontFamily: 'Minecraft Ten',
					fontSize: 50
				},
				h2: {
					fontFamily: 'Minecraft Ten',
					fontSize: 35
				},
				h3: {
					fontFamily: 'Minecraft Ten',
					fontSize: 25
				},
				h4: {
					fontFamily: 'Minecraft',
					fontSize: 20
				},
				caption: {
					color: 'text.secondary',
					fontSize: 16
				}
			}
		}
	}
})
