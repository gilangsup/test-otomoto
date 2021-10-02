import { Container, Row, Col } from "reactstrap";
import book from "../../images/book.png";
import bengkel from "../../images/bengkel.png";
import jadwal from "../../images/jadwal.png";
import promo from "../../images/promo.png";
import reward from "../../images/reward.png";
import voucher from "../../images/voucher.png";

export default function Booking() {
  return (
    <div>
      <Container className="text-center mt-5">
        <div>
          <div>
            <h4>#CaraPintarNgurusMotor</h4>
            <p className="mt-5">
              Layanan Booking Service memudahkan Anda dalam merawat kendaraan.
              Kami sadar kendaraan sangat berarti bagi Anda. Lebih dari sekadar
              alat transportasi, kendaraan telah menjadi bagian dari keseharian
              hidup Anda. Berangkat dari kesadaran itu, kami menghadirkan cara
              yang lebih baik dalam merawatnya.
            </p>
            <img src={book} alt="book" />
          </div>
          <div className="mt-5" style={{ backgroundColor: "#EFEFEF" }}>
            <h4>Keuntungan Booking Service menggunakan OTOMOTO</h4>
            <p className="mt-5">
              Dengan layanan Booking Service, Anda dapat mengetahui berbagai
              informasi bengkel berkualitas yang sesuai dengan kebutuhan Anda
              seperti lokasi, waktu, dan jenis layanan yang tersedia di bengkel
              tersebut. Kami juga bekerjasama dengan mitra bengkel untuk
              memberikan promo – promo dan diskon menarik khususnya bagi Anda
              pengguna OTOMOTO.
            </p>
            <div className="mt-5">
              <Row style={{ marginLeft: "105px" }}>
                <Col xs="6" sm="2">
                  <img src={bengkel} alt="bengkel" />
                  <p className="mt-3">
                    <b>Direktori Bengkel</b> Penilaian kondisi kendaraan
                    dilakukan mekanik handal & tersertifikasi
                  </p>
                </Col>
                <Col xs="6" sm="2">
                  <img src={jadwal} alt="jadwal" />
                  <p className="mt-3">
                    <b>Jadwal</b>
                    <br />
                    Daftar bengkel berkualitas terdekat dari lokasi Anda
                  </p>
                </Col>
                <Col xs="6" sm="2">
                  <img src={promo} alt="promo" />
                  <p className="mt-3">
                    <b>Promo dan Diskon</b>
                    <br />
                    Promo dan diskon menarik yang membuat pengeluaran lebih hemat
                  </p>
                </Col>
                <Col xs="6" sm="2">
                  <img src={reward} alt="reward" />
                  <p className="mt-3">
                    <b>Point Reward</b>
                    <br />
                    Keuntungan berlipat dari merawat kendaraan Anda
                  </p>
                </Col>
                <Col xs="6" sm="2">
                  <img src={voucher} alt="voucher" />
                  <p className="mt-3">
                    <b>Voucher</b>
                    <br />
                    Kumpulkan point dan tukar dengan voucher kebutuhan sehari-hari
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
