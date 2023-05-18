import styles from './Billbox.module.css';
import Image1 from '../../../Assets/billAmount.png';

const Billbox = ({bill}) => {

  const truncatedBillAmount = bill.length > 8 ? `${bill.substring(0, 8)}e${bill.length - 8}` : bill;

  return (
    <>
      <div className={styles.container}>
        <img src= {Image1} alt="bill-amount" className={styles.img}/>
        <div className={styles.details}>
       <p className={styles.billAmountHeading}>BILL AMOUNT</p>
        <p className={styles.billAmount}><span className={styles.moneySign}>$</span>{truncatedBillAmount==="" ? 0: truncatedBillAmount}</p>
       </div>
      </div>
    </>
  )
}

export default Billbox
