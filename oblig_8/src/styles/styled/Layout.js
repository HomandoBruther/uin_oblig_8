import { Outlet } from 'react-router-dom'
import StyleMain from './styleMain'

const Layout = () => {
  return (
    <StyleMain>
      <Outlet />
    </StyleMain>
  )
}

export default Layout
