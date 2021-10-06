import styles from '../styles/Home.module.css'
import Image from "next/image";


export default function Footer() {

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_menu_box}>
                    <p className={styles.city}><a name="contact">Москва</a></p>
                    <p className={styles.years}><a name="contac">2021 год</a></p>
                </div>
                <div className={styles.adress_row}>
                    <p className={styles.address}> 111111, г. Москва, ул. Свободы, 1</p>
                    <a href="mailto: detsad@mechty.ru" className={styles.address}>E-mail: detsad@mechty.ru</a>
                    <a href="tel:+74997777777" className={styles.address}>Phone: +7 499 777 77 77</a>
                </div>
            </div>
        </>
    )

}