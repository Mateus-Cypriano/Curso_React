/* eslint-disable react/prop-types */
import styles from './CarDetails.module.css'

const CarDetails = ({marca, cor, km, newCar}) => {
  return (
    <div className={styles.card}>
            <h2>{marca}</h2>
            <p>Cor: {cor}</p>
            <p>KM: {km}</p>
        {newCar ? (
            <div>
                <p className={styles.new_car}>Carro novo!</p>
            </div>
        ) : null}
    </div>
  )
}

export default CarDetails;