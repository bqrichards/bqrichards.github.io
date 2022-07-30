import { List, Typography } from 'antd'

const PACKAGES = [
	{
		name: 'HapticKeypad',
		cydiaUrl:
			'cydia://url/https://cydia.saurik.com/api/share#?source=http://bqrichards.github.io/repo/&package=net.bqrichards.haptickeypad',
	},
	{
		name: 'PasscodeButtonX',
		cydiaUrl:
			'cydia://url/https://cydia.saurik.com/api/share#?source=http://bqrichards.github.io/repo/&package=net.brichards.passcodebuttonx',
	},
	{
		name: 'TakeMeHomeX',
		cydiaUrl:
			'cydia://url/https://cydia.saurik.com/api/share#?source=http://bqrichards.github.io/repo/&package=net.bqrichards.takemehomex',
	},
]

export default function CydiaRepo() {
	return (
		<div>
			<Typography.Title level={3}>
				<Typography.Title level={2}>Add Repo</Typography.Title>
				<Typography.Link href="cydia://url/https://cydia.saurik.com/api/share#?source=http://bqrichards.github.io/repo/">
					Add the repo by clicking this link
				</Typography.Link>
				<Typography.Title level={5}>
					Or you can copy and paste the url: https://bqrichards.github.io/repo
				</Typography.Title>
				<Typography.Title level={2}>Packages:</Typography.Title>
				<List
					dataSource={PACKAGES}
					size="large"
					style={{ width: 200 }}
					renderItem={item => (
						<List.Item>
							<Typography.Link href={item.cydiaUrl}>{item.name}</Typography.Link>
						</List.Item>
					)}
				/>
			</Typography.Title>
		</div>
	)
}
