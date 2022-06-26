import { Card, Tag, Typography } from 'antd'
import React, { FC } from 'react'

interface ProjectCardProps {
	title: string
	tags?: string[]
	githubUrl: string
	children?: React.ReactNode
}

export const ProjectCard: FC<ProjectCardProps> = ({ title, tags = [], githubUrl, children }) => (
	<Card
		title={
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
				<Typography.Text>{title}</Typography.Text>
				{tags.map(tag => (
					<Tag key={tag} style={{}}>
						{tag}
					</Tag>
				))}
			</div>
		}
		style={{ width: 350, height: 160 }}
		extra={
			<a href={githubUrl} target="_blank" rel="noreferrer">
				Visit
			</a>
		}
	>
		{children}
	</Card>
)
