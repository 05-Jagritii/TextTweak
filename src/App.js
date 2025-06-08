import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled !", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled !", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Text"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About mode={mode} /> } ></Route>

            <Route
              exact path="/"
              element={
                <TextForms
                  showAlert={showAlert}
                  heading="Enter the text to analyze : "
                  mode={mode}
                />
              }
            ></Route>
          </Routes> */}
          
          {/* Render TextForms component directly without routes */}
          <TextForms
            showAlert={showAlert}
            heading="Enter the text to analyze : "
            mode={mode}
          />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
