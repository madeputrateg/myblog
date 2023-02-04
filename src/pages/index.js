import Head from 'next/head'
import Image from 'next/image'
import Herohome from '@/component/Hero/Herohome.jsx'
import Navbarblog from '@/component/Navbar/Navbarblog.jsx'
import Bodytext from '@/component/bodytext/Bodytext'
import { Container } from 'react-bootstrap'
import styles from '@/styles/Home.module.css'
import Footer from "@/component/footer/footer";


const data=[
  {
    paragraf:"Ajak atau ajag (Cuon alpinus)[2] adalah anjing hutan yang hidup di Asia, terutama di wilayah selatan dan timur. Ajak tidak sama dengan serigala.Ajak merupakan anjing asli Nusantara, terdapat di pulau Sumatra dan Jawa, mendiami terutama kawasa pegunungan dan hutan. Anjing kampung dan yang lainnya yang biasa dijadikan peliharaan di Indonesia, sebenarnya merupakan anjing impor yang berasal dari daerah lain. Ajak berperawakan sedang, berwarna cokelat kemerahan. Di bagian bawah dagu, leher, hingga ujung perut berwarna putih, sedangkan ekornya tebal kehitaman. Ajak biasa hidup bergerombol dalam lima hingga dua belas ekor, tergantung lingkungannya. Namun, pada keadaan tertentu, ajak dapat hidup soliter (menyendiri), seperti yang ditemukan di Taman Nasional Gunung Leuser dan Taman Nasional Bromo (Pasuruan).",
    title:"About MySelf",
    gambar:"/serigala.jpg",
  },
  {
    paragraf:"masih berusaha buat ;(",
    title:"project",
    gambar:"",
  },
  {
    paragraf:"belajar dengan rajin dan giat :)",
    title:"Hobby",
    gambar:"/buku.png",
  },  
  {
    paragraf:"tetapi di saat masih kecil",
    title:"Muka suhar",
    gambar:"/suhar.png",
  }
]

export default function Home() {
  return (
    <div>
      <Navbarblog></Navbarblog>
      <div>
        <Herohome></Herohome>
        {data.map((val,ind)=>{
          return(<Bodytext key={val.title} reverse={ind%2==0} title={val.title} gambar={val.gambar} paragraf={val.paragraf}></Bodytext>);
        })}
      </div>
      <Footer/>
    </div>
  )
}
