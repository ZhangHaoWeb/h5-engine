import Header from "../components/home/header"
import SideBar from "../components/home/sidebar"
import Property from "../components/home/property"

export default function Home() {
    return (
        <>
            <Header />
            <SideBar />
            <Property />
            <div className="test">home page</div>
        </>
    )
}