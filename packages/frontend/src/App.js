import "./App.css";
import Provider from "./components/Provider/Provider";
import UserSection from "./components/UserSection/UserSection";
import CatSection from "./components/CatSection/CatSection";
import CatGallery from "./components/CatGallery/CatGallery";

function App() {
  return (
    <div className="App">
      <Provider>
        <UserSection />
        <CatSection />
        <CatGallery />
      </Provider>
    </div>
  );
}

export default App;
