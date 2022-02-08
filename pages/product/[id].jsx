import styles from '../../styles/product.module.css'
import Image from 'next/image'
import axios  from 'axios'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addProduct} from '../../redux/cartSlice'

 const Product = ({pitza}) => {
const dispatch=useDispatch()

const[total,setTotal]=useState(0)
    const [price,setPrice]=useState()
    const [itemPrice,setItemPrice]=useState(pitza.price[0])
    const [extraItems,setExtraItem]=useState([])
    const [quantity,setQuantity]=useState(1)
   
    const sizehandler=(jio)=>{
        // console.log(jio)
            jio?setItemPrice(pitza.price[jio]):setItemPrice(pitza.price[0])
    }
    const handler=(e,item)=>{
        
        
        const checked=e.target.checked
        if(checked){
            // console.log(item.name)
            setItemPrice(itemPrice+item.price)
setExtraItem((prev)=>[...prev,item])
//             setExtraItem((prev)=>[...prev,item])

    
        }
        else{
            setItemPrice(itemPrice-item.price)
            setExtraItem(extraItems.filter((extraItems)=>extraItems._id !== item._id))
        }

    }
    const jiopino=(e)=>{
        
        if(quantity<1){
            setQuantity(1)
        }
        else{
            setQuantity(parseInt(e.target.value))
        }
        

    }
    // console.log(total)
    // console.log(quantity)
    const chechkoutthehandle=()=>{
        setTotal(quantity*itemPrice)
        // console.log(itemPrice)
    //    console.log(quantity)
      
    //    console.log("total is "+finalTotoal)
       
   dispatch(addProduct({...pitza,itemPrice,extraItems,quantity,total}))
   }
    return (<div className={styles.product}>
        <div className={styles.agwagineshingi}>
            <Image src={pitza.img} width="500" height="500" className={styles.anchianchi} />
        </div>
        <div className={styles.keyetmetatrtaresh}>
            <div className={styles.tafya}>
                <span className={styles.anchcnhi}>
                    {pitza.title}
                </span>
            </div>
            <div className={styles.tafya}>
                <span className={styles.dundundundarara}>
                  $ {itemPrice}
                </span>
            </div>
            <div className={styles.tafya}>
                <span className={styles.metawsigesgegs}>
                    {pitza.discription}
                </span>
            </div>
            <div className={styles.tafya}>
                <span className={styles.wekilneshkelay}>
                    choose the size
                </span>
                <div className={styles.jaletejira}>
                    <div className={styles.selamachnybza}>
                        <Image src="/img/size.png" width="25" height="25" className={styles.lio}  onClick={(e)=>sizehandler(0)}/>
                        <span className={styles.lhunmoign}>
                            small
                        </span>
                    </div>
                    {pitza.price[1]?<div className={styles.selamachnybza}>
                        <Image src="/img/size.png" width="35" height="35" className={styles.lio}  onClick={(e)=>sizehandler(1)}/>
                        <span className={styles.lhunmoign}>
                            medium
                        </span>
                    </div>:<span></span>}
                    {
                        pitza.price[2]?<div className={styles.selamachnybza}>
                        <Image src="/img/size.png" width="45" height="45" className={styles.lio}  onClick={(e)=>sizehandler(2)}/>
                        <span className={styles.lhunmoign}>
                            large
                        </span>
                    </div>:<span></span>
                    }
                    
                </div>
            </div>
            <div className={styles.tafya}>
                <span className={styles.wekilneshkelay}>
                    choose additional ingridients
                </span>
                <div className={styles.jaletejira}>
                    {/* {console.log(pitza.options)} */}
                    {pitza.options.map((items,i)=>(<div className={styles.esktseer} key={i}>
                        <input type="checkbox" id={items.name} name={items.name} value={items.price} className={styles.heylordyouknowimtired} onChange={(e)=>handler(e,items)}/>
                        <label className={styles.jaleltite}>
                            {items.name}
                        </label>
                    </div>))}
                    
                    
                </div>
            </div>
            <div className={styles.letmecome}>
                <input type="number" className={styles.erererer} defaultValue={1} onClick={(e)=>jiopino(e)} min={1} max={7}/>
                <div className={styles.tsyaywam}>
                    <button className={styles.ashabelyaho} onClick={chechkoutthehandle}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>)
}
export default Product
export const getServerSideProps=async({params})=>{

    const reponce=await axios.get(`http://localhost:3000/api/product/${params.id}`)
    
  return { props: (async function () {
    return {
      pitza: reponce.data.data,
    }
  })(),
};
}