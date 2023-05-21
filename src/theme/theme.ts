import { createTheme } from '@mui/material'

export const theme = createTheme({
	components: {
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
					fontWeight: 400,
					backgroundColor: 'black'
				},
				arrow: {
					color: 'black'
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				h3: {
					fontSize: 20,
					fontWeight: 700
				},
				h4: {
					fontSize: 16,
					fontWeight: 900
				},
				caption: {
					fontSize: 12,
					color: 'secondary'
				}
			}
		}
	}
})
