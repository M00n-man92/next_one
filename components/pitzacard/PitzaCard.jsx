import styles from '../../styles/pitzacard.module.css'
import Image from 'next/image'
const PitzaCard = () => {
    return (<div className={styles.pitzacard}>

        <div className={styles.migo}>
            <Image src="/img/pizza.png" width="100" height="100" />
        </div>
        <div className={styles.jhonnyP}>
            <div className={styles.reseladachit}>
                <span className={styles.revive}>Italiano papochilo</span>
            </div>
            <div className={styles.reasontheyrememverme}>
                <span className={styles.perplexed}>
                    price
                </span>
            </div>
            <div className={styles.ijustmetyou}>
                <span className={styles.figurely}>discription</span>
            </div>
        </div>


    </div>)
}
export default PitzaCard