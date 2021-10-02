import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import classnames from "classnames";

import PriceEngine from "./tabs/price_engine";
import Inspections from "./tabs/inspection";
import Booking from "./tabs/booking";
import Loan from "./tabs/loan";

const listContent = [
  {
    id: "price",
    title: "PRICE ENGINE",
    img:
      "https://otomoto.id/wp-content/uploads/2019/07/Icon-PE_300x300px-1.png",
    content: <PriceEngine/>,
  },
  {
    id: "jubelmoto",
    title: "JUBELMOTO",
    img:
      "https://otomoto.id/wp-content/uploads/2019/07/Icon-JUBELMOTO_300x300px-1.png",
    content: <h1>jubelmoto</h1>,
  },
  {
    id: "inspection",
    img:
      "https://otomoto.id/wp-content/uploads/2019/07/Icon-SI_300x300px-1.png",
    title: "SMART INSPECTION PRO",
    content: <Inspections/>,
  },
  {
    id: "booking",
    title: "BOOKING SERVICE",
    img: "https://otomoto.id/wp-content/uploads/2019/07/Icon-BS_300x300px.png",
    content: <Booking/>,
  },
  {
    id: "loan",
    title: "LOAN",
    img:
      "https://otomoto.id/wp-content/uploads/2019/07/Icon-LOAN_300x300px.png",
    content: <Loan/>,
  },
];

const TabsHeader = (props) => {
  const { tabContent, switchTab, activeTab } = props;

  return (
    <Nav tabs>
      {tabContent.map((header) => {
        const { title, img, id } = header;
        return (
          <NavItem key={id}>
            <NavLink
              className={classnames({ active: activeTab === id })}
              onClick={() => {
                switchTab(id);
              }}
            >
            <img src={img} alt={title} width={60} height={60} />
              <p style={{ margin: 0 }}>{title}</p>
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

const TabsContent = ({children,title}) => {
  return (
    <TabPane tabId={title}>
      <Row>
        <Col sm="12">
         {children}
        </Col>
      </Row>
    </TabPane>
  );
};

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("home");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Container>
        <div className="border-list mt-3 text-center">
      <TabsHeader
        switchTab={toggle}
        tabContent={listContent}
        activeTab={activeTab}
      />
      </div>
      <TabContent activeTab={activeTab}>
        {listContent.map((item, idx) => {
          return <TabsContent title={item.id}>{item.content}</TabsContent>;
        })}
      </TabContent>
      </Container>
    </div>
  );
};

export default Tabs;
