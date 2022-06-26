import { ProjectCard } from '../components/ProjectCard'
import { PageHeader } from '../components/PageHeader'
import { Anchor, Space, Typography } from 'antd'

export default function Projects() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
			<PageHeader title="Projects" />
			<div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
				<div style={{ display: 'flex', flexDirection: 'column', marginRight: 32 }}>
					<Anchor>
						<Anchor.Link href="#robotics" title="FIRST Robotics">
							<Anchor.Link href="#frc" title="FRC" />
							<Anchor.Link href="#ftc" title="FTC" />
						</Anchor.Link>
						<Anchor.Link href="#webdev" title="Web Dev" />
						<Anchor.Link href="#jailbreak" title="Jailbreak" />
					</Anchor>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '89vh', overflowY: 'scroll' }}>
					<Typography.Title level={2} id="robotics">
						FIRST Robotics
					</Typography.Title>
					<Typography.Title level={3} id="frc" style={{ marginTop: 0 }}>
						FRC
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard title="CSP-Analyze" githubUrl="https://github.com/bqrichards/CSP-Analyze" tags={['python']}>
							<Typography.Text>
								Backend for the FIRST FRC Collaborative Scouting Project Analyze website written with{' '}
								<a href="https://flask.palletsprojects.com/en/2.1.x/">Flask</a>
							</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CSP-Android"
							githubUrl="https://github.com/DisruptiveInnovation6317/CSP-Android"
							tags={['app', 'Android']}
						>
							<Typography.Text>
								The Collaborative Scouting Project Android app for the 2018-2019 FRC Navigating Deep Space season.
							</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CSP-Analyze-Desktop"
							githubUrl="https://github.com/bqrichards/CSP-Analyze-Desktop"
							tags={['C#']}
						>
							<Typography.Text>TODO</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CSP-Aggregate"
							githubUrl="https://github.com/bqrichards/CSP-Aggregate"
							tags={['app', 'iOS']}
						>
							<Typography.Text>iOS app used to scan and upload QR outputs from the CSP-Android app</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={3} id="ftc">
						FTC
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard title="Tarso" githubUrl="https://github.com/bqrichards/Tarso" tags={['app', 'Android']}>
							<Typography.Text>The universal FTC scouting app for the 2017-2018 Relic Recovery season</Typography.Text>
						</ProjectCard>
						<ProjectCard title="roverRuckusRC" githubUrl="https://github.com/bqrichards/roverRuckusRC" tags={['app']}>
							<Typography.Text>Robot Controller for the 2018-2019 FTC Rover Ruckus season</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CitrusScouter"
							githubUrl="https://github.com/bqrichards/CitrusScouter"
							tags={['app', 'Android']}
						>
							<Typography.Text>FTC Team and Matchlist Recorder for Rover Ruckus</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={2} id="webdev">
						Web Dev
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard
							title="everything"
							githubUrl="https://github.com/bqrichards/everything"
							tags={['docker', 'python', 'react']}
						>
							<Typography.Text>A webapp for journaling and saving media</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={2} id="jailbreak">
						Jailbreak
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard title="HapticKeypad" githubUrl="https://github.com/bqrichards/HapticKeypad" tags={['tweak']}>
							<Typography.Text>A jailbreak tweak to provide haptics in Phone.app on iOS 11.3.1</Typography.Text>
						</ProjectCard>
					</Space>
				</div>
			</div>
		</div>
	)
}
