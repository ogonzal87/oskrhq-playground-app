import React from "react";
import EntityCard from "../../components/EntityCard";
import ArticleTitleBlock from "../../components/ArticleTitleBlock";

const SpacingPage = ({ children, styles }) => (
  <div className="item-spacing-main-container">
    <h2>Spacing</h2>

    <section className="item-spacing-list">
      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen1" />
        <code>$space-01</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen2" />
        <code>$space-02</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen3" />
        <code>$space-04</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen4" />
        <code>$space-08</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen5" />
        <code>$space-12</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen6" />
        <code>$space-16</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen7" />
        <code>$space-20</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen8" />
        <code>$space-24</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen9" />
        <code>$space-32</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen10" />
        <code>$space-160</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen11" />
        <code>$space-40</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen12" />
        <code>$space-48</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen13" />
        <code>$space-64</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen14" />
        <code>$space-80</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen15" />
        <code>$space-96</code>
      </div>

      <div className="item-spacing-list__item">
        <div className="item-spacing-list__item_specimen16" />
        <code>$space-160</code>
      </div>
    </section>

    <section className="item-spacing-showcase-section ">
      <div>
        <EntityCard name="Oscar Gonzalez" position="Sr. Product Designer" />

        <ArticleTitleBlock title="Title text" subtitle="Source or Author" />
      </div>

      <div>
        <EntityCard
          name="Felipe Fuentes"
          position="Software Engineer Leader at ABC Company"
        />

        <ArticleTitleBlock title="Title text" subtitle="Source or Author" />
      </div>
    </section>
  </div>
);

export default SpacingPage;
