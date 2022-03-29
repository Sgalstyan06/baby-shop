import React from "react";
import { Button, Form, Header, Image, Modal, Segment } from "semantic-ui-react";
import BuyForm from "./buyForm";
import "./BuyProduct.css";

function BuyProduct({ user, productInfo }) {
  const { description, image, name, price } = productInfo;
  const { userName, id } = user;
  const [open, setOpen] = React.useState(false);
  console.log("productInfo", productInfo, "user", user);
  function confirmAction(){
      
  }

  return (
    <Modal
      className="custom-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="green" inverted floated="right">
          BUY
        </Button>
      }
    >
      <Modal.Content image>
        <Image
          size="medium"
          src={
            image ||
            "https://react.semantic-ui.com/images/avatar/large/rachel.png"
          }
          wrapped
        />
        <Modal.Description>
          <Header>{name}</Header>
          <p>{description}</p>
          <p>{price + "$"}</p>
        </Modal.Description>
        <BuyForm userName={userName} id={id} />
      </Modal.Content>
      <Modal.Actions>
        <Segment>
          
          <Segment.Inline>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Confirm"
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                  setOpen(false);
                  confirmAction()
                }}
              positive
            />
          </Segment.Inline>
        </Segment>
      </Modal.Actions>
    </Modal>
  );
}

export default BuyProduct;
