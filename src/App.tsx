import './themes/reset.css';
import './themes/styles.css';
import SlotMachine from './components/SlotMachine';

export default function App() {
  return (
    <div className='layout'>
      <div className='container'>
        <h1>Lucky Quacks & Chimes 🍒</h1>
        <SlotMachine />
      </div>
    </div>
  );
}
