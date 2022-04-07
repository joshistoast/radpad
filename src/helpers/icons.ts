
// Icons

interface Icon {
  name: string;
  path: string;
}

const icons: Icon[] = [
  {
    name: 'add',
    path: '<path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>'
  }
]

export const useIcon = (name: string) => {
  return icons.find(icon => icon.name === name) || icons[0]
}
