import './image.scss';

export default function Image(props) {
    const { src } = props

    return (
        <img className="c-image" src={src} />
    )
}