import styles from '../styles/order.module.css'
import Image from 'next/image'
const Order = () => {
  const helloworld=(index)=>{
      if (index<1) return styles.leathal
      if (index==1) return styles.done
      if (index>1) return styles.getthere
  }
  return (<div className={styles.kedu}>
        <div className={styles.order}>
            <div className={styles.left}>
                <table className={styles.higher}>
                    <tr className={styles.butyouknewthatalready}>
                        <th className={styles.ineedyoutoreply}>
                            Product
                        </th>
                        <th className={styles.ineedyoutoreply}>
                            Orer Id
                        </th>
                        <th className={styles.ineedyoutoreply}>
                            Customer
                        </th>
                        <th className={styles.ineedyoutoreply}>
                            Adress
                        </th>
                        <th className={styles.ineedyoutoreply}>
                            Total
                        </th>

                    </tr>
                    <tr className={styles.idontthelimits}>

                        <td className={styles.aye}>
                            <span className={styles.whenyougavemesomthingname}>
                                1431234
                            </span>
                        </td>
                        <td className={styles.aye}>
                            <span className={styles.whenyougavemesomthing}>
                                Jhon Doe
                            </span>
                        </td>
                        <td className={styles.aye}>
                            <span className={styles.whenyougavemesomthing}>
                                Addis Ababa arada kifleketma
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
                                PAID
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.likeyall}>
            <div className={helloworld(1)}>
                <Image src="/img/paid.png" width="50" height="50"/>
                <div className={styles.payment}>
                    <span className={styles.crazy}>
                        Payment
                    </span>
                </div>
                <Image src="/img/checked.png" className={styles.shutthefuckup} width="30" height="30" />
            </div>
            <div className={helloworld(2)}>
                <Image src="/img/bake.png" width="50" height="50" />
                <div className={styles.payment}>
                    <span className={styles.crazy}>
                        Preparing
                    </span>
                </div>
                <Image src="/img/checked.png" className={styles.shutthefuckup} width="30" height="30" />
            </div>
            <div className={helloworld(0)}>
                <Image src="/img/bike.png" width="50" height="50"/>
                <div className={styles.payment}>
                    <span className={styles.crazy}>
                        OnTheWay
                    </span>
                </div>
                <Image src="/img/checked.png" className={styles.shutthefuckup} width="30" height="30" />
            </div>
            <div className={helloworld(0)}>
                <Image src="/img/delivered.png"  width="50" height="50"/>
                <div className={styles.payment}>
                    <span className={styles.crazy}>
                        Delivered
                    </span>
                </div>
                <Image src="/img/checked.png" className={styles.shutthefuckup} width="30" height="30" />
            </div>
        </div>
    </div>)
}
export default Order