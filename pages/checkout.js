import Header from "../components/Header";
import Checkout from "../components/Checkout";
function checkout() {
  window.scrollTo(0, document.querySelector("div").scrollHeight);

  return (
    <div>
      <Header /> <Checkout />
    </div>
  );
}
export default checkout;
