import { useCallback, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { PROJECTS_PATH, HOME_PATH, CYDIA_REPO_PATH } from './routes'
import { Menu, Layout } from 'antd'
import type { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { AppleOutlined, HomeOutlined, NodeExpandOutlined } from '@ant-design/icons'

import styles from './styles/App.module.scss'

import Home from './routes/home'
import Projects from './routes/projects'
import CydiaRepo from './routes/cydiarepo'

const { Content } = Layout

const MENU_ITEMS = [
	{ label: 'Home', key: HOME_PATH, icon: <HomeOutlined /> },
	{ label: 'Projects', key: PROJECTS_PATH, icon: <NodeExpandOutlined /> },
	{ label: 'Cydia Repo', key: CYDIA_REPO_PATH, icon: <AppleOutlined /> },
]
/** Key: path, Value: display name */
const menuKeyToLabel: Record<string, string> = MENU_ITEMS.reduce((map, obj) => {
	map[obj.key] = obj.label
	return map
}, {})

const App = () => {
	const navigate = useNavigate()

	const { pathname } = useLocation()

	// Change title based on tab/page selected
	useEffect(() => {
		if (pathname in menuKeyToLabel) {
			document.title = `${menuKeyToLabel[pathname]} | bqrichards`
		} else {
			document.title = 'bqrichards'
		}
	}, [pathname])

	const onMenuClickHandler = useCallback<MenuClickEventHandler>(({ key }) => {
		navigate(key)
	}, [])

	// Setup hotkey for switching tabs
	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			if (e.key === '1') {
				navigate(HOME_PATH)
			} else if (e.key === '2') {
				navigate(PROJECTS_PATH)
			} else if (e.key === '3') {
				navigate(CYDIA_REPO_PATH)
			}
		}

		document.addEventListener('keypress', listener)

		return () => {
			document.removeEventListener('keypress', listener)
		}
	}, [])

	return (
		<div className={styles.container}>
			<nav>
				<Menu mode="horizontal" items={MENU_ITEMS} selectedKeys={[pathname]} onClick={onMenuClickHandler} />
			</nav>
			<Content className={styles.mainContent}>
				<Routes>
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={PROJECTS_PATH} element={<Projects />} />
					<Route path={CYDIA_REPO_PATH} element={<CydiaRepo />} />
				</Routes>
			</Content>
		</div>
	)
}

export default App
