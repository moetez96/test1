import "./product.css";
import avatar from "./img_avatar.png";

const Product = (props) => {
console.log(props.)
  return (
    <div className="card">
      <img src={avatar} alt="Avatar" style={{ width: "150px" }} />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};
export default Product;
