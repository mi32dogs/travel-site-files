import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

// react related code goes here
import React from 'react'
import ReactDOM from 'react-dom'

function MyAmzingComponent() {
  return (
    <div>
      <h1>this is React</h1>
      <p>React is great</p>
    </div>
  )
}

ReactDOM.render(<MyAmzingComponent />, document.querySelector('#my-react-example'))

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)
let mobileMenu = new MobileMenu()
let stickyHeader = new StickyHeader()
let modal

document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "modal"  */ './modules/Modal')
        .then(x => {
          modal = new x.default()
        })
        .catch(() => console.log('error'))
      setTimeout(() => modal.openTheModal(), 20)
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}
