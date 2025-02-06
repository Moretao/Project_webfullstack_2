import { Routes, Route } from "react-router";

import Template from './components/Template';
import routes from "./router/routes";

const App = () => {
  return (
    <Template>
      <Routes>
        {routes.map(({ element, path, name }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Template>
  );
};

export default App;
