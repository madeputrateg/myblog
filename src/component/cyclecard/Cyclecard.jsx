import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {FiArrowLeft} from "react-icons/fi";
import {FiArrowRight} from "react-icons/fi";
import { useLayoutEffect, useState, useRef} from "react";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import style from "./Cyclecard.module.css";
function useWidth(){
    const [width,setWidth]=useState(0)
    useLayoutEffect(()=>{
        const  dectectwidth= ()=>{
            setWidth([window.innerWidth])
        }
        window.addEventListener('resize',dectectwidth);
        dectectwidth();
        return ()=> window.removeEventListener('resize',dectectwidth);
    },[])
    return width;
}
    
    
function Cyclecard(props){
    function makeLinkHandeler(link){
        return (e)=>{
            window.open(link,'_blank')
        }
    }
    const data = props.data;
    const w=useWidth();
    const show = useRef([])
    const moduleround =(val,mod)=>{
        let modval = val%mod;
        if(modval<0){
            modval=data.length+modval;
        }
        return modval;
    }
    const cardWidthAjust = ()=>{
        if (w<992){
            const theval=[data[moduleround(props.select,data.length)]];
            show.current=theval;   
        }else{

            show.current=[data[moduleround(props.select-1,data.length)],data[moduleround(props.select,data.length)],data[moduleround(props.select+1,data.length)]];
            // buat nge show semua slidenya dari data
        }
    }
    cardWidthAjust();
    const rightClick = (e)=>{
        const rightnow=props.select;
        props.onSelect(rightnow+1);
        cardWidthAjust();
    }
    const leftClick = (e)=>{
        const rightnow=props.select;
        props.onSelect(rightnow-1);
        cardWidthAjust();
    }
    return (<Container fluid className="position-relative d-flex w-100 align-items-center justify-content-center">
        <FiArrowLeft className={style.imagesize} onClick={leftClick}/>
            {show.current.map((val,ind)=>{
                if (val.link){
                    const linkHandeler=makeLinkHandeler(val.link)
                    return(
                            <Card key={ind+"cards"} style={{width:'14em',height:'19em'}} className="position-relative overflow-hidden mx-3" onClick={linkHandeler}>
                                <Card.Img variant="top" src={val.img} style={{height:'8em'}}></Card.Img>
                                <Card.Body>
                                    <Card.Title>{val.title}</Card.Title>
                                    <Card.Text>
                                    {val.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    )
                }
                return(
                    <Card key={ind+"cards"} style={{width:'14em',height:'19em'}} className="position-relative overflow-hidden mx-3">
                    <Card.Img variant="top" src={val.img} style={{height:'8em'}}></Card.Img>
                    <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                        {val.text}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                )
            })}
        <FiArrowRight className={style.imagesize} onClick={rightClick}/>
    </Container>)
}

export default Cyclecard;
