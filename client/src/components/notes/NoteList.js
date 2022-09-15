import NoteShow from './NoteShow';

const NoteList = ({ notes, updateNote }) => (
  <>
    { notes.map( n => 
      <NoteShow
        key={n.id}
        {...n}
        updateNote={updateNote}
      />
    )}
  </>
)

export default NoteList;