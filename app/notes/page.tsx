import css from './App.module.css';
import NotesClient from './Notes.client';

export default function App() {

  return (
    <>
      <div className={css.app}>
      <NotesClient/>
      </div>
    </>
  );
}
