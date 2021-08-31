import React from "react";

import { categories } from "../../../services/service";

const Categories = () => {
  const [getCategories, setCategories] = React.useState([]);
  // const [getAlbum, setAlbum] = React.useState([]);

  const token = async () => {
    try {
      const get = await categories();
      console.log("Categories");
      console.log(get.data.categories.items);
      console.log("Categories");
      setCategories(get.data.categories.items);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    token();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {getCategories.map((Categories) => {
            return (
              <div className="col-lg-2">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
