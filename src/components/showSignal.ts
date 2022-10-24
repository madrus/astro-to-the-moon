import { createSignal } from 'solid-js'

export type Show = 'cards' | 'readme'

export const showSignal = createSignal<Show>('cards')
