import { useEffect, useRef, useState } from "react";
import "./Calculator.css"
import Draggable from "react-draggable";

const Calculator = () => {
    // state management
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    // references
    const ref = useRef()

    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position])

    // Update the current position if mouse is down
    const onMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }

    const onBtnClick = (value) => {
        setInput(input + value, toString())
    }

    useEffect(() => {
        //Make the DIV element draggagle:


    }, [])

    return (
        <Draggable handle=".display">
            <div
                id="calculator"
                onMouseMove={onMouseMove}
                onMouseDown={() => setPressed(true)}
                onMouseUp={() => setPressed(false)}
                className="calculator-container">
                <div id="display" className="display">
                    <div className="input">
                        {input}
                    </div>
                    <div id="result" className="result">
                        {result}
                    </div>
                </div>
                <div className="btn clear" onClick={() => setInput("")}>C</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>*</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>9</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>8</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>7</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>/</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>6</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>5</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>4</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>+</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>3</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>2</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>1</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>-</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>0</div>
                <div className="btn" onClick={(e) => onBtnClick(e.target.innerText)}>.</div>
                <div className="btn calculate" onClick={() => setResult(eval(input))}>=</div>
            </div>
        </Draggable>
    )
}

export default Calculator;