import css from "@/app/notes/[id]/NoteDetails.module.css"
import { fetchNoteById } from "@/lib/api";


interface NoteDetailsProps{
    params: Promise <{id: string}>;
}

export default async function NoteDetails (props : NoteDetailsProps){
    const {id} = await props.params;
    const note = await fetchNoteById(id);
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