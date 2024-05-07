import { useState } from "react"

function Expandable ( {children }) {
const [isShowing, setIsShowing] = useState(false)

const handleClick = () => {
    setIsShowing(!isShowing)
}

    return <>
    <button onClick={handleClick}>{isShowing ? "Hide" : "Show"} comments</button>
    {isShowing && children}
    </>
}

export default Expandable