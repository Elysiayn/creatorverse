import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';
import addCreator from './routes/addCreator.jsx';
import editCreator from './routes/editCreator.jsx';
import viewCreator from './routes/viewCreator.jsx';
import showCreators from './routes/showCreators.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
      <Route path="/" element={<App />}>
        <Route path="addCreator" element={<addCreator />} />
        <Route path="editCreator" element={<editCreator />} />
        <Route path="viewCreator" element={<viewCreator />} />
        <Route path="showCreators" element={<showCreators />} />
        <Route
          path="*" 
          element={
            <main>
              <h2>404</h2>
            </main>
          }></Route>
      </Route>
		</Routes>
	</BrowserRouter>
);
