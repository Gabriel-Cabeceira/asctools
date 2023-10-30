import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HomePage } from './pages/home/home-page';
import { ScriptsPage } from './pages/scripts/scripts-page';
import { ApiPage } from './pages/api-page/api-page';
import { HelpPage } from './pages/help-page/help-page';
import { WhatsPage } from './pages/whatsapp-page/wpp-page';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/scripts' element={<ScriptsPage/>}/>
        <Route path='/api' element={<ApiPage/>}/>
        <Route path='/WhatsApp' element={<WhatsPage/>}/>
        <Route path='/help' element={<HelpPage/>}/>
      </Routes>
    </Router>
  )
}

export { App }