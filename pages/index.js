import Head from 'next/head'
import Image from 'next/image'
import axios from "axios"
import Featured from '../components/featured/Featured'
import Footer from '../components/footer/Footer'
import Layout from '../components/layout'
import PitzaList from '../components/pitzalist/PitzaList'
import styles from '../styles/Home.module.css'
import Cart from './cart'
import {useState} from 'react'

// import Product from '../components/product/Product'


  // getserversideProps()
  // console.log("icon livin ")
 
export const getServerSideProps=async()=>{

    const reponce=await axios.get("http://localhost:3000/api/product")
    
  return { props: (async function () {
    return {
      pitzaList: reponce.data.data,
    }
  })(),
};

  
  
}
  // console.log(reponce.data.data)
  
export default function Home({pitzaList}) {
 
  console.log("creepin up on my mind "+pitzaList)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>little italy in eth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
     
     <Featured/>
     <PitzaList pitzaList={pitzaList}/>
   
    </div>
  )
}


// export const getserversideProps=async()=>{
// const reponce=await axios.get("http://localhost:3000/api/product")
// console.log(reponce.data.data)
// return{props:{
//   pitzaList:reponce.data.data
// }}
// }

