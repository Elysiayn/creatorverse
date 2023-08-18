import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';
import addCreator from './routes/addCreator.jsx';
import deleteCreator from './routes/deleteCreator.jsx';
import editCreator from './routes/editCreator.jsx';
import viewCreator from './routes/viewCreator.jsx';
import showCreators from './routes/showCreators.jsx';
import home from './routes/home.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
      <Route path="/" element={<App />}>
        <Route path="/AddCreator" element={<addCreator />} />
        <Route path="/DeleteCreator" element={<deleteCreator />} />
        <Route path="/EditCreator" element={<editCreator />} />
        <Route path="/ViewCreator" element={<viewCreator />} />
        <Route path="/ShowCreators" element={<showCreators />} />
        <Route path="/Home" element={<home />} />
      </Route>
		</Routes>
	</BrowserRouter>,
);
