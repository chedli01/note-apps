import { useState } from "react";
import Note from "../components/ui/note";

type Note = {
    id: string,
    title : string,
}

export default function Notes() {
    const [notes,setNotes] = useState<Array<Note>>([{id:"1",title:"note monday"},{id:"2",title:"note tuesday"}])
    return (
        <div className="w-screen h-screen  flex items-center justify-center">
            <div className="w-1/2 h-1/2 ">
            {notes.map((element)=>{return <Note key={element.id} title={element.title}/> })}
                
            </div>
        </div>
    )
}