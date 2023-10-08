export default function Link(props) {
    const { defaultValue } = props

    return (
        <div contentEditable={true} suppressContentEditableWarning={true}>{defaultValue}</div>
    )
}