import React from "react";
import {
  Tabs,
  Tab,
  Container,
  Col,
  Row,
  Image,
  ListGroup,
} from "react-bootstrap";

const TabList = () => {
  return (
    <>
      <div className="text-center">
        <h4>About</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!{" "}
        </p>
      </div>
      <Container>
        <Row xs={1} lg={2}>
          <Col>
            <div className="w-100 border rounded-2">
              <Image
                src={require(`./hero-bcg.jpeg`)}
                rounded
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="history" title="History">
                <h5>History</h5>
                <p>
                  I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                  mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                  rights. Umami kinfolk salvia jean shorts offal venmo.
                  Knausgaard tilde try-hard, woke fixie banjo man bun. Small
                  batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse
                  tacos. Viral direct trade hoodie ugh chambray, craft beer pork
                  belly flannel tacos single-origin coffee art party migas plaid
                  pop-up.{" "}
                </p>
              </Tab>
              <Tab eventKey="vision" title="Vision">
                <h5>Vision</h5>
                <p>
                  Man bun PBR&B keytar copper mug prism, hell of helvetica.
                  Synth crucifix offal deep v hella biodiesel. Church-key
                  listicle polaroid put a bird on it chillwave palo santo enamel
                  pin, tattooed meggings franzen la croix cray. Retro yr
                  aesthetic four loko tbh helvetica air plant, neutra palo santo
                  tofu mumblecore. Hoodie bushwick pour-over jean shorts
                  chartreuse shabby chic. Roof party hammock master cleanse
                  pop-up truffaut, bicycle rights skateboard affogato readymade
                  sustainable deep v live-edge schlitz narwhal.
                </p>
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Tab>
              <Tab eventKey="goals" title="Goals">
                <h5>Goals</h5>
                <p>
                  Chambray authentic truffaut, kickstarter brunch taxidermy vape
                  heirloom four dollar toast raclette shoreditch church-key.
                  Poutine etsy tote bag, cred fingerstache leggings cornhole
                  everyday carry blog gastropub. Brunch biodiesel sartorial
                  mlkshk swag, mixtape hashtag marfa readymade direct trade man
                  braid cold-pressed roof party. Small batch adaptogen coloring
                  book heirloom. Letterpress food truck hammock literally hell
                  of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork
                  yuccie, banh mi salvia venmo photo booth quinoa chicharrones.{" "}
                </p>
              </Tab>
              <Tab eventKey="about" title="About" disabled>
                Tab content for About
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TabList;
