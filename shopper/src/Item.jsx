import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ item, children }) => {
  return (
    <div className="Item">
      <div className="Item-left">
        <div className="Item-image" />
        <div className="Item-title">{item.name}</div>
        <div className="Item-description">{item.description}</div>
      </div>
      <div className="Item-right">
        <div className="Item-price">${item.price}</div>
        <button className="Item-addToCart">
          {children}
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Item;
