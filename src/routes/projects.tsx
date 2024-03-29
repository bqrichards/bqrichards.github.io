import { ProjectCard } from '../components/ProjectCard'
import { Anchor, Space, Typography } from 'antd'
import styles from '../styles/projects.module.scss'

export default function Projects() {
	return (
		<div className={styles.container}>
			<div className={styles.panelContainer}>
				<div className={styles.leftPanel}>
					<Anchor getContainer={() => document.getElementById('projects-panel')}>
						<Anchor.Link href="#robotics" title="FIRST Robotics">
							<Anchor.Link href="#frc" title="FRC" />
							<Anchor.Link href="#ftc" title="FTC" />
						</Anchor.Link>
						<Anchor.Link href="#webdev" title="Web Dev" />
						<Anchor.Link href="#rocketry" title="Rocketry" />
						<Anchor.Link href="#mc-mods" title="Minecraft Mods" />
						<Anchor.Link href="#bots" title="Bots" />
						<Anchor.Link href="#jailbreak" title="Jailbreak" />
					</Anchor>
				</div>
				<div className={styles.rightPanel} id="projects-panel">
					<Typography.Title level={2} id="robotics">
						FIRST Robotics
					</Typography.Title>
					<Typography.Title level={3} id="frc" className={styles.noMarginTop}>
						FRC
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard title="CSP-Analyze" githubUrl="https://github.com/bqrichards/CSP-Analyze" tags={['Python']}>
							<Typography.Text>
								Backend for the FIRST FRC Collaborative Scouting Project Analyze website written with{' '}
								<a href="https://flask.palletsprojects.com/en/2.1.x/">Flask</a>
							</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CSP-Android"
							githubUrl="https://github.com/DisruptiveInnovation6317/CSP-Android"
							tags={['App', 'Android']}
						>
							<Typography.Text>
								The Collaborative Scouting Project Android app for the 2018-2019 FRC Navigating Deep Space season
							</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CSP-Analyze-Desktop"
							githubUrl="https://github.com/bqrichards/CSP-Analyze-Desktop"
							tags={['C#']}
						>
							<Typography.Text>Windows application for interacting with CSP-Analyze backend</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CSP-Aggregate"
							githubUrl="https://github.com/bqrichards/CSP-Aggregate"
							tags={['App', 'iOS']}
						>
							<Typography.Text>iOS app used to scan and upload QR outputs from the CSP-Android app</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={3} id="ftc">
						FTC
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard title="Tarso" githubUrl="https://github.com/bqrichards/Tarso" tags={['App', 'Android']}>
							<Typography.Text>The universal FTC scouting app for the 2017-2018 Relic Recovery season</Typography.Text>
						</ProjectCard>
						<ProjectCard title="roverRuckusRC" githubUrl="https://github.com/bqrichards/roverRuckusRC" tags={['App']}>
							<Typography.Text>Robot Controller for the 2018-2019 FTC Rover Ruckus season</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="CitrusScouter"
							githubUrl="https://github.com/bqrichards/CitrusScouter"
							tags={['App', 'Android']}
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
							title="bqrichards.github.io"
							githubUrl="https://github.com/bqrichards/bqrichards.github.io"
							tags={['React', 'TS']}
						>
							<Typography.Text>
								Personal portfolio, sometimes for HTML projects, mostly for{' '}
								<Typography.Link href="/repo" target="_blank">
									Cydia repo
								</Typography.Link>{' '}
								hosting
							</Typography.Text>
						</ProjectCard>
						<ProjectCard title="roots" githubUrl="https://github.com/bqrichards/roots" tags={['React', 'TS']}>
							<Typography.Text>Genealogy in the browser</Typography.Text>
						</ProjectCard>
						<ProjectCard
							title="everything"
							githubUrl="https://github.com/bqrichards/everything"
							tags={['Docker', 'Python', 'React']}
						>
							<Typography.Text>A webapp for journaling and saving media</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={2} id="rocketry">
						Rocketry
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard
							title="data_rocket"
							githubUrl="https://github.com/bqrichards/data_rocket"
							tags={['C++', 'Arduino']}
						>
							<Typography.Text>Log sensor data on rocket flight for Arduino</Typography.Text>
						</ProjectCard>
						<ProjectCard title="rfcs" githubUrl="https://github.com/bqrichards/rfcs" tags={['C++', 'Arduino']}>
							<Typography.Text>Rocket Flight Control Software for Arduino</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={2} id="mc-mods">
						Minecraft Mods
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard title="moon" githubUrl="https://github.com/bqrichards/moon" tags={['Java', 'Forge']}>
							<Typography.Text>A Minecraft Mod that adds a moon dimension</Typography.Text>
						</ProjectCard>
						<ProjectCard title="Dronez" githubUrl="https://github.com/bqrichards/Dronez" tags={['Java', 'Forge']}>
							<Typography.Text>Collaborative project at ISU to add Drones to Minecraft</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={2} id="bots">
						Bots
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard
							title="KarmaBot"
							githubUrl="https://github.com/bqrichards/KarmaBot"
							tags={['Bot', 'Discord', 'Python']}
						>
							<Typography.Text>A Discord bot that keeps track of karma, similar to Reddit</Typography.Text>
						</ProjectCard>
					</Space>
					<br />
					<Typography.Title level={2} id="jailbreak">
						Jailbreak
					</Typography.Title>
					<Space direction="horizontal" wrap>
						<ProjectCard title="HapticKeypad" githubUrl="https://github.com/bqrichards/HapticKeypad" tags={['Tweak']}>
							<Typography.Text>A jailbreak tweak to provide haptics in Phone.app on iOS 11.3.1</Typography.Text>
						</ProjectCard>
					</Space>
				</div>
			</div>
		</div>
	)
}
