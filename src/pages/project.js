import Navbarblog from "@/component/Navbar/Navbarblog";
import Cyclecard from "@/component/cyclecard/Cyclecard";
import Bodytext from "@/component/bodytext/Bodytext";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import { useState } from "react";
import Footer from "@/component/footer/footer";

const data=[
    {
        title:"Agen Sertifikat",
        text:"agen sertifikat adalah websites yang dibuat untuk memudahkan pengguna di dalam pembuatan sertifikat",
        img:"/agenser.svg",
        link:"https://kelompokrplunud.github.io/front-end1/",
    },
    {
        title:"AI batu gunting kertas",
        text:"AI adalah suatu mesin yang diberikan beberapa data agar dapat melakukan hal-hal yang sulit dilakukan menggunakan bahasa pemerogramaan. saya memebuat ai ini karena ingin memperdalam kemampuan di dalam machine learning",
        img:"/gtt.png",
    },
    {
        title:"SIC backend",
        text:"SIC memiliki website yang digunakan oleh organisasi tersebut untuk mengenalkan kegiatan dan anggota yang dimiliki oleh organisasi tersebut. website tersebut direncanakan untuk diupgrade sehingga memiliki backend yang menggunakan bahasa golang",
        img:"/golang-img.png",
        link:"https://github.com/SIC-Unud/sic-web-backend",
    }
]

function Project(props){
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
                    project
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

export default Project;