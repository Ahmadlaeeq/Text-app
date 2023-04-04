import { useState } from "react";

function Textbox() {
    let [text, setText] = useState("");
    const toUpCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const textData = (event) => {
        setText(event.target.value)
    }
    const toLoCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handlSentence = () => {
        let newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newtext);
    }
    const handlTitlecase = () => {
        let newtext = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newtext);
    }
    const handlCleartxt = () => {
        let newtext = ("");
        setText(newtext);
    }
    return (
        <>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Analyse text here</label>
                <textarea className="form-control" onChange={textData} value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
                <button className="btn btn-primary my-2" onClick={toUpCase}>Upper Case</button>
                <button className="btn btn-primary my-2 mx-3" onClick={toLoCase}>Lower Case</button>
                <button className="btn btn-primary my-2 mx-3" onClick={handlSentence}>Sentence Case</button>
                <button className="btn btn-primary my-2 mx-3" onClick={handlTitlecase}>Title Case</button>
                <button className="btn btn-primary my-2 mx-3" onClick={handlCleartxt}>Clear Text</button>
            </div>
            <div className="container">
                <h3>Text Summary</h3>
                <p>Words:{" "}{text.split(" ").length - 1} {" "} Characters: {" "} {text.length}</p>
                <p>Reading Minutes: {(text.split(" ").length * 0.008)}</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
export default Textbox;