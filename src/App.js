import { Routes, Route } from 'react-router-dom'
import './App.css';
// import Cards from './components/Cards';



import Home from './screens/Home'
import ChatPage from './screens/ChatPage'
import Filters from './screens/Filters'
import ChatBot from './components/ChatBot'
import KnowMore from "./components/KnowMore"
// import Header from './components/Header'


const App = () => {

  return (
    <div className="App">
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/KnowMore" element={<KnowMore />}/>
      </Route>
      <Route path="/filters" element={<Filters />} />
      <Route path="/chat" element={<ChatPage />} >
        <Route path="/chat/bot" element={<ChatBot />} />
      </Route>
    </Routes>


    </div>
  );
}

export default App;
