import { useState } from "react"

export default function Text(props) {
    const { defaultValue } = props

    return (
        <div
            contentEditable={true}
            suppressContentEditableWarning={true}
        >
            {defaultValue}
        </div>
    )
}