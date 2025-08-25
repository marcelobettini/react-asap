import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router"
import './MainLayout.css'
function MainLayout() {
    return (
        <div className="layout-container">
            <Header />
            <Outlet />
            <Footer />

        </div>
    )
}
export default MainLayout