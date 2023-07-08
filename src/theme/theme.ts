import { createTheme } from '@mui/material'
import '../assets/fonts/index.css'

export const theme = createTheme({
	shape: {
		borderRadius: 7.5
	},
	palette: {
		primary: {
			main: '#008000' // green
		},
		divider: '#212121',
		background: {
			default: '#212121',
			paper: '#141414'
		},
		text: {
			primary: '#FFF',
			secondary: '#BBB'
		}
	},
	typography: {
		fontFamily: ['Roboto', 'Minecraft Ten', 'Minecraft'].join(',')
	},
	components: {
		MuiTabs: {
			defaultProps: {
				TabIndicatorProps: {
					style: {
						height: 4
					}
				}
			}
		},
		MuiTab: {
			defaultProps: {
				disableRipple: true,
				style: {
					color: 'white',
					textTransform: 'none',
					fontWeight: 'bold',
					fontSize: 18
				}
			}
		},
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
			styleOverrides: {
				filled: {
					background: '#212121'
				}
			},
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
					flex: 1
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
				h5: {
					fontFamily: 'Minecraft Ten',
					fontSize: 18
				},
				caption: {
					color: 'text.secondary',
					fontSize: 17
				}
			}
		}
	}
})
