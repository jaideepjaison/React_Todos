import logo from './logo.svg';
import './App.css';
import Header  from "./MyComponent/Header";
import Footer  from "./MyComponent/Footer";
import Todos from './MyComponent/Todos';
import TodosElement from './MyComponent/TodosElement';
function App() {
  return (
    <div className="App">
      
     
     <Header />
     <Todos></Todos>
     <TodosElement></TodosElement>
     <Footer />
    </div>
  );
}

export default App;
