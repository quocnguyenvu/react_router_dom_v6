import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <header>header</header>
            <div>
                <Outlet/>
            </div>
            <footer>footer</footer>
        </div>
    )
}

export default Dashboard