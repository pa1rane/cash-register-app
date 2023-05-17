import styles from './Returnbox.module.css';
import Image2 from '../../../../Assets/cashAmount.png';

const Returnbox = ({bill,cash}) => {

  const returnAmount = cash - bill;
  const returnAmounts = returnAmount.toString()
  const truncatedReturnAmount = returnAmounts.length > 8 ? `${returnAmounts.substring(0, 8)}e${returnAmounts.length - 8}` : returnAmount;
  return (
    <>
      <div className={styles.container}>
      <img src={Image2} alt="bill-reciept" width="50px" height="50px" className={styles.img}/>
        <div className={styles.details}>
        <p className={styles.cashAmountHeading}>RETURN AMOUNT</p>
        <p className={styles.cashAmount}><span className={styles.moneySign}>$</span>{truncatedReturnAmount}</p>
        </div>
      </div>
    </>
  )
}

export default Returnbox
