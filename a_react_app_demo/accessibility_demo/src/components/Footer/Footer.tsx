import { Address, FooterContainer, Links } from "./Footer.style"


const Footer = () => {
  return (
    <FooterContainer>
    <Links>
      <a href="#">Holistic development policies</a>
      <a href="#">World conference of whales</a>
      <a href="#">Princess of Genovia</a>
    </Links>
    <Address>
      1234 Street Name<br />
      City, State, ZIP Code<br />
      Country
    </Address>
  </FooterContainer>
  )
}

export default Footer

