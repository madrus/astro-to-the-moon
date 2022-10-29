import { atom } from 'nanostores'

export type Show = 'cards' | 'readme'

export const store = atom<Show>('cards')
