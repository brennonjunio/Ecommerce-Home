import React from "react";
import Carousel from "react-bootstrap/Carousel";
import produto1 from "../Img/d4.png";
import produto2 from "../Img/d2.jpg";
import produto3 from "../Img/d3.png";
import { Container } from "react-bootstrap";
import Produtos from "../Components/Produtos";
import Rodape from "../Components/Rodape";

const Home = () => {
  return (
    <>
      {" "}
      <Container className="" style={{ backgroundColor: "" }}>
        <Carousel>
          <Carousel.Item>
            <img style={{ height: "25rem" }} src={produto2} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "25rem" }}
              className="d-block "
              src={produto1}
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "25rem" }}
              className="d-block "
              src={produto3}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className="mt-4  d-flex flew-row w-100">
          <Produtos
            lnk="https://cdn.leroymerlin.com.br/products/luvas_finas_multiuso_branco_pequena_limppano_86350313_0001_600x600.jpg"
            texto="Luvas Finas Multiuso "
            descricao="lorem 5"
          />
          <Produtos
            lnk="https://img.lojadomecanico.com.br/256/46/448/181297/1622564846267.JPG"
            texto="Par de Luvas de Látex - SANRO-281970402"
            descricao="aaaaaaaaaaaa"
          />
          <Produtos
            lnk="https://lojazeusdobrasil.com.br/arquivos/produtos/imagens_adicionais/luvas-latex-super-reforcada-laranja-forrada_3374.jpeg"
            texto="Luvas látex super reforçada laranja forrada"
            descricao="bbbbbbbbbbb"
          />
          <Produtos
            lnk="https://images.tcdn.com.br/img/img_prod/955444/luva_pu_volk_177_1_f8b513c8cfabcd2c35f19dc96fea6b9f.jpg"
            texto="Luva PU VOLK"
            descricao="ccccccccccccccc"
          />
        </Container>
        <Container className="mt-4  d-flex flew-row w-100">
          <Produtos
            lnk="https://io.convertiez.com.br/m/sandromoscoloni/shop/products/images/3067/medium/bota-worker-masculina-sandro-moscoloni-worker-amarela_21627.jpg"
            texto="Bota masculina impermeável Timberland de 15,2 cm"
            descricao="lorem 5"
          />
          <Produtos
            lnk="https://m.media-amazon.com/images/I/71oORUVO-vL._AC_SX425_.jpg"
            texto="Bota De segurança Laranjada"
            descricao="aaaaaaaaaaaa"
          />
          <Produtos
            lnk="https://app.lab2u.com.br/upload/produtos/39961625081364.jpg"
            texto="Bota Coturno Segurança"
            descricao="bbbbbbbbbbb"
          />
          <Produtos
            lnk="https://static.netshoes.com.br/produtos/bota-de-couro-seguranca-epi-masculina/06/6FM-0032-006/6FM-0032-006_zoom1.jpg?ts=1633042896"
            texto="Botas De couro Masculina EPI"
            descricao="ccccccccccccccc"
          />
        </Container>
      </Container>
      <Rodape />
    </>
  );
};

export default Home;
