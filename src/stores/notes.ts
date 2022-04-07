import { defineStore } from "pinia"
import { Notes, NoteFolder, Note } from "./types"
import { uuid } from 'vue-uuid'

export const useNotes = defineStore('notes', {
  state: () => ({
    notes: [] as Note[],
    noteFolders: [] as NoteFolder[],
  }),
  getters: {
    allNotes: (state) => state.notes as Note[],
    allFolders: (state) => state.noteFolders as NoteFolder[],
    noteById: (state) => (id: string) => state.notes.find(note => note.id === id) || null,
    notesByFolderId: (state) => {
      return (id: string) => state.notes.filter(note => note.folderId === id)
    },
    folderById: (state) => (id: string) => state.noteFolders.find(folder => folder.id === id) || null,
  },
  actions: {
    moveNoteToFolder(noteId: string, folderId: string) {
      const note = this.notes?.find(note => note.id === noteId)
      if (note) {
        note.folderId = folderId
      }
    },
    createNewFolder(folderName: string, folderId: string) {
      const id = folderId ?? uuid.v4()
      const folder: NoteFolder = {
        id,
        name: folderName,
        icon: 'folder',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      if (folder) {
        this.noteFolders.push(folder)
      }
    },
    deleteNote( noteId: string ) {
      const note = this.notes?.find(note => note.id === noteId)
      if (note) {
        this.notes.splice(this.notes.indexOf(note), 1)
      }
    },
    deleteFolder( folderId: string ) {
      const folder = this.noteFolders?.find(folder => folder.id === folderId)
      if (folder) {
        this.noteFolders.splice(this.noteFolders.indexOf(folder), 1)
      }
    },
    addNote( note: Note ) {
      if (note) {
        this.notes?.push(note)
      }
    },
    updateNote( noteId: string, notePayload: Note ) {
      const note = this.notes?.find(note => note.id === noteId)
      if (note) {
        Object.assign(note, notePayload)
      }
    },
    updateFolder( folderId: string, folderPayload: NoteFolder ) {
      const folder = this.noteFolders?.find(folder => folder.id === folderId)
      if (folder) {
        Object.assign(folder, folderPayload)
      }
    }
  },
})
