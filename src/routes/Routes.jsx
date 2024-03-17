import { BrowserRouter, Routes as ReactRoutes, Route} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Error404 from '../pages/Error404/Error404'
import CursoInicial from '../pages/Courses/pages/CursoInicial'
import CursoIntermedio from '../pages/Courses/pages/CursoIntermedio'
import CursoAvanzado from '../pages/Courses/pages/CursoAvanzado'


const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/curso-inicial" element={<CursoInicial />} />
          <Route path="/curso-intermedio" element={<CursoIntermedio />} />
          <Route path="/curso-avanzado" element={<CursoAvanzado />} />
          <Route path="*" element={<Error404 />} />
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  )
}
export default Routes