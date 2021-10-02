import { Container, Row, Col } from "reactstrap";
import inspections from "../../images/inspection-logo.png";
import mekanik from "../../images/mekanik.png";
import akurasi from "../../images/akurasi.png";
import dealer from "../../images/dealer.png";
import mfc from "../../images/mfc.png";
import service from "../../images/service.png";

export default function Inspections() {
  return (
    <div>
      <Container className="text-center mt-5">
        <div>
          <div>
          <h4>#CaraPintarCekKondisiMotor</h4>
          <p className="mt-5">
            Dengan layanan Smart Inspection, ketahui kondisi kendaraan Anda
            secara lebih detail. Sistem Smart Inspection juga dirancang
            menggunakan algoritma otomatis dengan memperhitungkan penilaian dari
            mekanik yang handal dan tersertifikasi untuk memastikan keakurasian
            nilai serta kondisi asli kendaraan Anda.
          </p>
          <img src={inspections} alt="inspections" />
        </div>
        <div className="mt-5" style={{backgroundColor: '#EFEFEF'}}>
          <h4>Keuntungan Inspeksi Kendaraan menggunakan OTOMOTO</h4>
          <p className="mt-5">
            Smart Inspection dapat digunakan sebagai alat untuk menentukan dan
            verifikasi nilai serta kondisi kendaraan sebagai standar acuan
            pengguna ketika membeli kendaraan bekas dari dealer atau dari
            penjual lainnya, menjual kendaraan kepada calon pembeli, atau pada
            saat mengajukan pinjaman
          </p>
          <div className="mt-5">
            <Row style={{marginLeft: '105px'}}>
              <Col xs="6" sm="2">
                <img src={mekanik} alt="mekanik" />
                <p className="mt-3">
                  <b>Mekanik Bersertifikat</b> Penilaian kondisi kendaraan
                  dilakukan mekanik handal & tersertifikasi
                </p>
              </Col>
              <Col xs="6" sm="2">
                <img src={akurasi} alt="akurasi" />
                <p className="mt-3">
                  <b>Hasil Akurat</b>
                  <br />
                  Hasil estimasi harga yang akurat
                </p>
              </Col>
              <Col xs="6" sm="2">
                <img src={dealer} alt="dealer" />
                <p className="mt-3">
                  <b>Acuan Dealer</b>
                  <br />
                  Standar acuan untuk jual beli kendaraan
                </p>
              </Col>
              <Col xs="6" sm="2">
                <img src={mfc} alt="mfc" />
                <p className="mt-3">
                  <b>Acuan MFC</b>
                  <br />
                  Standar acuan untuk para Mitra Leasing OTOMOTO
                </p>
              </Col>
              <Col xs="6" sm="2">
                <img src={service} alt="service" />
                <p className="mt-3">
                  <b>Service Improvement</b>
                  <br />
                  Meningkatkan kondisi kendaraan di Mitra Bengkel OTOMOTO
                </p>
              </Col>
            </Row>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
}
