import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <header className="py-3 border-bottom  ">
        <Row>
          <Col sm={8}>
            <div className="d-flex pt-1 d-sm-block justify-content-center">
              <input
                type="text"
                autoComplete="off"
                name="text"
                className="input ms-4"
                placeholder="Search"
              />
              <div></div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="align-items-center d-flex justify-content-center pt-3 pt-sm-0">
              <div className="pe-5">
                <span className="text-muted">Good Morning</span>
                <br />
                <span className="fs-4 fw-medium profileName">Məmmədov Cavid</span>
              </div>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
}
export default Header;
