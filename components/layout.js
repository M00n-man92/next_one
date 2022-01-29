import Footer from "./footer/Footer"
import Home from "./home/Home"
import Topbar from "./topbar/Topbar"
const Layout=({children})=>{
return (<>
    <Topbar/>
    {children}
    <Footer/>
    </>)
}
export default Layout