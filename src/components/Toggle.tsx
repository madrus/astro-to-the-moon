import { createEffect, JSXElement } from 'solid-js'
import type { Show } from './showSignal'
import { showSignal } from './showSignal'
import './Toggle.css'

export default function Toggle(props: {
  show: Show
  children: any
}): JSXElement {
  const [show, setShow] = showSignal

  let showChildren = props.show === show()

  createEffect(() => (showChildren = props.show === show()))

  return (
    <>
      {props.show === show() && (
        <button
          onClick={() => {
            setShow(props.show === 'cards' ? 'readme' : 'cards')
          }}
        >
          {show() ? 'Show GitHub README' : 'Show link cards'}
        </button>
      )}
      {showChildren && props.children}
    </>
  )
}
