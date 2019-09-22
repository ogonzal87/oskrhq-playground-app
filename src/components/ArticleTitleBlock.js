import React from "react";
import SourceFavicon from "../assets/images/source-favicon.png";

const ArticleTitleBlock = ({ title, subtitle }) => (
  <div className="og-inset-container-m-default article-title-block">
    <div className="article-title-text-container">
      <p className="og-text-style-text-m article-title-block__title-text">
        {title}
      </p>
      <div className="article-title-block__byline-container">
        <img src={SourceFavicon} />

        <span className="og-text-style-text-xs">{subtitle}</span>

        <svg
          height="12"
          viewBox="0 0 12 12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="">
            <path d="m0 12h12v-12h-12z" />
            <path
              d="m7.80310236.2756567-4.80310236 6.7243433h2l-.9361499 4.6807495c-2.36367736-.8053745-4.0638501-3.04451368-4.0638501-5.6807495 0-3.3137085 2.6862915-6 6-6 .62826487 0 1.23397628.09656285 1.80310236.2756567zm.13343771.04372677c2.36347433.80548793 4.06345993 3.04452577 4.06345993 5.68061653 0 3.3137085-2.6862915 6-6 6-.6279863 0-1.23343913-.0964772-1.80234529-.2754185l4.80234529-6.69174459h-2z"
              fill="#fff"
              fillOpacity=".9"
            />
          </g>
        </svg>
      </div>
    </div>

    <button className="article-title-block__bookmark-btn">
      <svg
        height="20"
        viewBox="0 0 14 20"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
          fill="#fff"
          fillOpacity=".9"
          fillRule="evenodd"
          transform="translate(-5 -2)"
        />
      </svg>
    </button>
  </div>
);

export default ArticleTitleBlock;
