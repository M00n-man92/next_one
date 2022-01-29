import Image from 'next/image'
import styles from '../../styles/featured.module.css'
import { useState } from 'react'
const Featured = () => {
    const tastey = { img: "/img/Conjunto de diferentes pizzas calabresa, vegetariano, frango com legumes _ Foto Premium.jpg", title: "Buy two get one FREE", desc: "50% off now call and order" }
    const stiritup = { img: "/img/Here we go with pizza!.jpg", title: "HOt and SPicey", desc: "Bemote lagursachu " }
    const freealirght = { img: "/img/𝑒𝑑𝑖𝑡𝑒𝑑 𝑏𝑦 @𝑐𝑙𝑎𝑖𝑟𝑒𝑒𝑙𝑖𝑠𝑒_.jpg", title: "Simple ", desc: "Smells and tastes like it was made my dear ol mommy" }
    const arew = [tastey, stiritup, freealirght
        /* "/img/Conjunto de diferentes pizzas calabresa, vegetariano, frango com legumes _ Foto Premium.jpg",
        "/img/Here we go with pizza!.jpg",
        "/img/𝑒𝑑𝑖𝑡𝑒𝑑 𝑏𝑦 @𝑐𝑙𝑎𝑖𝑟𝑒𝑒𝑙𝑖𝑠𝑒_.jpg"  */
    ]
    const [itemm, setitemm] = useState(0)
    const heandler = (digits) => {
        if (digits == "l") {
            itemm != 0 ? setitemm(itemm -= 1) : setitemm(2)
            console.log(itemm)

        }
        else if (digits == "r") {
            itemm != 2 ? setitemm(itemm += 1) : setitemm(0)
            console.log(itemm)
        }
    }
    return (
        <div className={styles.feature}>

            <div className={styles.igorleft} onClick={() => heandler("l")} >
                <Image src="/img/arrowl.png" layout='fill' />
            </div>
            <div className={styles.myloveisgone}>
            {/* style={{transform:`translateX(${-100*itemm}vw)`}} */}
                <div className={styles.couldyoubeloved} style={{transform:`translateX(${-100*itemm}vw)`}}>
{/* {arew.map((intem,i)=>(<></>))} */}
                    {/* <div className={styles.imgfeature} >
                        <Image src={arew[itemm].img} layout='fill' objectFit='contain' />
                    </div> */}
                    <div className={styles.jahprovide}>
                        <div className={styles.feelalright}>
                            <h1>{arew[itemm].title}</h1>
                        </div>
                        <div className={styles.bufflow}>
                            <span>{arew[itemm].desc}</span>
                        </div>


                    </div>
                </div>

            </div>
            <div className={styles.igorright} onClick={() => heandler("r")}>
                <Image src="/img/arrowr.png" layout="fill" />
            </div>
        </div>)
}
export default Featured