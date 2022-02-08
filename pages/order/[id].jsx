import styles from '../../styles/order.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Order = ({ order }) => {
    // const index=order.status
    // console.log(order.isPreparing)
    // console.log(order.isOnTheWay)
    // console.log(order.isDeliverd)
    const [itsmeagain, setItsmeagain] = useState([])
    const helloworld = (poil) => {
        if (poil < 1) return styles.leathal
        if (poil == 1) return styles.done
        if (poil > 1) return styles.getthere
    }
    useEffect(() => {
        setItsmeagain(order.prdoucts)
    }, [order])
    return (<div className={styles.kedu}>
        <div className={styles.order}>
            <div className={styles.left}>
                <table className={styles.higher}>
                    <tbody>
                        <tr className={styles.butyouknewthatalready}>

                            <th className={styles.ineedyoutoreply}>
                                Order Id
                            </th>
                            <th className={styles.ineedyoutoreply}>
                                Customer
                            </th>
                            <th className={styles.ineedyoutoreply}>
                                Adress
                            </th>
                            <th className={styles.ineedyoutoreply}>
                                Products
                            </th>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={styles.idontthelimits}>

                            <td className={styles.aye}>
                                <span className={styles.whenyougavemesomthingname}>
                                    {order._id}
                                </span>
                            </td>
                            <td className={styles.aye}>
                                <span className={styles.whenyougavemesomthing}>
                                    {order.username}
                                </span>
                            </td>
                            <td className={styles.aye}>
                                <span className={styles.whenyougavemesomthing}>
                                    {order.adress}
                                </span>
                            </td>
                            <td className={styles.alibaba} >
                                <tbody>
                                    <tr>
                                        <td>
                                          <b>Product </b>                                         </td>
                                        <td>
                                           <b>Price</b> 
                                        </td>
                                        
                                            <td>
                                               <b>Quantity</b> 
                                            </td>
                                            <td>
                                              <b>Extras</b> 
                                            </td>
                                       
                                    </tr>
                                    {itsmeagain.map((item,i)=>(<tr>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.itemPrice}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>
                                           {item.extraItems.length>1?item.extraItems.map((item,i)=>(<div className="closeclole"><span>{item.name},</span> <span> </span></div>)):item.extraItems.map((item,i)=>(<span>{item.name}</span>))}
                                        </td>
                                    </tr>))}
                                    
                                </tbody>
                            </td>
                            {/* {itsmeagain.map((item, i) => (

                            <div className={styles.jsutlookoveryourshouldersbabay} key={i}>
                                <span className={styles.meetmewitharmsup}>
                                {item.title}
                                </span>
                                <span className={styles.meetmewitharmsup}>
                                   {item.itemPrice}
                                </span>
                                <span className={styles.meetmewitharmsup}>
                                    {item.extraItems}
                                </span>
                            </div>
                            

                        ))}</td> */}
                            {/* <td>{itsmeagain.map((item)=>(<span>{item.title}</span>))}</td> */}

                        </tr>
                    </tbody>
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
                                    {order.price} Birr
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
                                   {order.price} Birr
                                </span>
                            </div>

                        </div>
                        <div className={styles.wheninmgoneontheglobefor}>
                            <button className={styles.shedragmedownlikegreavity} disabled>
                                PAID
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.likeyall}>
            <div className={helloworld(1)}>
                <Image src="/img/paid.png" width="50" height="50" />
                <div className={styles.payment}>
                    <span className={styles.crazy}>
                        Payment
                    </span>
                </div>
                <Image src="/img/checked.png" className={styles.shutthefuckup} width="30" height="30" />
            </div>
            <div className={helloworld(order.isPreparing)}>
                <Image src="/img/bake.png" width="50" height="50" />
                <div className={styles.payment}>
                    <span className={styles.crazy}>
                        Preparing
                    </span>
                </div>
                <Image src="/img/checked.png" className={styles.shutthefuckup} width="30" height="30" />
            </div>
            <div className={helloworld(order.isOnTheWay)}>
                <Image src="/img/bike.png" width="50" height="50" />
                <div className={styles.payment}>
                    <span className={styles.crazy}>
                        OnTheWay
                    </span>
                </div>
                <Image src="/img/checked.png" className={styles.shutthefuckup} width="30" height="30" />
            </div>
            <div className={helloworld(order.isDeliverd)}>
                <Image src="/img/delivered.png" width="50" height="50" />
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
export const getServerSideProps = async ({ params }) => {
    const reponce = await axios.get(`http://localhost:3000/api/order/${params.id}`)
    return {
        props: (async function () {
            return {
                order: reponce.data.data,
            }
        })(),
    };

}