import logo from './logo.svg';
import './App.css';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
