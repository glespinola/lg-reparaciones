import {BrowserRouter, Routes as ReactRoutes, Route, Switch} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import Error404 from '../pages/Error404/Error404'
import CursoInicial from '../pages/Cursos/CursoInicial'
import CursoIntermedio from '../pages/Cursos/CursoIntermedio'
import CursoAvanzado from '../pages/Cursos/CursoAvanzado'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>    
        <ReactRoutes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Error404 />}/>
          <Route path="curso-inicial" element={<CursoInicial />}/>
          <Route path="curso-intermedio" element={<CursoIntermedio />}/>
          <Route path="curso-avanzado" element={<CursoAvanzado />}/>
        </ReactRoutes>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes