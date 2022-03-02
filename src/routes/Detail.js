import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(toDo);
  return <h1>{toDo?.text}</h1>;
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
