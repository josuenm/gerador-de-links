import { Container } from "./styles"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <Container>
      <Link to="/gerador-de-links">
        Início
      </Link>
      <Link to="/gerador-de-links/meus-links">
        Meus Links
      </Link>
    </Container>
  )
}