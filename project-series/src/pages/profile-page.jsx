import { useState } from 'react'
import './App.css'

import header from "./Header"
import Form from "./Form"
import Output from "./Output"

export default function App() {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [fact, setFact] = useState("");

  const [showOutput, setShowOutput] = useState(false);

  return (
    <div>
      <Header/>
      <Form
				photo={photo} setPhoto={setPhoto}
				name={name} setName={setName}
				title={title} setTitle={setTitle}
				fact={fact} setFact={setFact}
				showOutput={showOutput} setShowOutput={setShowOutput}
			/>
      <Output photo={photo} name={name} title={title} fact={fact} />
      
    </div>
  )
}