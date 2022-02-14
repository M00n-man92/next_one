import styles from '../styles/putmeonstages.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
// import { useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../redux/cartSlice'
const Beachdontkillmyvibe = ({ price, method, product }) => {
    // const cart = useSelector((state) => state.cart.product)
    // console.log(cart.product)
const dispatch=useDispatch()

    // const jsutfan=[{title:"trigger niga show me sum",
    //     discription:"alwasys got shit",
    //     price:89,
    //     img:"asdf",
    //     quantity:9,
    //     extraItems:[{name:"she see money allaroundme",price:98}]},{title:"trigger niga show me sum",
    //     discription:"alwasys got shit",
    //     price:89,
    //     img:"asdf",
    //     quantity:9,
    //     extraItems:[{name:"she see money allaroundme",price:98}]},{title:"trigger niga show me sum",
    //     discription:"alwasys got shit",
    //     price:89,
    //     img:"asdf",
    //     quantity:9,
    //     extraItems:[{name:"she see money allaroundme",price:98}]}]
    const [imhappy,setImhappy]=useState([])
    var bemyfate=[]
    product.map((item)=>{ const {itemPrice,extraItems,title,quantity}=item
    const relax={itemPrice,extraItems,title,quantity}
bemyfate.push(relax)}
    )
   console.log(bemyfate)
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")
    const router = useRouter()
    // console.log("rule jrgang")
    // console.log(name, phone, adress)
    const kendric = async (e) => {
        e.preventDefault()
        
        try {
            
            // var products = []
            // product.map((item) => products.push(item))
            // console.log(products)
            // setImhappy(bemyfate)
            console.log( bemyfate)
            const result=await axios.post("http://localhost:3000/api/order",{username:name,phonenumber:phone,adress,price,method,prdoucts:bemyfate})
            // console.log("thisi isn't working but dont know why yet one")
            
            // console.log("thisi isn't working but dont know why yet")
            if (result.data.success == true) {
                console.log(result.data.data)
                dispatch(reset())
                await router.push('/order/'+result.data.data._id)

            }
            else {
                console.log("there was a problem maybe check that you have inputed everything right")
            }
        }
        catch (err) {
            console.log("error on " + err)
        }
    }
    return (

        <div className={styles.Beachdontkillmyvibe}>
            <div className={styles.wrapper}>
                <span className={styles.somsaywhatp}>
                    You will be paying $67 upon delivery
                </span>
                <form action="" className={styles.lipard}>
                    <div className={styles.wewantyoutoscorethirty}>
                        <label htmlFor="" className={styles.coachcarter}>
                            Name
                        </label>
                        <input type="text" placeholder='Jhon Doe' className={styles.tayloermademusic} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles.wewantyoutoscorethirty}>
                        <label htmlFor="" className={styles.coachcarter}>
                            Phone Number
                        </label>
                        <input type="text" placeholder="0911111111" className={styles.tayloermademusic} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className={styles.wewantyoutoscorethirty}>
                        <label htmlFor="" className={styles.coachcarter}>
                            Adress
                        </label>
                        <textarea rows={5} placeholder="Addis Ababa, Bole" type="text" className={styles.weonaight} onChange={(e) => setAdress(e.target.value)} />
                    </div>
                    <div className={styles.wewantyoutoscorethirty}>
                        <button className={styles.momayousedtosay} onClick={(e)=>kendric(e)} >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>)
}
export default Beachdontkillmyvibe