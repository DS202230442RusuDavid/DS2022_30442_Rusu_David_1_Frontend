import Layout from "../components/layout.component";
import LoginRegisterForm from "../components/loginForm.component";


const LoginPage = () => {
  return (
    <Layout>
      <LoginRegisterForm page={"login"}/>
    </Layout>
  );
}

export default LoginPage;