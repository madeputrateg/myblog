import muka from "public/muka.svg";
import Image from 'next/image';
import { Roboto } from '@next/font/google'
import { Container } from "react-bootstrap";
import wave from "public/wave.svg";
import style from "./Herohome.module.css"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

  const robotoheavy = Roboto({
    weight: '900',
    
    subsets: ['latin'],
  })

function Herohome(props){
    return(
        <Container fluid className={"position-relative p-0 d-flex flex-column flex-lg-row align-items-center justify-content-between "+style.container} >
            <Container fluid className="position-relative h-100 w-100 p-0 m-0 d-flex align-items-center justify-content-center">
                <div className={style.wrapper} >
                    <div className={style.wavewrapper} >
                        <div className={style.wave} style={{backgroundImage:`url(${wave.src})`}}></div>
                    </div>
                </div>
                <Container className="position-relative h-100 w-50 d-flex flex-column align-items-center justify-content-center text-justify">
                    <div className={robotoheavy.className + " h3"}>Halo, Pekenalakan saya made putra teguh pramana</div>
                    <div className={roboto.className + " h5"}>-&quot;tetap teguh dimana yang lain tidak&quot;</div>
                </Container>
            </Container>
            <Container className="position-relative h-100 w-100">
                <Image
                src="muka.svg"
                alt="muka manusia"
                fill
                ></Image>
            </Container>
        </Container>
    )
}

export default Herohome;
