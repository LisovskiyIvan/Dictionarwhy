import { Navigation } from "./components/Navigation";
import { Textarea } from "./components/Textarea";
import { Typewriter } from "./components/Typewriter";
function App() {
  
  return (
    <div className="font-[Poppins]">
      <div className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] h-screen">
          <Navigation />
          <Typewriter />
          <Textarea />
      </div>
    </div>
  );
}

export default App;
