import React from 'react'
import { ContentCopy } from '@mui/icons-material'
import { Stack, Typography, Tooltip } from '@mui/material'

export interface ServerLinkProps {
	server: string
	version: string
}

export default ({ server, version }: ServerLinkProps) => {
	return (
		<Stack m={2} zIndex={100} alignItems="center">
			<Stack direction="row" gap={1}>
				<Typography variant="h3">{server}</Typography>
				<Tooltip title="Copy server address">
					<ContentCopy
						style={{ cursor: 'pointer', fontSize: 20 }}
						onClick={() => navigator.clipboard.writeText(server)}
					/>
				</Tooltip>
			</Stack>
			<Typography fontFamily="Minecraft" fontSize={18}>
				Minecraft {version}
			</Typography>
		</Stack>
	)
}
