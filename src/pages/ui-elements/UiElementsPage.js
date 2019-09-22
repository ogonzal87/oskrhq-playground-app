import React from "react";
import EntityCard from "../../components/EntityCard";
import ArticleTitleBlock from "../../components/ArticleTitleBlock";
import Button from "../../components/Button";
import Card from "../../components/Card";
import MenuItem from "../../components/MenuItem";

const UiElementsPage = () => (
  <div>
    <h2>UI Elements</h2>
    <div className="showcase-elements-container">
      <Button type="primary" size="s">
        Отправить сообщение
      </Button>
      <Button type="primary" size="m">
        Send a message
      </Button>
      <Button type="primary" size="s">
        Send a message
      </Button>
      <Button type="primary" size="m">
        <svg
          height="18"
          viewBox="0 0 18 18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-3 -3)">
            <path d="m0 24h24v-24h-24z" />
            <path
              d="m11 13h-8v-2h8v-8h2v8h8v2h-8v8h-2z"
              fill="#fff"
              fillOpacity=".9"
            />
          </g>
        </svg>
        Connect
      </Button>
      <Button type="primary" size="s">
        <svg
          height="14"
          viewBox="0 0 14 14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-1 -1)">
            <path d="m0 16h16v-16h-16z" />
            <path
              d="m15 7h-6v-6h-2v6h-6v2h6v6h2v-6h6z"
              fill="#fff"
              fillOpacity=".9"
            />
          </g>
        </svg>
        Connect
      </Button>
      <Button type="secondary" size="m">
        Send a message
      </Button>
      <Button type="secondary" size="s">
        Send a message
      </Button>
      <Button type="secondary" size="m">
        <svg
          height="18"
          viewBox="0 0 18 18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-3 -3)">
            <path d="m0 24h24v-24h-24z" />
            <path d="m11 13h-8v-2h8v-8h2v8h8v2h-8v8h-2z" fillOpacity=".9" />
          </g>
        </svg>
        Connect
      </Button>
      <Button type="secondary" size="s">
        <svg
          height="14"
          viewBox="0 0 14 14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-1 -1)">
            <path d="m0 16h16v-16h-16z" />
            <path d="m15 7h-6v-6h-2v6h-6v2h6v6h2v-6h6z" fillOpacity=".9" />
          </g>
        </svg>
        Connect
      </Button>
      <Card style={{ width: `100%` }} styles="og-card--sharp">
        <MenuItem label="Section title" sectionTitle />
        <MenuItem label="Menu item" />
        <MenuItem label="Menu item" helperText="Helper text" />
        <MenuItem label="Menu item" hasIconLeft />
        <MenuItem label="Menu item" helperText="Helper text" hasIconLeft />
        <MenuItem label="Menu item" helperText="Helper text" hasIconRight />
      </Card>
      <EntityCard name="Oscar Gonzalez" position="Sr. Product Designer" />
      <ArticleTitleBlock title="Title text" subtitle="Source or Author" />
    </div>
  </div>
);

export default UiElementsPage;
