export default function Image(props) {
    const { src, style } = props

    return (
        <img src={src} style={style} />
    )
}