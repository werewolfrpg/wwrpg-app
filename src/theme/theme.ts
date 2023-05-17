import { createTheme } from '@mui/material'

export const theme = createTheme({
	components: {
		MuiCard: {
			defaultProps: {
				variant: 'outlined',
				style: {
					borderRadius: 7.5,
					display: 'inline-block'
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
		},
		MuiTableRow: {
			defaultProps: {
				hover: true,
				style: {
					cursor: 'pointer'
				}
			}
		}
	}
})
