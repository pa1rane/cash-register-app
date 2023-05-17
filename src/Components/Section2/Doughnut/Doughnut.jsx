import styles from './Doughnut.module.css';

const Doughnut = ({formData}) => {

  const notes = [2000,500,100,20,10,1]

  return (
    <>
      <div className={styles.dNut}>
      
        <div className={styles.container}>
        <div className={styles.notes}>
        <p className={styles.heading}>Notes</p>
        {notes.map((note,i) => (
          <p className={styles.noteStyle}key={i}>${note}</p>
        ))}
        </div>
        <div className={styles.data}>
        <p className={styles.heading}>Return</p>
            {formData.map((data, i) => (
            <div
              key={i}
              className={styles.chartItem}
              style={{ width: `${data > 80? 80:data}px`, backgroundColor: `rgb(${i * 50}, ${i * 25}, ${i * 10})` }}
            />
            
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default Doughnut