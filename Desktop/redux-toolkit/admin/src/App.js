
import 'antd/dist/reset.css';
import { useRoutes } from "react-router-dom";
import './App.css';
import routes from './router';
import Menu from '../src/components/Menu.tsx'
function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Menu></Menu>
      222
      {element}
    </div>
  );
}

export default App;
