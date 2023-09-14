
export default function Header() {
    return (
        <div className="header">
            <div className="size-controller mr-8" >
                <div className="ml-8">画布宽</div>
                <div><input type="text" /></div>
                <div className="ml-8">画布高</div>
                <div><input type="text" /></div>
            </div>
            <button className="ml-8">预览</button>
            <button className="ml-8">保存</button>
        </div>
    )
}