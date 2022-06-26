import { FC } from 'react'
import { Typography } from 'antd'

interface PageHeaderProps {
	title: string
}

export const PageHeader: FC<PageHeaderProps> = ({ title }) => <Typography.Title>{title}</Typography.Title>
