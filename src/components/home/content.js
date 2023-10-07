import { useSelector } from "react-redux"
import Grid from "./grid"
import { useCallback } from "react"

export default function Content() {
    const { width, height } = useSelector(state => state.editReducer.edit)

    const calculateEdit = useCallback(() => {
        const dynamicSize = {
            width: `${width + 1}px`,
            height: `${height + 1}px`
        };

        return (
            <div className="editor" style={dynamicSize}>
                <Grid />
                <div className="editor-item">fdsafdsaf</div>
            </div>
        )
    }, [width, height])

    const handlerDrop = (e) => {
        const component = e.dataTransfer.getData('component')
        console.log(component)
    }

    return (
        <div className="content" onDrop={(e) => handlerDrop(e)} onDragOver={e => e.preventDefault()}>
            {calculateEdit()}
        </div>
    )
}