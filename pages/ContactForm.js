import styles from '../styles/Home.module.css'
import {useState} from "react";

export default function ContactForm() {

    let [nameValue, setName] = useState('');
    let [phoneValue, setPhone] = useState('');
    let [mailValue, setMail] = useState('');
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let [productValue, setProduct] = useState('');

    const getContacts = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];
        console.log('data', data);

        if (data[0] == null || data[0] == ''){
            setName('Пожалуйста введите Ваше имя');
        }else{
            setName('')
        }
        if (data[1] == null || data[1].length === 0){
            setPhone('Пожалуйста введите Ваш номер телефона');
        } else if ( typeof Number(data[1]) !== "number" ){
            setPhone('Корректный формат телефона: 84951234567');
        } else{
            setProduct('')
        }
        if (data[2] == null || data[2] == ''){
            setMail('Пожалуйста укажите Вашу почту');
        } else if ( regex.test(String(data[2]).toLowerCase()) === false ){
            setMail('Неверный формат почты')
        } else {
            setMail('')
        }
        if ( data[3] == null || data[3].length === 0 ){
            setProduct('Пожалуйста укажите удобную для Вас дату');
        }else{
            setProduct('')
        }

        let mail = {
            name: data[0],
            phone: data[1],
            mail: data[2],
            site: data[3]
        }

        console.log(mail);

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mail)
        })

    }


    return (
        <>
                <div className={styles.contacts_block}>
                    <div>
                        <div className={styles.contact_box}>
                            <form className={styles.flex_column} onSubmit={getContacts}>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_column}><label className={styles.lable}>Ваше имя и отчество</label><p className={styles.validity}>{nameValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Введите Ваше имя"/>
                                </div>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_column}><label className={styles.lable}>Ваш контакт для связи</label><p className={styles.validity}>{phoneValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Введите номер телефона"/>
                                </div>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_column}><label className={styles.lable}>Ваша электронная почта</label><p className={styles.validity}>{mailValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Введите электронную почту"/>
                                </div>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_column}><label className={styles.lable}>Дата, время визита</label><p className={styles.validity}>{productValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Укажите дату и время, удобную для посещения"/>
                                </div>
                                <button type="submit" className={styles.button_submit_mail}>Отправить заявку</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )

}