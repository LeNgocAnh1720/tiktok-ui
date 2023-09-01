import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;

            if(route.layout){
              Layout = route.layout;
            }else if (Layout === null){
              Layout = Fragment;
            }

            const Page = route.component; //Render theo Route
            return <Route path={route.path} key={index} element={
              <Layout>
                <Page />
              </Layout>
            }/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
