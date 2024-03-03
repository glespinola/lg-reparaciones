import { BrowserRouter, Routes as ReactRoutes, Route} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Error404 from '../pages/Error404/Error404'


const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  )
}
export default Routes