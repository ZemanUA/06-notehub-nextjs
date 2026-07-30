import css from "@/app/notes/[noteId]/NoteDetails.module.css"
import { fetchNoteById } from "@/lib/api";


interface NoteDetailsProps{
    params: Promise <{noteId: string}>;
}

export default async function NoteDetails (props : NoteDetailsProps){
    const {noteId} = await props.params;
    const note = await fetchNoteById(noteId);
    const date = new Date(note.createdAt).toLocaleDateString();

    return(
        <main className={css.main}>	
	<div className={css.container}>
		<div className={css.item}>
		  <div className={css.header}>
		    <h2>{note.title}</h2>
		  </div>
		  <p className={css.tag}>{note.tag}</p>
		  <p className={css.content}>{note.content}</p>
		  <p className={css.date}>{date}</p>
		</div>
	</div>
</main>

    );
}