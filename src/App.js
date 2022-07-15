import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Home = () => (<h1>Home</h1>)
const MyPage = () => (<h1>My Page</h1>)
const Dashboard = () => (<h1>Dashboard</h1>)
const Menu = (props) => {
  const items = props.items;

  if (items && Array.isArray(items)) {
    return (
        <nav>
          <ul>
            {items.map(
              (item, i) => {
                const itemName = item.type.name
                return (
                  <li key={i}>
                    <Link to={`${itemName.toLowerCase()}`}>{itemName}</Link>
                  </li>
                )
              }
            )}
          </ul>
        </nav>
    )
  } else {
    return <div></div>
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu items={[<Home />, <MyPage />, <Dashboard />]} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
