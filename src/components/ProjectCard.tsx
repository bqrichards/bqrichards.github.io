import React, { FC } from 'react'
import { Card, Tag, Typography } from 'antd'

import styles from '../styles/ProjectCard.module.scss'

interface ProjectCardProps {
	title: string
	tags?: string[]
	githubUrl: string
	children?: React.ReactNode
}

export const ProjectCard: FC<ProjectCardProps> = ({ title, tags = [], githubUrl, children }) => (
	<Card
		title={
			<div className={styles.title}>
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
			<Typography.Link href={githubUrl} target="_blank" rel="noreferrer">
				Visit
			</Typography.Link>
		}
	>
		{children}
	</Card>
)
