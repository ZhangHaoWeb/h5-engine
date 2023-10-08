import { Fragment, useCallback } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { SYS_ComponentList } from "src/constants/components"
import { addComponent, editComponentStyle } from 'src/store/features/editSlice';
import * as AllComponent from "src/components/common"
import Grid from "./grid"

export default function Content() {
    const dispatch = useDispatch()
    const { width, height } = useSelector(state => state.editReducer.edit)
    const { componentList } = useSelector(state => state.editReducer, shallowEqual)

    const handlerMouseDown = (e, idx) => {
        const startY = e.clientY
        const startX = e.clientX
        const curComponent = componentList[idx]
        const curStyle = curComponent.style
        const curLeft = parseInt(curStyle.left)
        const curTop = parseInt(curStyle.top)

        const move = (moveEvent) => {
            const moveX = moveEvent.clientX - startX
            const moveY = moveEvent.clientY - startY
            
            dispatch(editComponentStyle({
                idx,
                style: {
                    left: curLeft + moveX + 'px',
                    top:  curTop + moveY + 'px'
                }
            }))
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
        dispatch(addComponent(component))
    }


    const calculateEdit = () => {
        const dynamicSize = {
            width: `${width + 1}px`,
            height: `${height + 1}px`
        };

        return (
            <div className="editor" style={dynamicSize}>
                <Grid />
                {componentList.map((item, idx) => {
                    const Component = AllComponent[item.type]
                    return (
                        <div 
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

    return (
        <div className="content" onDrop={(e) => handlerDrop(e)} onDragOver={e => e.preventDefault()}>
            {calculateEdit()}
        </div>
    )
}