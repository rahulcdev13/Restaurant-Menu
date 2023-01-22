import React, { Fragment } from "react";

const MenuCard = ({ FinalmenuData }) => {
  console.log(FinalmenuData);

  return (
    <Fragment>
      <section className="main-card--cointainer">
        {FinalmenuData.map((element) => {
          const { id, Images, Category, Description, Name } = element;
          return (
            <Fragment>
              <div>
                <div className="card-container" key={id}>
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtle">
                        {id}
                      </span>
                      <span className="card-author subtle">{Category}</span>
                      <h2 className="card-title">{Name}</h2>
                      <span className="card-description subtle">
                        {Description}
                      </span>
                      <div className="card-read">Read</div>
                    </div>
                    <img src={Images} alt="imagess" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
};

export default MenuCard;
