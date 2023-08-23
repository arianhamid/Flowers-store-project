import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightPurple);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightPurple)"};
  color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightPurple)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightPurple)"};
    color: var(--mainPurple);
  }
  &:focus {
    outline: none;
  }
`;
