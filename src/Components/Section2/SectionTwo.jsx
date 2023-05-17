import styles from './SectionTwo.module.css';
import Billbox from './Billbox/Billbox';
import Doughnut from './Doughnut/Doughnut';
import Returnbox from './Returnbox/Returnbox';
import Description from './Description/Description'

const SectionTwo = ({formData,bill,cash}) => {
  return (
    <>
      <div className={styles.section}>
        <Billbox bill={bill}/>
        <Doughnut formData={formData}/>
        <Returnbox bill={bill} cash={cash}/>
        <Description/>
      </div>
    </>
  )
}

export default SectionTwo
