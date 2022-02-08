import styles from '../../styles/pitzacard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PitzaCard = ({pitzaitlem}) => {
    return (
    <div className={styles.pitzacard}>
<Link href={`/product/${pitzaitlem._id}`} passHref>
        <div className={styles.migo}>
            <Image src={pitzaitlem.img} width="100" height="100" />
        </div>
        </Link>
        <div className={styles.jhonnyP}>
            <div className={styles.reseladachit}>
                <span className={styles.revive}>{pitzaitlem.title}</span>
            </div>
            <div className={styles.reasontheyrememverme}>
                <span className={styles.perplexed}>
                    {pitzaitlem.price[0]}
                </span>
            </div>
            <div className={styles.ijustmetyou}>
                <span className={styles.figurely}>{pitzaitlem.discription}</span>
            </div>
        </div>
        

    </div>)
}
export default PitzaCard