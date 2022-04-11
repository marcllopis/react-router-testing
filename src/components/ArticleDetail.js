import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  let { id } = useParams();

  return <h1>This is a detailed view of my article with id: {id}</h1>;
};

export default ArticleDetail;
