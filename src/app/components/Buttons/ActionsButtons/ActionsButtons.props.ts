import { Note } from '../../../types/Note'
export interface ActionsButtonsProps {
  note: Note
}

export interface ActionsButtonsEmits {
  (emit: 'remove', id: number): void
  (emit: 'open'): void
}
