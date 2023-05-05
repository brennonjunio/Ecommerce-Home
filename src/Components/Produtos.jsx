import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Produtos = (props) => {
  return (
    <div className="">
      <Card
        style={{
          width: "18rem",
          margin: "0.5rem",
          height: "28rem",
          borderRadius: "10px",
          backgroundColor: "#18662C",
        }}
      >
        <Card.Img variant="top" src={props.lnk} style={{ height: "15rem" }} />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            height: "8rem",
            justifyContent: "space-between",
            margin: "0.5rem",
          }}
        >
          <Card.Title style={{ fontSize: "18px", marginBottom: "15px", color: "white" }}>
            {props.texto}
          </Card.Title>
          <div>
            <Button style={{ color: "white" }} variant="outline-primary">
              Detalhes do Produto
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Produtos;
