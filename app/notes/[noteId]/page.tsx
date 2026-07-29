import css from "@/app/notes/[noteId]/NoteDetails.module.css"
import { fetchNoteById } from "@/lib/api";


interface NoteDetailsProps{
    params: Promise <{noteId: string}>;
}

export default async function NoteDetails (props : NoteDetailsProps){
    const {noteId} = await props.params;
    const note = fetchNoteById(noteId);
    const date = new Date((await note).createdAt).toLocaleDateString();

    return(
        <main className={css.main}>	
	<div className={css.container}>
		<div className={css.item}>
		  <div className={css.header}>
		    <h2>{(await note).title}</h2>
		  </div>
		  <p className={css.tag}>{(await note).tag}</p>
		  <p className={css.content}>{(await note).content}</p>
		  <p className={css.date}>{date}</p>
		</div>
	</div>
</main>

    );
}