import { Container, Row, Col, Button, Table } from "reactstrap";
import list from "../../images/icon-list.png";
import ilustrasi from "../../images/ilustrasi.png";
import deal from "../../images/icon-deal.png";
import adira from "../../images/logo-adira.png"
import mandiri from "../../images/mandiri-logo.png"
import mega from "../../images/logo-mega.png"
import akulaku from "../../images/akulaku.png"
import baf from "../../images/logo-baf.png"

export default function Loan() {
  return (
    <div>
      <Container className="text-center mt-5">
        <h4>#CaraPintarCariPinjaman</h4>
        <p>
          OTOMOTO menjalin kerja sama dengan perusahaan pembiayaan terkemuka
          yang menyediakan pinjaman dana tunai bagi pemilik kendaraan.
        </p>
        <h4>Keuntungan Ajukan Pinjaman menggunakan OTOMOTO</h4>
        <div>
          <Row className="mt-5">
            <Col xs="6" sm="6">
              <Row>
                <Col xs="12" sm="8">
                  <img src={list} alt="list" />
                </Col>
                <Col xs="12" sm="4">
                  <p style={{ fontSize: "18px" }}>
                    Proses pengajuan aman dan data terjamin
                  </p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" sm="8">
                  <img src={deal} alt="deal" />
                </Col>
                <Col xs="12" sm="4">
                  <p style={{ fontSize: "18px" }}>
                    Mitra perusahaan pembiayaan berskala nasional dimanapun Anda
                    berada
                  </p>
                </Col>
                <Button style={{ width: "100%", backgroundColor: "#94EA93" }}>
                  DAPATKAN HARGA
                </Button>
              </Row>
            </Col>
            <Col xs="6" sm="6">
              <img src={ilustrasi} alt="ilustrasi" />
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <h3 style={{ color: "#696969" }}>Penawaran OTOMOTO Indonesia</h3>
          <div className="mt-5">
          <Table responsive bordered>
      <thead>
        <tr>
          <th style={{backgroundColor: "#696969", color: 'white'}}>Jenis Pinjaman</th>
          <th style={{backgroundColor: "#696969", color: 'white'}}>Bunga per Bulan</th>
          <th style={{backgroundColor: "#696969", color: 'white'}}>Minimum Pinjaman</th>
          <th style={{backgroundColor: "#696969", color: 'white'}}>Tenor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
   
          <td>Jaminan BPKB Motor</td>
          <td>Mulai 1.4%</td>
          <td>2 Juta</td>
          <td>6-36 Bulan</td>
        </tr>
        <tr>

          <td>Jaminan BPKB Mobil</td>
          <td>Mulai 0.85%</td>
          <td>10 Juta</td>
          <td>12-60 Bulan</td>
        </tr>
      </tbody>
    </Table>
          </div>
        </div>
        <div className="mt-5">
          <h3>Partner Pembiayaan Kami</h3>
          <Row className="mt-5 m-5">
            <Col xs="6" sm="2">
              <img src={adira} alt="adira"/>
            </Col>
            <Col xs="6" sm="2">
              <img src={mandiri} alt="mandiri"/>
            </Col>
            <Col xs="6" sm="2">
              <img src={mega} alt="mega"/>
            </Col>
            <Col xs="6" sm="2">
              <img src={akulaku} alt="akulaku"/>
            </Col>
            <Col xs="6" sm="2">
              <img src={baf} alt="baf"/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
