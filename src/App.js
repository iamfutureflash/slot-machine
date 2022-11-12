import logo from './logo.svg';
import './App.css';
import SlotMachine from './SlotMachine';

function App() {
  return (
    <>
    <h1 className='text-center text-lg bg-slate-300 px-4 py-2'> 🎰 Welcome to <span className='font-bold'>Slot Machine Game 🎰</span> </h1>
    <SlotMachine x= '😄' y= '😄' z= '😄'/>
    <SlotMachine x= '👍' y= '😄' z= '🍌'/>
    <SlotMachine x= '💯' y= '😄' z= '😄'/>
    <SlotMachine x= '👍' y= '👍' z= '👍'/>
    </>
  );
}

export default App;
