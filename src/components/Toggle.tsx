import type { JSXElement } from 'solid-js'
import { useStore } from '@nanostores/solid'

import { store } from '../stores/nanoStores'
import type { Show } from '../stores/nanoStores'
import './Toggle.css'

type ToggleProps = {
  showParam: Show
  children: any
}

export const Toggle = ({ showParam, children }: ToggleProps): JSXElement => {
  const what2show = useStore(store)

  const toggleShowInState = () => {
    switch (what2show()) {
      case 'cards':
        store.set('readme')
        break
      case 'readme':
        store.set('cards')
        break
    }
  }

  console.log('showParam:', showParam)
  console.log('what2show:', what2show())

  const doShowsMatch = () => showParam === what2show()

  console.log('doShowsMatch:', doShowsMatch())

  return (
    <>
      {doShowsMatch() ? (
        <>
          <button
            onClick={() => {
              toggleShowInState()
            }}
          >
            {what2show() === 'cards' ? 'Show GitHub README' : 'Show link cards'}
          </button>
          {showParam === what2show() ? <>{children}</> : null}
        </>
      ) : null}
    </>
  )
}
