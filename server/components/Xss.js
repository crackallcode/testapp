import React, { useState } from "react";
import DOMPurify from 'dompurify';




function Xss(){

    const [text, setText] = useState("");
    const [script, setScript] =useState("");
    const [imgg, setimgg] = useState("");
    const [userInput, setInput] = useState("");
    const [pure, setPure] = useState("");

    return(
        <div className="xss">

        <h1 className="" dangerouslySetInnerHTML={{__html: text}}/>Type your Script    <br></br>
        <input value={text} onChange={e => setText(e.target.value.replace("", ""))} />

        <h1 dangerouslySetInnerHTML={{__html: imgg}}/>Type your Script img has been blacklisted   <br></br>
        <input value={imgg} onChange={e => setimgg(e.target.value.replace("img", ""))} />

        <h1 dangerouslySetInnerHTML={{__html: script}}/>Use a button to cauase XSS  <br></br>
        <input value={script} onChange={e => setScript(e.target.value.replace("script", ""))} />

        <h1 dangerouslySetInnerHTML={{ __html: pure }} />Banned Charactors<br></br>
        <input value={pure} onChange={e => setPure(e.target.value.replace(/[#_/]/g, ""))} />

        <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />Sanatized with DOMPurify default settings<br></br>
        <input value={userInput} onChange={e => setInput(e.target.value.replace())} />
        </div>

    )}

    export default Xss