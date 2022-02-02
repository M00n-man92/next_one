import styles from '../styles/cart.module.css'
import Image from 'next/image'
const Cart = () => {
    return (<div className={styles.cart}>
        <div className={styles.left}>
            <table className={styles.higher}>
                <tr className={styles.butyouknewthatalready}>
                    <th className={styles.ineedyoutoreply}>
                        Product
                    </th>
                    <th className={styles.ineedyoutoreply}>
                        Name
                    </th>
                    <th className={styles.ineedyoutoreply}>
                        Extras
                    </th>
                    <th className={styles.ineedyoutoreply}>
                        Price
                    </th>
                    <th className={styles.ineedyoutoreply}>
                        Quantity
                    </th>
                    <th className={styles.ineedyoutoreply}>
                        Total
                    </th>
                </tr>
                <tr className={styles.idontthelimits}>
                    <td className={styles.crynoew}>
                        <div className={styles.iwillwaitfiryou}>
                            <Image src="/img/pizza.png" width="70" height="70" className={styles.anchianchi} />
                        </div>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthingname}>
                            Motzorella
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            chesse,souce
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            $19
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            2
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            $38
                        </span>
                    </td>
                </tr>
                <tr className={styles.idontthelimits}>
                    <td className={styles.crynoew}>
                        <div className={styles.iwillwaitfiryou}>
                            <Image src="/img/pizza.png" width="70" height="70" className={styles.anchianchi} />
                        </div>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            Motzorella
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            chesse,souce
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            $19
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            2
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            $38
                        </span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.tequilashots}>
                <div className={styles.heymn}>
                    <div className={styles.dispitethisworinme}>
        <span className={styles.igottafindpesceofmind}>
            CART TOTAL
        </span>
                    </div>
                    <div className={styles.thistimeimreadyforit}>
                        <div className={styles.streesmeoutandcussmeout}>
                            <span className={styles.asthestoryfoes}>
                                Subtotal:
                            </span>
                            <span className={styles.idontwnatyouwaitingtoolong}>
                                $78
                            </span>
                        </div>
                        <div className={styles.streesmeoutandcussmeout}>
                            <span className={styles.asthestoryfoes}>
                                Discout:
                            </span>
                            <span className={styles.idontwnatyouwaitingtoolong}>
                                $0.00
                            </span>
                        </div>
                        <div className={styles.streesmeoutandcussmeout}>
                            <span className={styles.asthestoryfoes}>
                                Total:
                            </span>
                            <span className={styles.idontwnatyouwaitingtoolong}>
                                $78
                            </span>
                        </div>

                    </div>
                    <div className={styles.wheninmgoneontheglobefor}>
                        <button className={styles.shedragmedownlikegreavity}>
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}
export default Cart