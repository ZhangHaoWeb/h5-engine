

export default function SideBar() {
    const componentList = new Array(5).fill(0)

    const handlerDragStart = (e, index) => {
        e.dataTransfer.setData('index', index)
    }

    return (
        <div className="sidebar">
            <ul className="components-list">
                {componentList.map((item, index) => (
                    <li className="component-item" draggable key={index} onDragStart={(e) => handlerDragStart(e, index)}>
                        TEXT
                    </li>
                ))}
            </ul>
        </div>
    )
}