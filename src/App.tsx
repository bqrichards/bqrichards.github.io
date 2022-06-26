import { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { PROJECTS_PATH, HOME_PATH } from './routes'
import { Menu, Layout } from 'antd'
import type { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { HomeOutlined, NodeExpandOutlined } from '@ant-design/icons'

import styles from './styles/App.module.scss'

import Home from './routes/home'
import Projects from './routes/projects'

const { Sider, Content } = Layout

const MENU_ITEMS = [
	{ label: 'Home', key: HOME_PATH, icon: <HomeOutlined /> },
	{ label: 'Projects', key: PROJECTS_PATH, icon: <NodeExpandOutlined /> },
]
/** Key: path, Value: display name */
const menuKeyToLabel: Record<string, string> = MENU_ITEMS.reduce((map, obj) => {
	map[obj.key] = obj.label
	return map
}, {})

const App = () => {
	const [collapsed, setCollapsed] = useState(false)
	const toggleCollapsed = useCallback(() => setCollapsed(prev => !prev), [])

	const navigate = useNavigate()

	const { pathname } = useLocation()

	const onMenuClickHandler = useCallback<MenuClickEventHandler>(({ key }) => {
		navigate(key)
	}, [])

	useEffect(() => {
		if (pathname in menuKeyToLabel) {
			document.title = `${menuKeyToLabel[pathname]} | bqrichards`
		} else {
			document.title = 'bqrichards'
		}
	}, [pathname])

	// Setup hotkey for collapsing Sider
	useEffect(() => {
		const listener = e => {
			if (e.key === '[') {
				toggleCollapsed()
			} else if (e.key === '1') {
				navigate(HOME_PATH)
			} else if (e.key === '2') {
				navigate(PROJECTS_PATH)
			}
		}

		document.addEventListener('keypress', listener)

		return () => {
			document.removeEventListener('keypress', listener)
		}
	}, [])

	return (
		<div className={styles.container}>
			<Sider className={styles.sider} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
				<div className={styles.siderMenuContainer}>
					<Menu
						mode="inline"
						className={styles.siderMenu}
						items={MENU_ITEMS}
						selectedKeys={[pathname]}
						onClick={onMenuClickHandler}
					/>
				</div>
			</Sider>
			<Content className={styles.mainContent}>
				<Routes>
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={PROJECTS_PATH} element={<Projects />} />
				</Routes>
			</Content>
		</div>
	)
}

export default App
