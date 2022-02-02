import styles from '../styles/product.module.css'
import Image from 'next/image'
const Product = () => {
    return (<div className={styles.product}>
        <div className={styles.agwagineshingi}>
            <Image src="/img/pizza.png" width="500" height="500" className={styles.anchianchi} />
        </div>
        <div className={styles.keyetmetatrtaresh}>
            <div className={styles.tafya}>
                <span className={styles.anchcnhi}>
                    Motzorela
                </span>
            </div>
            <div className={styles.tafya}>
                <span className={styles.dundundundarara}>
                    $98
                </span>
            </div>
            <div className={styles.tafya}>
                <span className={styles.metawsigesgegs}>
                    lenekene belat yasebew wedaje aderesegn deje keahun bewala lela baynem alay lela lela lela.
                </span>
            </div>
            <div className={styles.tafya}>
                <span className={styles.wekilneshkelay}>
                    choose the size
                </span>
                <div className={styles.jaletejira}>
                    <div className={styles.selamachnybza}>
                        <Image src="/img/size.png" width="25" height="25" className={styles.lio} />
                        <span className={styles.lhunmoign}>
                            small
                        </span>
                    </div>
                    <div className={styles.selamachnybza}>
                        <Image src="/img/size.png" width="35" height="35" className={styles.lio} />
                        <span className={styles.lhunmoign}>
                            medium
                        </span>
                    </div>
                    <div className={styles.selamachnybza}>
                        <Image src="/img/size.png" width="45" height="45" className={styles.lio} />
                        <span className={styles.lhunmoign}>
                            large
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.tafya}>
                <span className={styles.wekilneshkelay}>
                    choose additional ingridients
                </span>
                <div className={styles.jaletejira}>
                    <div className={styles.esktseer}>
                        <input type="checkbox" className={styles.heylordyouknowimtired}/>
                        <span className={styles.jaleltite}>
                            Double Ingridients
                        </span>
                    </div>
                    <div className={styles.esktseer}>
                        <input type="checkbox" className={styles.heylordyouknowimtired}/>
                        <span className={styles.jaleltite}>
                            Extra Cheese
                        </span>
                    </div>
                    <div className={styles.esktseer}>
                        <input type="checkbox" className={styles.heylordyouknowimtired}/>
                        <span className={styles.jaleltite}>
                            Extra Spice
                        </span>
                    </div>
                    <div className={styles.esktseer}>
                        <input type="checkbox" className={styles.heylordyouknowimtired}/>
                        <span className={styles.jaleltite}>
                            Garlic Sause
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.letmecome}>
                <input type="number" className={styles.erererer} />
                <div className={styles.tsyaywam}>
                    <button className={styles.ashabelyaho}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>)
}
export default Product