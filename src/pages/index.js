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
    paragraf:"Hi let Me Intruduced myself my name is made putra teguh pramana and i am currently stuying to become a data analyis at udayana university. this blog is about my achivement and project that ihave made",
    title:"About MySelf",
    gambar:"/self.png",
  },
  {
    paragraf:"Here is some of my personal project that i made during my spare time that i have. all of it are hosted in this websites",
    title:"project",
    gambar:"/projectid.png",
  },
  {
    paragraf:"Here is some of my achievement that i have achieve",
    title:"Achievement",
    gambar:"/achv.png",
  },  
  {
    paragraf:"if you want to contact me, feel free to do so by contacting my contact information that's available in the websites ",
    title:"Contact info",
    gambar:"/contactt.png",
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
    </div>
  )
}
