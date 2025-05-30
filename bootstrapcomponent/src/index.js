import ReactDOM from 'react-dom/client';
// ↓ 라우터 선언
import {BrowserRouter, Routes, Route} from "react-router-dom";
// ↓ 부트스트랩 사용하기 위해 cdn 선언
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import Table from './pages/Table';
import Img from './pages/Img';
import Jumbo from './pages/Jumbo';
import Alerts from './pages/Alerts';
import Btn from './pages/Btn';
import Badges from './pages/Badges';
import Progress from './pages/Progress';
import Cards from './pages/Cads';
import Layer from './pages/Layer';
import ToastM from './pages/ToastM';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}> {/* 해더 */}
      <Route index element={<Home/>}/>  {/* 바디, 인덱스가 제일 첫 페이지 */}
      <Route path="container" element={<Cont/>}/> 
      <Route path="typo" element={<Typo/>}/> 
      <Route path="color" element={<Color/>}/>
      <Route path="table" element={<Table/>}/>
      <Route path="img" element={<Img/>}/>
      <Route path="jumbo" element={<Jumbo/>}/>
      <Route path="alerts" element={<Alerts/>}/>
      <Route path="btn" element={<Btn/>}/>
      <Route path="badges" element={<Badges/>}/>
      <Route path="progress" element={<Progress/>}/>
      <Route path="cards" element={<Cards/>}/>
      <Route path="layer" element={<Layer/>}/>
      <Route path="toastm" element={<ToastM/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
/* ↑ 이 문법은 리액트 18버전부터 */