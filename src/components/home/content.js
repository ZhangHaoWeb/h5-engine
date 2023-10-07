import { useCallback } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { SYS_ComponentList } from "src/constants/components"
import { addComponent } from 'src/store/features/editSlice';    
import Grid from "./grid"

export default function Content() {
    const dispatch = useDispatch()
    const { width, height } = useSelector(state => state.editReducer.edit)
    const { componentList } = useSelector(state => state.editReducer, shallowEqual)

    const calculateEdit = useCallback(() => {
        const dynamicSize = {
            width: `${width + 1}px`,
            height: `${height + 1}px`
        };

        return (
            <div className="editor" style={dynamicSize}>
                <Grid />
                {componentList.map(item => {
                    return <div className="editor-item" style={item.style}>{item.defaultValue}</div>
                })}
            </div>
        )
    }, [width, height, componentList])

    const handlerDrop = (e) => {
        const dropComponent = e.dataTransfer.getData('component').split("-")
        const category = dropComponent[0]
        const idx = dropComponent[1]
        const categoryList = SYS_ComponentList.find(item => item.id == category)
        const x = e.clientX - 220
        const y = e.clientY - 64
        const style = {
            ...categoryList.list[idx].style,
            left: x + 'px',
            top: y + 'px'
        }

        const component = {
            ...categoryList.list[idx],
            style
        }
        console.log(component)
        dispatch(addComponent(component))
    }

    return (
        <div className="content" onDrop={(e) => handlerDrop(e)} onDragOver={e => e.preventDefault()}>
            {calculateEdit()}
        </div>
    )
}