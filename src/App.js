
import './App.css';
import Header  from "./MyComponent/Header";
import DashboardBody from './MyComponent/DashboardBody';

function App() {
  return (
    <body>
    <div className="App">
      
     
     <Header title="DailySpendingCalculator" searchbar={false}/>
     <DashboardBody />
     <h1 className='middleText'>Daily Spending Calculator</h1>
   
    </div>
    </body>
  );
}

export default App;
