import React, { useState } from 'react'
import './text.css'


function Textconv() {

    const [text, setText] = useState('');

    function uppercase() {
        let uptext = text.toUpperCase();
        setText(uptext)
    }

    function lowercase() {
        let lwtext = text.toLowerCase();
        setText(lwtext)
    }


    function handleOnChange(event) {
        setText(event.target.value)
    }

    function cleartext() {
        let clrtext = ''
        setText(clrtext)
    }



    function textcopy() {
        var text = document.getElementById("Two");
        text.select()
        navigator.clipboard.writeText(text.value);
    }

    function extraspace() {

        let wtsptext = text.split(/[ ]+/);
        setText(wtsptext.join(" "))

    }
    
// const tl=text.length
// console.log(tl)


    return (

        <div className='mainbox'>
            <div className='box'>
                <h1> Analyse Box </h1>
                <textarea className='textin' value={text} onChange={handleOnChange} id="Two" ></textarea>
                <div className='textbtn'>
                    <button onClick={uppercase}>Upper Case</button>
                    <button onClick={lowercase}>Lower Case</button>
                    <button onClick={textcopy}>Copy</button>
                    <button onClick={cleartext}>Clear</button>
                    <button onClick={extraspace}>remove extra space</button>
                </div>
            </div>
            <div className='summ'>
                <h1>Your Text Summary</h1>
                <p>
                    no of words is {text.split(" ").length} and length of text is {text.length}
                </p>
                <p>
                    Time taken to read this text is {0.008 * text.split(" ").length} minutes
                </p>
                <h1>
                    preview
                </h1>
                <p className='textpvr'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Textconv;
