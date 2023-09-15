export default function Grid() {
    return (
        <svg
            className="grid"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern
                    id="smallGrid"
                    width="7.5"
                    height="7.5"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M 7.5 0 L 0 0 0 7.5"
                        fill="none"
                        stroke="rgba(207, 207, 207, 0.3)"
                        strokeWidth="1"
                    >
                    </path>
                </pattern>
                <pattern
                    id="grid"
                    width="37.5"
                    height="37.5"
                    patternUnits="userSpaceOnUse"
                >
                    <rect width="37.5" height="37.5" fill="url(#smallGrid)"></rect>
                    <path
                        d="M 37.5 0 L 0 0 0 37.5"
                        fill="none"
                        stroke="rgba(186, 186, 186, 0.5)"
                        strokeWidth="1"
                    >
                    </path>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
    )
}