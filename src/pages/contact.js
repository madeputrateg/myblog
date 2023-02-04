import Navbarblog from "@/component/Navbar/Navbarblog";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import Footer from "@/component/footer/footer";


function Contact(props){
    return (<div style={{height:'100vh'}}>
        <Navbarblog></Navbarblog>
        <Container fluid>
            <Row className="postision-relative w-100 h-100 d-flex align-items-center justify-content-center h1 my-5">
                Contact list
            </Row>
            <Row >
                contact 1
            </Row>
            <Row >
                contact 2
            </Row>
            <Row >
                contact 3
            </Row>
            <Row >
                contact 4
            </Row>
        </Container>
        <Footer/>
    </div>)
}

export default Contact;