import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
  reactElement
    // <App />
    // {/* {anotherElement}
    // <MyApp /> */}
  
)








// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'


// function App(){
//   return (
//     <div>
//       <h1>Custom App  !</h1>
//     </div>
//   )
// }

// // const reactElement = {
// //     type: 'a',
// //     props: {
// //         href: 'https://google.com',
// //         target: '_blank'
// //     },
// //     children: 'Click me to visit google'
// // }


// const anotherElement = (
//   <a href="https://google.com" target='_blank'>visit Google</a>
// )

// const reactElement = React.createElement (
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'click me to visit google'

// )

// ReactDOM.createRoot(document.getElementById('root')).render(
 
//   <App />
//   // <StrictMode>
//   //   anotherElement
//   //  {/* <MyApp/> */}
//   // </StrictMode>,
// )
