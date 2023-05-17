import { useState} from 'react';
import SectionOne from './Components/Section1/SectionOne.jsx';
import SectionTwo from './Components/Section2/SectionTwo.jsx';

const App = () => {

const [formData, setFormData] = useState([]);
const [bill, setBill] = useState(0);
const [cash, setCash] = useState(0);

function addFormData(amount) {
  setBill(amount.bill);
  setCash(amount.cash);
  let notes = [2000, 500, 100, 20, 10, 1];
  let returnAmount =  amount.cash - amount.bill;

  const noOfNotes = notes.map(note => {
     const remainder = Math.trunc(returnAmount/note);
     returnAmount%= note;
     return remainder;
});
    setFormData(noOfNotes)
}

  return (

    <>
    <div className="app">
      <SectionOne addFormData={addFormData} formData={formData}/>
      <SectionTwo formData={formData} bill={bill} cash={cash}/>
     
      </div>
    </>
     
  )

}

export default App
