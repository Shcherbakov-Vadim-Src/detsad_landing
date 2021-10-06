import styles from '../styles/Home.module.css'
import Slider from './Slider'
import ContactForm from './ContactForm'


export default function PartTwo() {

   

    return (
        <>
            <div className={styles.market_block}>
                <div className="App">
                    <Slider />
                    <h3 className={styles.text_before_form}>Оставьте заявку для первого <a name="form">посещения</a> и знакомства с нами:</h3>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}