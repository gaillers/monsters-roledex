
import Card from "../card/card.component";

import { CartListProps } from "../../types/CartListProps.type"

import "./card-list.styles.css";

const CardList = ({ monsters }: CartListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
