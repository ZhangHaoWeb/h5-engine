import { SYS_ComponentList } from "src/constants/components"

export default function SideBar() {
    const handlerDragStart = (e, id, idx) => {
        e.dataTransfer.setData('component', `${id}-${idx}`)
    }

    return (
        <div className="sidebar">
            <div className="sidebar-category">
                {SYS_ComponentList.map((category, index) => (
                   <div key={index} className="sidebar-category-box">
                        <div className="sidebar-category-title">{category.category}</div>
                        <ul className="components-list">
                            {category.list.map((item, index) => (
                                <li className="component-item" draggable key={index} onDragStart={(e) => handlerDragStart(e, category.id, index)}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                   </div>
                ))}
            </div>

        </div>
    )
}