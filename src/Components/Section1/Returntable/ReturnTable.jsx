import { useState, useEffect } from 'react';
import styles from './Returntable.module.css';

const ReturnTable = ({ formData}) => {
  const [tableValues, setTableValues] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setTableValues(formData);
  }, [formData]);

  return (
    <>
      <div className={styles.returnTable}>
        <table>
          <caption>Return Change:</caption>
          <tbody>
            <tr>
              <th className={styles.border}>No of Notes</th>
              {tableValues.map((val, i) => (
                <td className={styles.border} key={i}>{val}</td>
              ))}
            </tr>

            <tr>
              <th>Notes</th>
              <td>$2000</td>
              <td>$500</td>
              <td>$100</td>
              <td>$20</td>
              <td>$10</td>
              <td>$1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReturnTable;

