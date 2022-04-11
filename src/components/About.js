import { Link } from "react-router-dom";

const About = () => (
  <>
    <h1>About myself</h1>
    <h3>You don't care</h3>
    <h4>I am joking</h4>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
      laborum at natus ut, quo voluptatum quas error odio qui expedita quidem
      obcaecati unde ad inventore maxime earum rerum possimus assumenda dolores
      laudantium tempora non repudiandae harum! Dolorem nesciunt delectus est
      dolor officiis, velit et unde perspiciatis minus ad eveniet magnam minima
      obcaecati fuga necessitatibus ex labore? Quae veritatis dolor nemo.
    </p>
    <p>
      Go back to <Link to="/">home</Link>
    </p>
  </>
);

export default About;
