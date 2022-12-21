import { Note } from '../types/Note'

export class NotesStore {
  static readonly NOTE_LS_KEY = 'Note'
  static readonly ID_LS_KEY = 'Id'

  generateId() {
    const lastId = localStorage.getItem(NotesStore.ID_LS_KEY) ?? '4' // Последний ID будет равен 4
    const id = +lastId + 1

    localStorage.setItem(NotesStore.ID_LS_KEY, `${id}`)

    return id
  }

  save(notes: Note[]) {
    localStorage.setItem(NotesStore.NOTE_LS_KEY, JSON.stringify(notes))
  }

  load(): Note[] {
    const notes = localStorage.getItem(NotesStore.NOTE_LS_KEY)
    if (!notes)
      return []

    return JSON.parse(notes)
  }
}

export const noteStore = new NotesStore()
