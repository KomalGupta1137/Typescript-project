import './notes.css'

type NoteProps = {
    text: string,
    priority?: string | 'high' | 'medium' | 'low',
    id?:number
}
function Notes({id, text, priority }: NoteProps) {
    return (
        <>
            <div className={`container ${priority}`}>{text}</div>
        </>
    )
}

export default Notes;