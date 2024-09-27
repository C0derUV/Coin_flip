
import { Outlet } from 'react-router-dom'
import PagesIndex from '../../PagesIndex';


const Layout = () => {
  return (
    <>
      <PagesIndex.Header />
      <Outlet />
      <PagesIndex.Footer />
    </>
  )
}

export default Layout;