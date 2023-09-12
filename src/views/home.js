import Header from "src/components/home/header"
import SideBar from "src/components/home/sidebar"
import Property from "src/components/home/property"
import Content from "src/components/home/content"
import "src/sass/home.scss"

export default function Home() {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <SideBar />
                <Content />
                <Property />
            </div>
        </>
    )
}