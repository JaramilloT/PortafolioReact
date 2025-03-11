
import { Routes, Route } from 'react-router-dom'
import { Container } from './Container/Container'
import { Header } from './Components/Layouts/Header/Header'
import { Home } from './Components/Pages/Home/Home'

import { Skills } from './Components/Pages/Skills/Skills'

export const App = () => {
  return (
    <>
       <Header />       
          <Container>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Skills' element={<Skills />}/>
              </Routes>
          </Container>
    </>
  )
}
