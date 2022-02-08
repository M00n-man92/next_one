import styles from '../../styles/tobar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Topbar = () => {
  const quantity = useSelector((state) => state.cart.quantity
  )
  // console.log(quantity)
  return (<div className={styles.topbar}>
    {/* <Image src='/img/baddie not a saddie ❤️‍🔥.jpg' alt='' width='300' height='300' />   */}
    <div className={styles.right}>
      <div className={styles.donrecording}>
        <Image className={styles.colorog} src='/img/phj.png ' alt='' width='30' height='30' />
      </div>
      <div className={styles.ohohoh}>

        <span className={styles.sexy}>
          Call Now
        </span>
        <span className={styles.justbe}>
          091122334455
        </span>

      </div>
    </div>
    <div className={styles.center}>
      <ul className={styles.poilice}>
        <Link href="/" passHref ><li className={styles.lovemyself}>Home</li></Link>
        
        <li className={styles.lovemyself}>glss</li>
        <li className={styles.lovemyself}>loose</li>
        <li className={styles.lovemyself}>
          <Image className={styles.feelmypain} src="/img/I'm a Ruin_ fotografia.jpg" alt='' width='100' height='40' />
        </li>

        <li className={styles.lovemyself}>wont</li>
        <li className={styles.lovemyself}>peer</li>
        <li className={styles.lovemyself}>restroom</li>
      </ul>
    </div>
    <div className={styles.left}>
      <Link href='/cart' passHref>
        <div className={styles.onthenightiwasboen}>
          <Image src='/img/cart.png' width='30' height='30' className={styles.antony} />
          {quantity > 0 ? <div className={styles.heynow}>
            <span className={styles.mercedis}>
              {quantity}
            </span>
          </div> : <></>}
        </div>
        </Link>  
    </div>
  </div>)
}
export default Topbar