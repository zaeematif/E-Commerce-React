import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { styled } from "styled-components";

const SuperContainer = styled.div``;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(255, 255, 255, 0.5), rgb(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/6687576/pexels-photo-6687576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 25%;
  padding: 10px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ width: "45%" })}
`;

const Link = styled.a`
  margin: 8px 0;
  text-decoration: underline;
  font-size: 13px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <SuperContainer>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>LOG IN</Button>

            <Link>Forgot Password</Link>
            <Link>SIGN UP</Link>
          </Form>
        </Wrapper>
      </Container>
    </SuperContainer>
  );
};

export default Login;
