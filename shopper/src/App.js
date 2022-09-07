import { useState } from "react";
import Nav from "./Nav";
import { items } from "./static-data";
import "./App.css";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const summaraizeCart = (cart) => {
    const groupedItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0,
      };
      summary[item.id].count++;
      return summary;
    }, {});

    return Object.values(groupedItems);
  };


  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <span>
          <Content
            tab={activeTab}
            onAddToCart={addToCart}
            cart={summaraizeCart(cart)}
            onRemoveItem={removeItem}
          />
        </span>
      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
  switch (tab) {
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />
      );
    default:
  }
};
export default App;
