import { useDispatch, useSelector } from "react-redux"
import { changeCurrentComponent } from "src/store/features/editSlice"
import classNames from 'classnames';
import "./shape.scss"

export default function Shape({ children, dropStyle, componentMouseDown, idx, id }) {
    const { currentComponent } = useSelector(state => state.editReducer)
    const pointList = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb']

    const selectedClass = classNames('shape-container', {
        'component-selected': currentComponent == idx
    })

    const getShapeResizePointStyle = (point) => {
        const width = parseInt(dropStyle.width, 10)
        const height = parseInt(dropStyle.height, 10)

        const hasT = /t/.test(point)
        const hasB = /b/.test(point)
        const hasL = /l/.test(point)
        const hasR = /r/.test(point)
        let newLeft = 0
        let newTop = 0

        if (point.length === 2) {
            newLeft = hasL ? 0 : width
            newTop = hasT ? 0 : height
        } else {
            // 上下两点的点，宽度居中
            if (hasT || hasB) {
                newLeft = width / 2
                newTop = hasT ? 0 : height
            }

            // 左右两边的点，高度居中
            if (hasL || hasR) {
                newLeft = hasL ? 0 : width
                newTop = Math.floor(height / 2)
            }
        }

        const style = {
            marginLeft: hasR ? '-5px' : '-4px',
            marginTop: '-5px',
            left: `${newLeft}px`,
            top: `${newTop}px`,
            // cursor: point.split('').reverse().map(m => this.directionKey[m]).join('') + '-resize',
        }

        return style
    }

    return (
        <div
            id={id}
            className={selectedClass}
            style={dropStyle}
            onMouseDown={(e) => componentMouseDown(e, idx)}
        >
            {children}
            <div className="shape-editor">
                {idx == currentComponent &&
                    pointList.map((item, idx) => {
                        return (
                            <div className="shape-resize-point" key={idx} dc={item} style={getShapeResizePointStyle(item)}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}