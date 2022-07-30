import { useEffect, useState } from 'react'
import { message, Result, Skeleton, Typography } from 'antd'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styles from '../styles/home.module.scss'

const loadingView = (
	<>
		<Skeleton />
		<Skeleton />
	</>
)

const githubProfileLink = (
	<Typography.Link href="https://github.com/bqrichards" target="_blank" rel="noreferrer">
		GitHub profile
	</Typography.Link>
)

const errorDisplay = (
	<Result
		status="error"
		title="'About Me' failed to load"
		subTitle={<Typography.Text>Please visit my {githubProfileLink} to view.</Typography.Text>}
	/>
)

export default function Home() {
	const [markdown, setMarkdown] = useState('')
	const [error, setError] = useState(false)

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bqrichards/bqrichards/main/README.md')
			.then(res => res.text())
			.then(setMarkdown)
			.catch(() => {
				message.error('Error fetching About me section')
				setError(true)
			})
	}, [])

	const markdownView = (
		<>
			<ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
			<Typography.Paragraph>Note: This information is sourced from my {githubProfileLink}.</Typography.Paragraph>
		</>
	)

	// Show error, content, or loading
	const contentView = error ? errorDisplay : markdown ? markdownView : loadingView

	return <div className={styles.container}>{contentView}</div>
}
