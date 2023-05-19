import { useState } from 'react';
import styles from './Formsec.module.css';

const FormSection = ({addFormData}) => {

const [amount, setAmount] = useState({bill:"", cash:""});

const handleSubmit =(e)=> {
     e.preventDefault()
     addFormData(amount)
     setAmount({bill:"", cash:""})
}

const handleChange=(e)=>{
  const{name, value} = e.target
   setAmount({...amount,
    [name]: value});
}

  return (
    <>
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bill">Bill Amount</label>
        <input type="number" onChange={handleChange} value={amount.bill} name='bill' id='bill' autoComplete='off'min={1}/>

        <label htmlFor="cash">Cash Given Amount</label>
        <input type="number" onChange={handleChange} value={amount.cash} name='cash' id='cash' autoComplete='off' min={1}/>

        <button type='submit'id='btn'
        ><span>Check</span></button>
      </form>
    </div>
    </>
  )
}

export default FormSection

