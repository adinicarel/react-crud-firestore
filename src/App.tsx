import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMember from './components/addMember/AddMember';
import MemberUpdate from './components/updateMember/MemberUpdate';
import Header from './components/header/Header';
import Home from './components/homePage/Home';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/add'} element={<AddMember />}></Route>
          <Route path={'/edit'} element={<MemberUpdate />}>
            <Route path={':cardId'} element={<MemberUpdate />} />
          </Route>
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
