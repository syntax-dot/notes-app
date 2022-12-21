import { Note } from '../../types/Note'

export interface NotesGridProps {
  notes: Note[]
}

export interface NotesGridEmits {
  (emit: 'update', note: Note): void
}
