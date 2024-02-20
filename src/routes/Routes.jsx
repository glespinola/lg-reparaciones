import {BrowserRouter, Routes as ReactRoutes, Route} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import Error404 from '../pages/Error404/Error404'
import Cursos from '../pages/Cursos/Cursos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
      <ReactRoutes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Error404 />}/>
        <Route path="curso-inicial" element={<Cursos />}/>
        <Route path="curso-intermedio" element={<Cursos />}/>
        <Route path="curso-avanzado" element={<Cursos />}/>
      </ReactRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes