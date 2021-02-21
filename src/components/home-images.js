import React, { useState, useEffect } from "react"
import foo1 from "../images/MenuItems/foo1.jpg"
import foo2 from "../images/MenuItems/foo2.jpg"
import foo3 from "../images/MenuItems/foo3.jpg"
import "./layout.css"
const Image = () => {
    const fooStyle = {
        width: `100%`,
        maxWidth: `350px`,
        padding: `15px 20px`,
        margin: `auto`,
        // transform: `translate3d(10px)`,
        animation: `fadeLeft .6s ease-in-out 1s`
    }
    const [scrollPosition, setScrollPosition] = useState(0)
    const [valid, setValid] = useState(false)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        if (scrollPosition >= 300)
            setValid(true)

        if (scrollPosition < 300)
            setValid(false)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPosition])

    return (
        <div className="featureImages" style={{ width: `100%`, display: `grid`, animation:`fadeLeft 1.6s ease-in-out`, height:`auto`, gridTemplateColumns:`1fr 1fr 1fr` }}>
            {
                (valid) &&
                <> <img className="foo1" style={fooStyle} src={foo1} alt="foo1" ></img>
                    <img className="foo2" style={fooStyle} src={foo2} alt="foo2" ></img>
                    <img className="foo3" style={fooStyle} src={foo3} alt="foo3" ></img></>
            }

        </div>
    )

}

export default Image
