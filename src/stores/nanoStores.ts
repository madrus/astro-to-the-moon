import { atom } from 'nanostores'

export type Show = 'cards' | 'marked' | 'markdown'

export const store = atom<Show>('cards')
