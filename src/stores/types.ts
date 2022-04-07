
// Theme
export interface Themes {
  themes: Theme[],
}

export interface Theme {
  id: string,
  name: string,
  canEdit: boolean,
  palette: {
    text: string,
    background: string,
    foreground: string,
    primary: string,
    secondary: string,
    accent: string,
    muted: string,
    elementBg: string,
    elementBgHover: string,
  }
}


// Icons
export interface Icons {
  icons: Icon[],
}

export interface Icon {
  name: string,
  icon: string,
}


// Search
export interface Search {
  query: string,
  results: SearchResults,
}

export interface SearchResults {
  allResults: SearchResult[],
  stories: SearchResult[],
  notes: SearchResult[],
  tasks: SearchResult[],
}

export interface SearchResult {
  isStory: boolean,
  isNote: boolean,
  isTask: boolean,
  result: string,
}


// Stories
export interface Story {
  id: string,
  title: string,
  coverUrl: string,
  chapters: Chapter[],
  createdAt: string,
  updatedAt: string,
  isFinished: boolean,
  chapterCount: number,
  wordCount: number,
  paragraphCount: number,
  stash: Stash[],
  loreBook: LoreBook,
}

export interface Chapter {
  id: string,
  title: string,
  chapterNumber: number,
  content: string,
  createdAt: string,
  updatedAt: string,
  chapterNotes: ChapterNote[],
  wordCount: number,
  paragraphCount: number,
  isFinished: boolean,
}

export interface ChapterNote {
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
}

export interface Stash {
  id: string,
  content: string,
}

export interface LoreBook {
  id: string,
  entries: LoreBookEntry[],
  categories: LoreBookCategory[],
}

export interface LoreBookEntry {
  id: string,
  name: string,
  categoryId: string,
  content: string,
  tags: string[],
}

export interface LoreBookCategory {
  id: string,
  name: string,
  entries: LoreBookEntry[],
}


// Notes
export interface Notes {
  notes?: Note[],
  noteFolders?: NoteFolder[],
}

export interface NoteFolder {
  id: string,
  name: string,
  icon: string,
  createdAt: string,
  updatedAt: string,
}

export interface Note {
  id: string,
  title: string,
  content: string,
  pinned?: boolean,
  locked?: boolean,
  createdAt: string,
  updatedAt: string,
  folderId?: string,
}


// Tasks
export interface Tasks {
  taskList: TaskList,
}

export interface TaskList {
  id: string,
  name: string,
  tasks: Task[],
  icon: Icon,
  createdAt: string,
  updatedAt: string,
  color: string,
}

export interface Task {
  id: string,
  name: string,
  description: string,
  completed: boolean,
  priority: number,
  url: string,
  dueDate: string,
  dueTime: string,
  tags: string[],
  createdAt: string,
  updatedAt: string,
}
