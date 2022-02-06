import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  width: 50vw;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;

  a {
    position: relative;
    font-size: 1.2rem;
    color: var(--font-black);

    transition: color 0.2s;
    &:hover {
      color: var(--main-color);

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;

        width: 0;
        height: 3px;
        border-radius: 3rem;
        background-color: var(--main-color);

        animation: anchorAnime 0.3s ease 1 alternate forwards;

        @keyframes anchorAnime {
          to {
            width: 100%;
          }
        }
      }
    }
  }
`;
