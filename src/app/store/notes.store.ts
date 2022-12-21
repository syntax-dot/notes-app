import { Note } from '../types/Note'

export class NotesStore {
  static readonly Note_LS_KEY = 'Note'

  save(notes: Note[]) {
    localStorage.setItem(NotesStore.Note_LS_KEY, JSON.stringify(notes))
  }

  load(): Note[] {
    const notes = localStorage.getItem(NotesStore.Note_LS_KEY)
    if (!notes)
      return []

    return JSON.parse(notes)
  }
}
