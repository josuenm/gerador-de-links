import styled from "styled-components";
import woman from "../../assets/images/woman1.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 50vw 50vw;

  @media (max-width: 575.98px) {
    display: block;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 575.98px) {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }
  @media (min-width: 575.99px) and (max-width: 1199.98px) {
    display: block;
    position: fixed;
    top: 40%;
    left: 0;
    right: 0;
    z-index: 99;
  }
`;
export const RightBox = styled.div`
  background: url(${woman});
  background-size: cover;

  @media (max-width: 575.98px) {
    display: none;
  }
  @media (min-width: 575.99px) and (max-width: 1199.98px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 1.5rem 1.5rem 1.5rem 12rem;
  border-radius: 1rem;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  animation: open 0.5s ease 1 alternate forwards;
  @keyframes open {
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(-5vw);
    }
  }

  @media (max-width: 1199.98px) {
    padding: 1rem 1rem 8rem 1rem;

    animation: mobileAnime 0.5s ease 1 alternate forwards;
    @keyframes mobileAnime {
      from {
        transform: translatey(100vh);
      }
      to {
        transform: translatey(1.5vh);
      }
    }
  }
  @media (min-width: 575.98px) and (max-width: 1199.98px) {
    padding: 1rem 1rem 50vh 1rem;
  }

  .clipboard {
    position: relative;
    overflow: hidden;
    margin-top: 2rem;
    padding: 2rem 1rem 1rem 1rem;
    border-radius: 0.25rem;
    background: #ccc;
    border: 1px solid var(--main-color);

    font-size: 1.1rem;
    text-align: start;

    cursor: pointer;
    &:hover {
      border: 1px solid var(--main-color);
      box-shadow: 0 0 4px 1px var(--main-color);
    }

    .copy {
      position: absolute;
      top: 0.1rem;
      right: 0.5rem;
      color: var(--main-color);
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0.25rem;
      padding: 0.2rem 0.4rem;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem;
  margin-top: 2rem;
  background: none;
  border: 1px solid var(--main-color);
  border-radius: 0.25rem;

  font-size: 1.1rem;
  font-weight: 400;

  transition: all 0.2s;
  &:hover {
    background: var(--main-color);
    color: #fff;
  }
`;

export const MobileHeadline = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  margin-top: 1rem;
  text-align: center;
  color: #fff;

  @media (max-width: 575.98px) {
    display: block;
  }
  @media (min-width: 575.99px) and (max-width: 1199.98px) {
    display: block;
    font-size: 3rem;
  }

  h1 {
    letter-spacing: 3px;
    margin: 0;
  }
`;
