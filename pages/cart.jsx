import styles from '../styles/cart.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import cartSlice from '../redux/cartSlice'
import { reset } from '../redux/cartSlice'
import { useState } from 'react'
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useRouter } from 'next/router'
import Beachdontkillmyvibe from '../components/iamasinner'
import Link from 'next/link'

// This values are the props in the UI

const Cart = () => {
    /* const router=useRouter()
    const [lordifeelthepain,setLordifeelthepain]=useState(null)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("") */
    const dispatch = useDispatch()

    
    const [open, setOpen] = useState(true)
    const [killa,setKilla]=useState(true)
    const amount = "2";
    const currency = "USD";
    const style = { "layout": "vertical" };
    /* 
    const kendric = async (e) => {
        e.preventDefault()
        console.log("heoolo world")
        try {
            console.log("poor poeple")
            var products = []
            cart.map((item) => products.push(item))
            console.log(products)
            const result=await axios.post("http://localhost:3000/api/order",{username:name,phonenumber:phone,adress,price,method})
            console.log("thisi isn't working but dont know why yet one")
            await router.push('/order/'+ result.data.data._id)
            dispatch(reset())
            console.log("thisi isn't working but dont know why yet")
            if (result.success == true) {
                setLordifeelthepain(result.data.data._id)
                console.log(result.data.data)


            }
            else {
                console.log("there was a problem maybe check that you have inputed everything right")
            }
        }
        catch (err) {
            console.log("error on " + err)
        }
    }
    
 */
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
        );
    }
    

    const cart = useSelector((state) => state.cart)
    const cantevensee = useSelector((state) => state.cart.product)
    // console.log(cantevensee)

    return (<div className={styles.cart}>
        <div className={styles.left}>
            <table className={styles.higher}>
                <tbody>
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
                </tbody>
                <tbody>
                {cart.product.map((product, i) => (<tr className={styles.idontthelimits} key={i}>
                    <td className={styles.crynoew}>
                        <div className={styles.iwillwaitfiryou}>
                            <Image src={product.img} width="70" height="70" className={styles.anchianchi} />
                        </div>
                    </td>
                  <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthingname}>
                            {product.title}
                        </span>
                    </td>
                    <td className={styles.aye}>
                        {product.extraItems.length > 0 ? product.extraItems.map((item, i) => (<span className={styles.whenyougavemesomthing} key={i}>
                            , {item.name}
                        </span>)) : <span></span>}

                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            {product.itemPrice}
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            {product.quantity}
                        </span>
                    </td>
                    <td className={styles.aye}>
                        <span className={styles.whenyougavemesomthing}>
                            {product.itemPrice * product.quantity}
                        </span>
                    </td>
                </tr>))}
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
                                ${cart.total}
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
                                ${cart.total}
                            </span>
                        </div>

                    </div>
                    <div className={styles.wheninmgoneontheglobefor}>
                        {open ? (<button className={styles.shedragmedownlikegreavity} onClick={() => setOpen(false)}>
                            Checkout Now
                        </button>) : <div className={styles.getdonttellmeitsover}>
                        <button className={styles.coolmedown} onClick={(e)=>setKilla(false)}>
                            PAY ON DELIVERY
                        </button>
                        <PayPalScriptProvider
                            options={{
                                "client-id": "AXkrPFZxLe79ud_uObjvgVtwwRugY8IioB7NdgFaDIEaQ4UoqxUHHQzQSfpwW04rnbQ55n3sOlZGRXZE",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding": "credit,card,p24"
                            }}
                        >
                            <ButtonWrapper
                                currency={currency}
                                showSpinner={false}
                            />
                        </PayPalScriptProvider></div>}


                    </div>
                </div>
            </div>
        </div>
        <div className={styles.mamasectioneighty}>
        {killa?<></>:<Beachdontkillmyvibe price={cart.total} quantity={cart.quantity} product={cart.product} method={1}/>}
        </div>

    </div>)
}
export default Cart