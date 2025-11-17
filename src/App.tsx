// APP.jsx는 리액트의 진입점
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.tsx'
import Header from './component/Header.tsx'
import Footer from './component/Footer.tsx'
import Lotto from './lotto/Lotto.tsx'
import Festival from './festival/Festival.tsx'
import FestivalContents from './festival/FestivalContents.tsx'
import TodoList from './todo/TodoList.tsx'
import TestTs from './test_ts/TestTs.tsx'

function App() {
  return (
    // h-screen: 화면 전체 높이
    // h-full: 부모 높이 100%
    // overflow-y-hidden: 세로 스크롤바 숨김
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col justify-center items-center overflow-y-hidden'>
        <Header />
        <main className='h-full w-full container mx-auto flex flex-col justify-center items-center overflow-y-auto'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/festival/contents" element={<FestivalContents />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/testts" element={<TestTs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
