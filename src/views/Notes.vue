<script setup lang="ts">
import { useNotes } from '../stores/notes';
import { computed, ref } from 'vue'
import { Notes, Note, NoteFolder } from '../stores/types'
import { uuid } from 'vue-uuid'
import RadSidebar from '../components/radSidebar.vue'
import NoteEditor from '../components/Notes/Editor.vue'
import Menu from '../components/UI/Menu.vue'
import MenuItem from '../components/UI/MenuItem.vue'
import { Icon } from '@iconify/vue'

const noteStore = useNotes()

const allNotes = computed(() => noteStore.allNotes)
const allFolders = computed(() => noteStore.allFolders)

// Refs
const currentNote = ref<Note | null>(null)
const currentFolder = ref<NoteFolder | null>(null)

const currentFolderNotes = computed<Note[]>(() => currentFolder.value ? noteStore.notesByFolderId(currentFolder.value.id) : [])
const today = new Date().toISOString()

const pushNote = (note: Note) => {
  noteStore.addNote(note)
}
const openNote = (id: string) => {
  currentNote.value = noteStore.noteById(id)
}
const openFolder = (id: string) => {
  currentFolder.value = noteStore.folderById(id)
}
const closeFolder = () => {
  currentFolder.value = null
}
const createNote = () => {
  const id = uuid.v4()
  noteStore.addNote({
    id,
    title: 'New Note',
    content: 'Start Writing...',
    pinned: false,
    locked: false,
    createdAt: today,
    updatedAt: today,
    folderId: '',
  })
  currentNote.value = noteStore.noteById(id)
}
const folderById = (id: string) => {
  return noteStore.folderById(id)
}
const updateCurrentNote = () => {
  if (currentNote.value) {
    noteStore.updateNote(currentNote.value.id, {
      ...currentNote.value,
      updatedAt: today
    })
  }
}
const updateCurrentFolder = () => {
  if (currentFolder.value) {
    noteStore.updateFolder(currentFolder.value.id, {
      ...currentFolder.value,
      updatedAt: today
    })
  }
}
const deleteCurrentNote = () => {
  if (window.confirm('Are you sure you want to delete this note?') && currentNote.value) {
    noteStore.deleteNote(currentNote.value.id)
    currentNote.value = null
  }
}
const deleteCurrentFolder = () => {
  if (window.confirm('Are you sure you want to delete this folder?') && currentFolder.value) {
    noteStore.deleteFolder(currentFolder.value.id)
    currentFolder.value = null
  }
}
const createFolder = () => {
  const id = uuid.v4()
  noteStore.createNewFolder('New Folder', id)
  currentFolder.value = noteStore.folderById(id)
}
const assignToFolder = (noteId: string, folderId: string) => {
  noteStore.moveNoteToFolder(noteId, folderId)
}

</script>

<template>
  <div class="notes-layout">
    <RadSidebar>
      <template #sup>
        <template v-if="currentFolder" @click="closeFolder">
          <span class="flex flex-row items-center" @click="closeFolder"><Icon icon="ri:arrow-left-s-line" /> Folders</span>
        </template>
        <template v-else>
          <span>Notes</span>
        </template>
      </template>

      <template #title>
        <template v-if="currentFolder">{{ currentFolder.name }}</template>
        <template v-else>Folders</template>
      </template>

      <div v-if="!currentFolder">
        <Menu>
          <MenuItem
            v-for="folder in allFolders"
            :label="folder.name" @click="openFolder(folder.id)"
            icon="ri:folder-line"
          />
        </Menu>
      </div>
      <div v-else>
        <Menu v-if="currentFolderNotes.length">
          <MenuItem
            v-for="note in currentFolderNotes"
            :label="note.title" @click="openNote(note.id)"
            :active="note.id === currentNote?.id"
          />
        </Menu>
        <div v-else>
          <span class="opacity-50">Folder is Empty</span>
        </div>
      </div>

    </RadSidebar>

    <div class="notes-layout__editor">
      <NoteEditor v-if="currentNote" :note-id="currentNote.id" />
    </div>

    <RadSidebar>
      <Menu>
        <MenuItem label="Change Icon" />
      </Menu>
    </RadSidebar>
  </div>
</template>

<style lang="postcss" scoped>

.notes-layout {
  @apply flex flex-row min-h-screen;
}
.notes-layout__editor {
  @apply flex-1
}

</style>
