import React from 'react'
import Page from './Page'
import Header from './Header'
function App() {

    return (
        <>
            <Header title="My Title" >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </Header>
            <Page />
        </>
    )
}



export default App