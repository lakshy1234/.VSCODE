import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Books from "./pages/Books";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route  path="/" element={<Books/>}/>
        <Route  path="/add" element={<Add/>}/>
        <Route  path="/update" element={<Update/>}/>
       </Routes>
      </BrowserRouter>

    </div> 
  );
}

export default App;