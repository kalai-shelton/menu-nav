import '../styles/globals.css'
import menuItems from '../components/NavBar/data/menu_data'
import { Menu_web } from '../components/NavBar/components/Menu_web'
function MyApp({ Component, pageProps }) {
  return(
  <> 
  
      <Menu_web menuItems={menuItems}/>
 
      <Component {...pageProps} />
    
  </>
  )
}

export default MyApp
