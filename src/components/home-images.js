import React, { useState, useEffect } from "react"
import foo1 from "../images/MenuItems/foo1.jpg"
import foo2 from "../images/MenuItems/foo2.jpg"
import foo3 from "../images/MenuItems/foo3.jpg"
import foo4 from "../images/MenuItems/foo4.jpg"
import foo5 from "../images/MenuItems/foo5.jpg"
import foo6 from "../images/MenuItems/foo6.jpg"

import "./layout.css"
const Image = () => {
    const fooStyle = {
        width: `100%`,
        maxWidth: `350px`,
        maxHeight: `350px`,
        padding: `15px 20px`,
        margin: `auto`,
        backgroundSize: `cover`,
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
                    <img className="foo3" style={fooStyle} src={foo3} alt="foo3" ></img>
                    <img className="foo4" style={fooStyle} src={foo4} alt="foo4" ></img>
                    <img className="foo5" style={fooStyle} src={foo5} alt="foo5" ></img>
                    <img className="foo6" style={fooStyle} src={foo6} alt="foo6" ></img>
                    <img className="foo1" style={fooStyle} src={foo1} alt="foo1" ></img>
                    <img className="foo2" style={fooStyle} src={foo2} alt="foo2" ></img>
                    <img className="foo3" style={fooStyle} src={foo3} alt="foo3" ></img>    
                    
                </>
            }

        </div>
    )

}

export default Image
