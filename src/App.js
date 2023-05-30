
import './App.css';
import Header  from "./MyComponent/Header";
import DashboardBody from './MyComponent/DashboardBody';

function App() {
  return (
    <div className="App">
      
     
     <Header title="DailySpendingCalculator" searchbar={false}/>
     <DashboardBody />
     
   
    </div>
  );
}

export default App;
