import { Navigation } from "./components/Navigation";
import { Textarea } from "./components/Textarea";
function App() {
  
  return (
    <div className="font-[Poppins]">
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
          <Navigation />
          <Textarea />
      </div>
    </div>
  );
}

export default App;
