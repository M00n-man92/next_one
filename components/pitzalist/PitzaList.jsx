import styles from '../../styles/pitzalist.module.css'
import PitzaCard from '../pitzacard/PitzaCard'
const PitzaList = ({ pitzaList }) => {
    // consoles.log(pitzaList)
    return (<div className={styles.pitzalist}>
        <div className={styles.beautigul}>
            <h1 className={styles.pimp}>The Best Pitza In Town</h1>
        </div>
        <div className={styles.lenaaintin}>
            <p className={styles.myability}>they shooten them shots they testinthe crib aint makin no sence, yeah ten to ealj foe im streat tho neggas lnow joew i j=made ut ihasd tem bands thet shown ten ralcks iannual income t oturn word si nto imagery comeewithath energht</p>
        </div>
        <div className={styles.ongofthebestrapperalive}>
            {/* {pitzaList.map((item,i)=>( <PitzaCard pitzaitlem={item} key={i}/>))} */}
            {pitzaList.map((itsem, i) => (<PitzaCard pitzaitlem={itsem} key={i} />))}


        </div>
    </div>)
}
export default PitzaList