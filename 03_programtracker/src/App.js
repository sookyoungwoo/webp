import "./styles.css";
import Section from "./components/Section";
import styled from "styled-components";
export default function App() {
  const Title = styled.h1`
    color: #b19cd9;
  `;
  return (
    <>
      <Title>Progress Tracker</Title>
      <div>
        <Section text="M" progress="100%" />
        <Section text="T" progress="80%" />
        <Section text="W" progress="70%" />
        <Section text="T" progress="60%" />
        <Section text="F" progress="40%" />
        <Section text="S" progress="20%" />
        <Section text="S" progress="10%" />
      </div>
    </>
  );
}
