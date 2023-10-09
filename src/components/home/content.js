import { useEffect, useRef } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { SYS_ComponentList } from "src/constants/components"
import { addComponent, editComponentStyle } from 'src/store/features/editSlice';
import * as AllComponent from "src/components/common"
import Grid from "./grid"

export default function Content() {
    const dispatch = useDispatch()
    const editorRef = useRef()
    const { width, height } = useSelector(state => state.editReducer.edit)
    const { componentList } = useSelector(state => state.editReducer, shallowEqual)

    const handlerMouseDown = (e, idx) => {
        e.stopPropagation()
        e.preventDefault()
        const startY = e.clientY
        const startX = e.clientX
        const componentDOM = e.target.parentNode
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = componentDOM

        const move = (moveEvent) => {
            const moveX = moveEvent.clientX - startX
            const moveY = moveEvent.clientY - startY
            const left = offsetLeft + moveX
            const top = offsetTop + moveY

            boundaryEditor(idx, clientWidth, clientHeight, left, top)
        }

        const up = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', up)
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', up)
    }

    const handlerDrop = (e) => {
        const dropComponent = e.dataTransfer.getData('component').split("-")
        const category = dropComponent[0]
        const idx = dropComponent[1]
        const categoryList = SYS_ComponentList.find(item => item.id == category)
        if (!category || !idx || !categoryList) {
            return
        }
        let left = e.clientX - editorRef.current.offsetLeft - 220
        let top = e.clientY - editorRef.current.offsetTop - 64

        const style = {
            ...categoryList.list[idx].style,
            left: left + 'px',
            top: top + 'px'
        }

        const component = {
            ...categoryList.list[idx],
            style
        }
        dispatch(addComponent(component))
    }

    const calculateEdit = () => {
        const dynamicSize = {
            width: `${width + 1}px`,
            height: `${height + 1}px`
        };

        return (
            <div className="editor" style={dynamicSize} ref={editorRef}>
                <Grid />
                {componentList.map((item, idx) => {
                    const Component = AllComponent[item.type]
                    return (
                        <div
                            id={"C-" + idx}
                            className="editor-component"
                            data-type={item.type}
                            key={idx}
                            onMouseDown={(e) => handlerMouseDown(e, idx)}
                            style={item.style}
                        >
                            <Component {...item} />
                        </div>
                    )
                })}
            </div>
        )
    }

    const boundaryEditor = (idx, w, h, left, top) => {
        if (left < 0) {
            left = 0
        }

        if (top < 0) {
            top = 0
        }

        if (left + w > width) {
            left = width - w
        }

        if (top + h > height) {
            top = height - h
        }

        dispatch(editComponentStyle({
            idx,
            style: {
                left: left + 'px',
                top: top + 'px'
            }
        }))
    }

    useEffect(() => {
        if (componentList.length <= 0) {
            return
        }
        // calculate component boundary
        const componentId = `C-${componentList.length - 1}`
        const componentDOM = document.getElementById(componentId)
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = componentDOM
        let left = offsetLeft
        let top = offsetTop
        boundaryEditor(componentList.length - 1, clientWidth, clientHeight, left, top)
    }, [componentList.length])

    return (
        <div className="content" onDrop={(e) => handlerDrop(e)} onDragOver={e => e.preventDefault()}>
            {calculateEdit()}
        </div>
    )
}