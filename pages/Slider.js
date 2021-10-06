import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Slider = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1201, min: 1 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 1200, min: 1 },
          items: 1
        }
      };


    return (
        <div className={styles.carouselbox}>
            <Carousel responsive={responsive}
            className={styles.carousel}
            keyBoardControl={true} >
                <div className={styles.firstitem}>
                    <Image src="/img/1.png" alt="photo" width="250px" height="250px" /> 
                </div>
                <div className={styles.someitem}>
                    <Image src="/img/2.png" alt="photo" width="450px" height="450px" /> 
                </div>
                <div className={styles.someitem}>
                    <Image src="/img/3.png" alt="photo" width="450px" height="450px" /> 
                </div>
                <div className={styles.someitem}>
                    <Image src="/img/4.png" alt="photo" width="450px" height="450px" /> 
                </div>
                <div className={styles.fiveitem}>
                    <Image src="/img/5.png" alt="photo" width="300px" height="300px" /> 
                </div>
                <div className={styles.fiveitem}>
                    <Image src="/img/6.png" alt="photo" width="250px" height="250px" /> 
                </div>
                <div className={styles.someitem}>
                    <Image src="/img/7.png" alt="photo" width="450px" height="400px" /> 
                </div>
                <div className={styles.fiveitem}>
                    <Image src="/img/8.png" alt="photo" width="250px" height="250px" /> 
                </div>
                <div className={styles.someitem}>
                    <Image src="/img/9.png" alt="photo" width="400px" height="400px" /> 
                </div>
                <div className={styles.someitem}>
                    <Image src="/img/10.png" alt="photo" width="400px" height="400px" /> 
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;