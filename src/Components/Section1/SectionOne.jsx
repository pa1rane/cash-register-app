import styles from './SectionOne.module.css';
import ReturnTable from './Returntable/Returntable';
import FormSection from './Formsection/FormSection';
import Logo from './Logo/Logo';

const SectionOne = ({addFormData, formData}) => {
  return (
    <>
      <div className={styles.section1}>
        <Logo/>
        <FormSection addFormData={addFormData}/>
        <ReturnTable formData={formData}/>
      </div>
    </>
  )
}

export default SectionOne