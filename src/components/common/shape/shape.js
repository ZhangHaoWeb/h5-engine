import { useDispatch, useSelector } from "react-redux"
import { changeCurrentComponent } from "src/store/features/editSlice"
import classNames from 'classnames';
import "./shape.scss"

export default function Shape({ children, dropStyle, componentMouseDown, idx, id }) {
    const { currentComponent } = useSelector(state => state.editReducer)
    const dispatch = useDispatch()

    const selectCurComponent = (idx) => {
        if (currentComponent == idx) return
        dispatch(changeCurrentComponent(idx))
    }

    const selectedClass = classNames('shape-container', {
        'component-selected': currentComponent == idx
    })

    return (
        <div
            id={id}
            className={selectedClass}
            style={dropStyle}
            onMouseDown={(e) => componentMouseDown(e, idx)}
            onClick={() => selectCurComponent(idx)}
        >
            {children}
            <div className="shape-editor">

            </div>
        </div>
    )
}