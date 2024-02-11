import { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
import Ekipa from "./views/Ekipa/Ekipa";
import Ballina from "./views/Ballina/Ballina";
import Kontakto from "./views/Kontakto/Kontakto";
import Sherbimet from "./views/Sherbimet/Sherbimet";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Ballina" element={<Ballina />} />
            <Route
              exact
              path="/sherbimet"
              name="Ballina"
              element={<Sherbimet />}
            />
            <Route
              exact
              path="/ekipa"
              name="Forgot Password Page"
              element={<Ekipa />}
            />
            <Route
              exact
              path="/ballina"
              name="Forgot Password Page"
              element={<Ballina />}
            />
            <Route
              exact
              path="/kontakto"
              name="Forgot Password Page"
              element={<Kontakto />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
