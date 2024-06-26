import { CardProps } from "../../types/CardProps.type"

import "./card.styles.css";

const Card = ({ monster }: CardProps) => {
  const { name, email, id } = monster;

  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2`} alt="monster" />
      <h2> {name} </h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
