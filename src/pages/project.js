import Navbarblog from "@/component/Navbar/Navbarblog";
import Cyclecard from "@/component/cyclecard/Cyclecard";
import Bodytext from "@/component/bodytext/Bodytext";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import { useState } from "react";
import Footer from "@/component/footer/footer";

const data=[
    {
        title:"agen sertifikat",
        text:"agen sertifikat adalah websites yang dibuat untuk memudahkan pengguna di dalam pembuatan sertifikat",
        img:"/serigala.jpg",
    },
    {
        title:"test",
        text:"agen sertifikat adalah websites yang dibuat untuk memudahkan pengguna di dalam pembuatan sertifikat",
        img:"/serigala.jpg",
    },
    {
        title:"test2",
        text:"agen sertifikat adalah websites yang dibuat untuk memudahkan pengguna di dalam pembuatan sertifikat",
        img:"/serigala.jpg",
    }
]

function Project(props){
    const moduleround =(val,mod)=>{
        let modval = val%mod;
        if(modval<0){
            modval=(modval*-1)-1;
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
            <Footer/>
        </div>
    )
}

export default Project;