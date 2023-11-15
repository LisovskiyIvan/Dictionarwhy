import { Product } from "./components/Product"; 
import { products } from "./data/data";
function App() {
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Product product={products[0]}/>
      <Product product={products[1]}/>
    </div>
  );
}

export default App;
