import MainFooter from "./components/footer";
import MainHeader from "./components/header";
import PageRoutes from "./routes";

export default function App() {
  return (
    <>
      <MainHeader />

      <PageRoutes />

      <MainFooter />
    </>
  );
}
