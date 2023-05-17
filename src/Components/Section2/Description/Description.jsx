import styles from './Description.module.css'

const Description = () => {
  return (
    <>
    <div className={styles.desc}>
        <p className={styles.captxt}>A CASH REGISTER MANAGER</p>
            <p className={styles.smalltxt}>to know minimum amount 
            of notes to return</p>
    </div>
    </>
  )
}

export default Description
