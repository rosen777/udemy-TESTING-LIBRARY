import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* Sumary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailsProvider>
      {/*  confirmation page does not get provided */}
    </Container>
  );
}

export default App;
