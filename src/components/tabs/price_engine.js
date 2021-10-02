import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  FormText,
  Container,
  Row,
} from "reactstrap";
import "../style.css";
import logo from "../../images/logo.png";
import time from "../../images/time-logo.png";
import price from "../../images/price-logo.png";
import rp from "../../images/rp-logo.png";

export default function PriceEngine() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col xs="6" sm="6">
            <div>
              <h4 className="cara-pintar">#CaraPintarCekHargaKendaraan</h4>
              <p style={{fontSize: '20px'}}>
                Sistem Price Engine OTOMOTO adalah yang pertama dan satu-satunya
                di Indonesia yang dirancang dengan algoritma otomatis dan cerdas
                sehingga pengguna dapat mengetahui estimasi harga kendaraannya
                di pasaran secara akurat.
              </p>
            </div>
          </Col>
          <Col className="col-group" xs="6" sm="6">
            <div className="text-center form-size">
              <div className="form-group">
                <Col sm={10}>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </Col>
              </div>
              <div className="form-group">
                <Col sm={10}>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </Col>
              </div>
              <div className="form-group">
                <Col sm={10}>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </Col>
              </div>
              <div className="form-group">
                <Col sm={10}>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </Col>
              </div>
              <div className="form-group">
                <Col sm={10}>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </Col>
              </div>
              <Col sm={10}>
                <Button className="btn-form">DAPATKAN HARGA</Button>
              </Col>
            </div>
            <div className="text-center">
              <p
                style={{
                  color: "lightgrey",
                  fontSize: "12px",
                  marginRight: "15px",
                }}
              >
                Powered by:
              </p>
              <img className="mb-3" src={logo} alt="logo" />
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <h3>Keuntungan Menggunakan Otomoto</h3>
          <Row className="mt-5">
            <Col xs="6" sm="6">
              <h4>Cara Lama</h4>
            </Col>
            <Col xs="6" sm="6">
              <h4>Cara Baru</h4>
            </Col>
            <div >
              <Row className="mt-5" style={{backgroundColor: '#F1F1F1'}}>
              <Col className="mt-5" xs="4" sm="4">
                <h4>Butuh waktu lama</h4>
              </Col>
              <Col className="box-sizing" xs="4" sm="4">
                <img style={{marginTop: '30px'}}src={time} width="70px"/>
              </Col>
              <Col className="mt-5" xs="4" sm="4">
                <h4>Cepat dan terpercaya</h4>
              </Col>
              </Row>
            </div>
            <div >
              <Row className="mt-5" style={{backgroundColor: '#F1F1F1'}}>
              <Col className="mt-5" xs="4" sm="4">
                <h4>Cek & bandingkan di berbagai marketplace atau dealer kendaraan bekasa</h4>
              </Col>
              <Col className="box-sizing" xs="4" sm="4">
                <img style={{marginTop: '30px'}}src={price} width="70px"/>
              </Col>
              <Col className="mt-5" xs="4" sm="4">
                <h4>Cukup di aplikasi OTOMOTO Langsung dari HP</h4>
              </Col>
              </Row>
            </div>
            <div >
              <Row className="mt-5" style={{backgroundColor: '#F1F1F1'}}>
              <Col className="mt-5" xs="4" sm="4">
                <h4>Harga tidak menentu tergantung penjual</h4>
              </Col>
              <Col className="box-sizing" xs="4" sm="4">
                <img style={{marginTop: '30px'}}src={rp} width="70px"/>
              </Col>
              <Col className="mt-5" xs="4" sm="4">
                <h4>Harga berdasarkan data analisa pasar dan algoritma otomatis yang setiap saat mengikuti perkembangan harga pasar</h4>
              </Col>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
