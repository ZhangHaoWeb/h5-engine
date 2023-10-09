import "./button.scss"

export default function Button(props) {
    const { defaultValue, style } = props

    return (
        <div className="c-button">{defaultValue}</div>
    )
}