import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom'; 

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<div>
				<nav>
					<Link to="/AddCreator">Add Creator</Link> |{""}
					<Link to="/DeleteCreator">Delete Creator</Link>
					<Link to="/EditCreator">Edit Creator</Link>
					<Link to="/ViewCreator">View Creator</Link>
					<Link to="/ShowCreators">Show all Creators</Link>
					<Link to="/Home">Home</Link>
				</nav>
        <Outlet />
				<a href="https://vitejs.dev" target="_blank">
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App
