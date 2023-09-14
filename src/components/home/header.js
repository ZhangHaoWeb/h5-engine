import { useDispatch } from "react-redux"
import { changeEditSize } from "src/store/features/editSlice"

export default function Header() {
    const dispatch = useDispatch()

    const changeWidth = (e) => {
        dispatch(changeEditSize({
            width: e.target.value
        }))
    }

    const changeHeight = (e) => {
        dispatch(changeEditSize({
            height: e.target.value
        }))
    }

    return (
        <div className="header">
            <div className="size-controller mr-8" >
                <div className="ml-8">画布宽</div>
                <div><input type="text" onChange={changeWidth}/></div>
                <div className="ml-8">画布高</div>
                <div><input type="text"  onChange={changeHeight}/></div>
            </div>
            <button className="ml-8">预览</button>
            <button className="ml-8">保存</button>
        </div>
    )
}