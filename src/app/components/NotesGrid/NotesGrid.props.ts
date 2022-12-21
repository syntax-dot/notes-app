import { Note } from '../../types/Note'

export interface NotesGridProps {
  notes: Note[]
}

export interface NotesGridEmits {
  (emit: 'remove', id: number): void
}
