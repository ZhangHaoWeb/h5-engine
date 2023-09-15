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
            </div>
        )
    }, [width, height])

    return (
        <div className="content">
            {calculateEdit()}
        </div>
    )
}