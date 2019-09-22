import React from "react";
import Button from "./Button";
import Card from "./Card";
import EntityCircle from "../assets/images/entities/entity-circle-XLarge.png";

const EntityCard = ({ name, position }) => (
  <Card>
    <div className="entities-card__hero og-inset-container-m-default">
      <img
        className="entities-card__entity-image"
        src={EntityCircle}
        alt="entity"
      />
    </div>

    <div className="entities-card__content og-inset-container-m-default">
      <p className="og-text-style-heading-l">{name}</p>
      <p className="og-text-style-text-m position-label">{position}</p>

      <div className="entities-card__content-buttons">
        <Button type="primary" size="s">
          Send Message
        </Button>
        <Button type="secondary" size="s">
          More...
        </Button>
      </div>
    </div>
  </Card>
);

export default EntityCard;
