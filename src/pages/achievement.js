import Navbarblog from "@/component/Navbar/Navbarblog";
import Cyclecard from "@/component/cyclecard/Cyclecard";
import Bodytext from "@/component/bodytext/Bodytext";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import { useState } from "react";
import Footer from "@/component/footer/footer";


const data=[
    {
        title:"CP competition",
        text:"it was a programing competition that was held in universitas sumatera, the competition was a team of three and we manage to win by a slim chances",
        img:"/unvsum.png",
    },
    {
        title:"leetcode",
        text:"i finish all the easy task in leetcode. i did it on python programming languange since it requiered some level of focus to finish them but i overcame it.",
        img:"/ml.jpg",
    },
    {
        title:"porseni",
        text:"one of the competition that was held in porseni was mobile legend competition. i thought to myself i give it a try and to myself i was suprise i won 1st place",
        img:"/leet.png",
    },
    {
        title:"kaggle machinelearning tutorial",
        text:"i finish some course that avilable in kaggle that's related to machine learning.most of the machine learning course in kaggle are using tensorflow and sklearn",
        img:"/kaggle.png",
    },
    {
        title:"tensor flow",
        text:"i did some of the tensorflow tutorial that avilable in tensorflow download page.",
        img:"/google.png",
    },
]

function Achievement(props){
    const moduleround =(val,mod)=>{
        let modval = val%mod;
        if(modval<0){
            modval=data.length+modval;
        }
        return modval;
    }
    const [Selected,SetSelected] = useState(0);
    const setSelectedHandler = (e)=>{
        SetSelected(e);
    }
    return(
        <div>
            <Navbarblog></Navbarblog>
            <Container fluid className="position-relative py-3">
                <Row className="postision-relative w-100 h-100 d-flex align-items-center justify-content-center h1 my-5">
                    Achievement
                </Row>
                <Row className="my-3">
                    <Cyclecard data={data} select={Selected} onSelect={setSelectedHandler}></Cyclecard>
                </Row>
                <Row className="my-3">
                    <Bodytext reverse={false} title={data[moduleround(Selected,data.length)].title} gambar={data[moduleround(Selected,data.length)].img} paragraf={data[moduleround(Selected,data.length)].text}></Bodytext>
                </Row>
            </Container>
        </div>
    )
}

export default Achievement;