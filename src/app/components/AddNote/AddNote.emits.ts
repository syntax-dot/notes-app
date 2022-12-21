import { Note } from '../../types/Note'

export interface AddNoteEmits {
  (emit: 'update', value: Note): void
}
