import Navbarblog from "@/component/Navbar/Navbarblog";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import Footer from "@/component/footer/footer";
import {AiFillGithub} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import Image from "next/image";



function Contact(props){
    function imageclickHandler(e){
        window.open("https://docs.google.com/document/d/18ZsyZcJefuF72L9q_X6fVK_h4Z8NKEdC4LmCRrH_u8E/edit?usp=sharing",'_blank')
    }
    return (<div className="position-relative">
        <Navbarblog></Navbarblog>
        <Container fluid className="position-relative p-0 m-0 align-items-center justify-content-center">
            <Row className="postision-relative w-100 h-100 d-flex align-items-center justify-content-center h1 my-5">
                Contact list
            </Row>
            <Row className="postision-relative p-0 m-0">   
                <Col lg={6} className="postision-relative">
                    <Row lg={12} className="postision-relative d-flex justify-content-center align-items-center h4">
                        My Personal CV
                    </Row>
                    <Row lg={8} className="position-relative d-flex justify-content-center align-items-center">
                        <Image 
                        src="https://drive.google.com/uc?id=1NG3LFkAwjcgwUvEuJWn0jmfzwzYAb4yj"
                        height={500}
                        width={300}
                        alt="cv"
                        style={{objectFit:"contain"}}
                        onClick={imageclickHandler}
                        >
                        </Image>
                            
                    </Row>
                </Col>
                <Col lg={{span:6,order:'first'}} className="postision-relative p-0">
                    <Row className="d-flex justify-content-center h4">
                        Contact info
                    </Row >
                    <Row className="d-flex jjustify-content-center align-items-center h6">
                        <Col lg={5} className="d-flex justify-content-lg-end justify-content-center">
                            <AiFillGithub style={{height:"3rem",width:"3rem"}}></AiFillGithub>
                        </Col>
                        <Col lg={7} className="d-flex justify-content-lg-start justify-content-center">
                            https://github.com/madeputrateg
                        </Col>
                    </Row >
                    <Row className="d-flex justify-content-center align-items-center h6" >
                        <Col lg={5} className="d-flex d-flex justify-content-lg-end justify-content-center">
                            <BsWhatsapp style={{height:"3rem",width:"3rem"}}/> 
                        </Col>
                        <Col lg={7} className="d-flex justify-content-lg-start justify-content-center">
                            08123710354
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center h6" >
                        <Col lg={5} className="d-flex d-flex justify-content-lg-end justify-content-center">
                            <AiFillLinkedin style={{height:"3rem",width:"3rem"}}/> 
                        </Col>
                        <Col lg={7} className="d-flex justify-content-lg-start justify-content-center">
                            www.linkedin.com/in/putrateguh
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center h6" >
                        <Col lg={5} className="d-flex d-flex justify-content-lg-end justify-content-center">
                            <AiOutlineInstagram style={{height:"3rem",width:"3rem"}}/> 
                        </Col>
                        <Col lg={7} className="d-flex justify-content-lg-start justify-content-center">
                            teguhkuh
                        </Col>
                    </Row>         
                </Col>
            </Row>
        </Container>
    </div>)
}

export default Contact;