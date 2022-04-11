import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Welcome to my application</h1>
    <h3>It is amazing</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur autem
      nihil fuga blanditiis nemo? Iste, ex tempora. Vitae, necessitatibus
      reprehenderit.
    </p>
    <p>
      Go to <Link to="/about">about</Link>
    </p>
  </>
);

export default Home;
