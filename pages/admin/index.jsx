import styles from '../../styles/admin.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Admin = ({ product, order }) => {
    const [productList, setProlductList] = useState(product)
    const [orderList, setOrderList] = useState(order)
    const [dontwantnofuss, setDontwantnofuss] = useState(true)
    // const [wordoftheday]
    console.log(product)
    var time = 0
    console.log(time)
    const [canges, setCanges] = useState("")
    // useEffect(()=>{if(time==0){
    //     setCanges("Is Preparing")
    // }},[time])
    const mydaytodayfits = async (id) => {
        // const body={stat.isPreparing=+1,}
        const thisonweillelp=await axios.get("http://localhost:3000/api/order/"+id)

        const isPreparing=thisonweillelp.data.data.isPreparing
        const isOnTheWay=thisonweillelp.data.data.isOnTheWay
        const isDeliverd=thisonweillelp.data.data.isDeliverd
        // const uf=isFetching.status
        // console.log( isFetching)
        const sexersize=await axios.put("http://localhost:3000/api/order/"+id,{isPreparing:isPreparing+1,isOnTheWay:isOnTheWay+1,isDeliverd:isDeliverd+1})
        if(sexersize.data.success){
            console.log("done")
            console.log(sexersize.data.data)
            const data=sexersize.data.data
            if (data.isOnTheWay==1){
                const keepyourmouth=await axios.put("http://localhost:3000/api/order/"+id,{ whichisit:"Is on the way"})

            }
            else if(data.isDeliverd==1){
                const keepyourmouth=await axios.put("http://localhost:3000/api/order/"+id,{ whichisit:"Is at your door"})

            }
        }
    }
    const hanfler = async (id) => {
        const deleteproduct = await axios.delete("http://localhost:3000/api/product/" + id)
        // console.log(deleteproduct.data.success)
        if (deleteproduct.data.success == true) {

            setProlductList(productList.filter((item) => item._id !== id))

        }

        else if (deleteproduct.data.success == false) {
            setDontwantnofuss(false)
        }


        console.log("man put you outs")
    }
    useEffect(() => {


    }, [mydaytodayfits, productList])

    return (<div className={styles.admin}>
        <div className={styles.thisistrue}>
            <div className={styles.newyorkisthebest}>
                <span className={styles.igotangry}>
                    Products
                </span>
            </div>
            <div className={styles.youaresonumb}>
                <table className={styles.higher}>
                    <tbody>
                        <tr className={styles.butyouknewthatalready}>
                            <th className={styles.ineedyoutoreply}>

                                Image

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Id

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Title

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Price

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Action

                            </th>

                        </tr>
                    </tbody>
                    {productList.map((item, i) => (
                        <tbody key={i}>
                            <tr className={styles.butyouknewthatalready}>
                                <td className={styles.crynoew}>

                                    <div className={styles.iwillwaitfiryou}>
                                        <Image src={item.img} width="70" height="70" className={styles.anchianchi} />
                                    </div>
                                </td>
                                <td className={styles.ineedyoutoreplyeskamba}>
                                    <span className={styles.kingkennypluskey}>
                                        {item._id}
                                    </span>


                                </td>
                                <td className={styles.ineedyoutoreply}>

                                    <span className={styles.kingkenny}>
                                        {item.title}
                                    </span>


                                </td>
                                <td className={styles.ineedyoutoreply}>
                                    {item.price.map((item, i) => (<span className={styles.kingkenny} key={i}>
                                        {item},
                                    </span>))}
                                    
                                </td>
                                <td className={styles.ineedyoutoreply}>

                                    <div className={styles.theguythatgetsthetin}>
                                        <div className={styles.likorice}>
                                            <button className={styles.iloveyou}>
                                                Edit
                                            </button>
                                        </div>
                                        <div className={styles.likorice}>
                                            <button className={styles.rudystareintothecamersa} onClick={() => hanfler(item._id)}>
                                                Delete
                                            </button>
                                            {dontwantnofuss ? <></> : <span>server error please try again</span>}
                                        </div>
                                    </div>

                                </td>

                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>
        </div>
        <div className={styles.thisisit}>
            <div className={styles.newyorkisthebest}>
                <span className={styles.igotangry}>
                    Orders
                </span>
            </div>
            <div className={styles.youaresonumb}>
                <table className={styles.higher}>
                    <tbody>
                        <tr className={styles.butyouknewthatalready}>
                            <th className={styles.ineedyoutoreply}>

                                Id

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Customer

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Total

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Payment

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Status

                            </th>
                            <th className={styles.ineedyoutoreply}>

                                Action

                            </th>

                        </tr>
                    </tbody>
                    {orderList.map((item, i) => (
                        <tbody key={i}>
                            <tr className={styles.butyouknewthatalready}>
                                <td className={styles.crynoew}>

                                    <span className={styles.kingkennypluskey}>
                                        {item._id}
                                    </span>
                                </td>
                                <td className={styles.ineedyoutoreply}>

                                    <span className={styles.kingkenny}>
                                        {item.username}
                                    </span>

                                </td>
                                <td className={styles.ineedyoutoreply}>

                                    <span className={styles.kingkenny}>
                                        {item.price} Birr
                                    </span>

                                </td>
                                <td className={styles.ineedyoutoreply}>

                                    <span className={styles.kingkenny}>
                                        paid
                                    </span>

                                </td>
                                <td className={styles.ineedyoutoreply}>

                                    <span className={styles.kingkenny}>
                                        {item.whichisit}
                                    </span>

                                </td>
                                <td className={styles.ineedyoutoreply}>

                                    <div className={styles.theguythatgetsthetin}>
                                        <button className={styles.ypougonebe} onClick={() => mydaytodayfits(item._id)}>
                                            Next Stage
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>
        </div>
        <div className={styles.thecard}>

        </div>
    </div>)
}
export default Admin
export const getServerSideProps = async () => {
    const productresult = await axios.get("http://localhost:3000/api/product")
    const orderrsult = await axios.get("http://localhost:3000/api/order")
    return {
        props: (async function () {
            return {
                order: orderrsult.data.data,
                product: productresult.data.data
            }
        })(),
    };

}