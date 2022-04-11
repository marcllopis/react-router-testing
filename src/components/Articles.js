import { Link } from "react-router-dom";

let myProducts = [
  "PlayStation 5",
  "Cool gaming computer",
  "a book",
  "Iphone 23 X Pro MAX",
];

const Articles = () => (
  <>
    <h1>List of Articles</h1>
    <h2>Everything available</h2>
    <ul>
      {myProducts.map((item, index) => (
        <li key={index}>
          <Link to={`/articles/${index + 1}`}>{item}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Articles;
