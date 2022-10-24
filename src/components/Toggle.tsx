import { JSXElement } from 'solid-js'
import { Show, showSignal } from './showSignal'
import './Toggle.css'

export default function Toggle(props: {
  show: Show
  children: any
}): JSXElement {
  const [show, setShow] = showSignal

  return (
    <>
      {props.show === show() ? (
        <>
          <button
            onClick={() => {
              setShow(show() === 'cards' ? 'readme' : 'cards')
            }}
          >
            {show() ? 'Show GitHub README' : 'Show link cards'}
          </button>
          {props.children}
        </>
      ) : null}
    </>
  )
}
