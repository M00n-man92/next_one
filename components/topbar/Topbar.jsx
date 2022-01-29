import styles from '../../styles/tobar.module.css'
import Image from 'next/image'
const Topbar=()=>{
return(<div className={styles.topbar}>
  {/* <Image src='/img/baddie not a saddie ❤️‍🔥.jpg' alt='' width='300' height='300' />   */}
  <div className={styles.right}>
      <div className={styles.donrecording}>
          <Image className={styles.colorog} src='/img/phj.png ' alt='' width='30' height='30'/>
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
          <li className={styles.lovemyself}>drank</li>
          <li className={styles.lovemyself}>glss</li>
          <li className={styles.lovemyself}>loose</li>
          <li className={styles.lovemyself}>
          <Image className={styles.feelmypain} src="/img/I'm a Ruin_ fotografia.jpg"alt='' width='100' height='40'/>
          </li>
          
          <li className={styles.lovemyself}>wont</li>
          <li className={styles.lovemyself}>peer</li>
          <li className={styles.lovemyself}>restroom</li>
      </ul>
  </div>
  <div className={styles.left}>
  <Image src='/img/cart.png' width='30' height='30' className={styles.antony}/>
      <div className={styles.heynow}>
          <span className={styles.mercedis}>
3
          </span>
      </div>
  </div>
</div>)
}
export default Topbar