import { Outlet } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <header>
                home header
            </header>

            <Outlet/>

            <footer>
                footer
            </footer>
        </div>
    )
}

export default HomePage