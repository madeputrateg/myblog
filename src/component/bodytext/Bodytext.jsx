import { Container } from "react-bootstrap";
import Image from "next/image";
import style from "./Bodytext.module.css";
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

const robotoheavy = Roboto({
weight: '900',

subsets: ['latin'],
})

function Bodytext(props){
    let rev;
    let colour;
    if (props.reverse){
        rev="flex-lg-row-reverse";
        colour="#f7f7f7";
    }else{
        rev="flex-lg-row";
        colour="#ffffff";
    }
    return(<Container fluid className={"position-relative p-5 d-flex flex-column "+rev+" align-items-center justify-content-between "+ style.container} style={{backgroundColor:colour}}>
        <Container fluid className="position-relative d-flex flex-column w-100 h-100 align-items-center justify-content-center">
                <div className={robotoheavy.className+" h2"}>{props.title}</div>
                <div className={roboto.className}>{props.paragraf}</div>
        </Container>
        <Container fluid className="position-relative d-flex w-100 h-100 align-items-center justify-content-center">
                <Image
                        src={props.gambar}
                        alt="gambar"
                        fill
                        style={{objectFit:"contain"}}
                        >    
                </Image>
        </Container>
    </Container>)
}

export default Bodytext;