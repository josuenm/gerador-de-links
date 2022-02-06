import { useState, useRef } from "react"
import { Container, Box, RightBox, Button, Form, MobileHeadline } from "./styled"
import TextField from "@mui/material/TextField"
import Clipboard from 'react-clipboard.js';

export function HomePage() {

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState({
    phone: false,
    message: '',
    focused: false
  });
  const [copy, setCopy] = useState("");
  const timeInterval = useRef()

  const [link, setLink] = useState('')

  function validate() {

    if (phone === '') {
      setIsError({
        phone: true,
        message: 'Insira um número'
      })
      return false
    } else {
      /* Definindo o erro como padrão */
      setIsError({
        phone: false,
        message: '',
        focused: false
      })
      return true
    }
  }

  function generateLink(e) {
    e.preventDefault()

    let returnValidate = validate()

    if(!returnValidate) return null

    let messageLink = message.replace(/ /g, '%20')
    setCopy('Copiar')

    /* Coloca o 55 caso não tenha e faz o link ao mesmo tempo */
    if (!/^[55]{2}/.test(phone)) {
      setLink(`https://wa.me/55${phone}?text=${messageLink}`)
    } else {
      setLink(`https://wa.me/${phone}?text=${messageLink}`)
    }
  }

  function copyText() {
    clearInterval(timeInterval.current)
    setCopy('Copiado ✅')
    timeInterval.current = setInterval(() => {
      setCopy('Copiar')
    }, 1500)
  }

  return (
    <Container>
      <Box>
        <Form handleSubmit={generateLink}>
          <TextField
            id="standard-basic"
            label="Número do Celular"
            variant="standard"
            value={phone}
            onClick={() => setIsError({ phone: false, message: '', focused: true })}
            onChange={
              ({ target }) => /[0-9]/.test(target.value) || target.value === ''
                ? setPhone(target.value)
                : null
              /* Esse regex acima impede que o usuário digite algo que não seja número */
            }
            onBlur={validate}
            focused={isError.focused}
            error={isError.phone}
            helperText={isError.phone && isError.message}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Mensagem"
            margin="normal"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <Button type="submit" onClick={generateLink}>
            GERAR LINK
          </Button>
          {link && <Clipboard data-clipboard-text={link} className="clipboard" onClick={copyText}>

            <div className="copy" data-clipboard-text={link} onClick={copyText}>
              {copy}
            </div>

            <p>{link}</p>

          </Clipboard>}
        </Form>
      </Box>
      <RightBox />
      <MobileHeadline>
        <h1>Whatsapp Link Generator</h1>
        <small>Next Orbit</small>
      </MobileHeadline>
    </Container>
  )
}