import styles from './Billbox.module.css'

const Billbox = ({bill}) => {

  const truncatedBillAmount = bill.length > 8 ? `${bill.substring(0, 8)}e${bill.length - 8}` : bill;

  return (
    <>
      <div className={styles.container}>
        <img src= '../../../../Assets/billAmount.png'  alt="bill-reciept" width="50px" height="50px"className={styles.img}/>
        <div className={styles.details}>
       <p className={styles.billAmountHeading}>BILL AMOUNT</p>
        <p className={styles.billAmount}><span className={styles.moneySign}>$</span>{truncatedBillAmount==="" ? 0: truncatedBillAmount}</p>
       </div>
      </div>
    </>
  )
}

export default Billbox
