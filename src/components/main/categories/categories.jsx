import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context/context";
import { categories } from "../../../services/service";

const Categories = () => {
  const [getCategories, setCategories] = useState([]);
  // const [getAlbum, setAlbum] = useState([]);
  const context = useContext(Context);

  const token = async () => {
    try {
      const get = await categories();
      // console.log("Categories");
      // console.log(get.data.categories.items);
      // console.log("Categories");
      setCategories(get.data.categories.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {getCategories.map((Categories) => {
            return (
              <div className="col-lg-2">
                <NavLink
                  to="/categorie"
                  className="link"
                  onClick={() => context.handleCategorieId(Categories.id)}
                >
                  <div id="services" className="cards2">
                    <div className="card">
                      <div className="card-image">
                        <img
                          className="img-fluid"
                          src={Categories.icons[0].url}
                          alt="alternative"
                        />
                      </div>
                      <div>
                        <h3 className="">{Categories.name}</h3>
                        {/* <p className="">{Categories.owner.display_name}</p> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
