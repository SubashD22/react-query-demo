import './App.css';
import {QueryClientProvider, QueryClient}from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import TSuperHeroes from './Pages/TSuperHeroes';
import RQSuperHeroes from './Pages/RQSuperHeroes';
import NavBar from './component/NavBar';
import RQSingleHero from './Pages/RQSingleHero';
import DynamicHeroes from './Pages/DynamicHeroes';
import Dependent from './Pages/Dependent';
const queryClient = new QueryClient()
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tsh' element={<TSuperHeroes/>}/>
        <Route path='/rsh' element={<RQSuperHeroes/>}/>
        <Route path='/rsh/:Id' element={<RQSingleHero/>}/>
        <Route path='/Dh' element={<DynamicHeroes id={[1,3]}/>}/>
        <Route path='/Dep' element={<Dependent email='subash@examble.com'/>}/>
      </Routes>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    </>
  );
}

export default App;
