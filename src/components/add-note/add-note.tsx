import { useState } from 'react'
import './add-note.css'
import { NoteType } from '../notes/note-type'
import { uuid } from 'uuidv4';

type AddNoteProps = {
    functionProperty: (note: NoteType) => void
}

export function AddNote(allProperty: AddNoteProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    console.log("allProperty", allProperty)

    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        allProperty.functionProperty({
            text,
            priority: 'low'
        })
    }
    const [text, setText] = useState('')
    return (
        <>
            <div>
                <form className='form-style'>
                    <input type="text" value={text} onChange={handleChange} />
                    <button className='button-style' onClick={e=>handleClick(e)}>Add</button>

                </form>

            </div>

        </>
    )
}