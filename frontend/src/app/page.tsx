import { Category, CategoryResponse } from "@/models/category.model";

async function getCategories() {
  const response = await fetch("http://localhost:3000/categories");
  const res = await response.json();
  return res.rows;
};
export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      <section className="category-sec">
        <div className="container">
          <div className="cate-outr">
            <div className="deal-top u-line">
              <h4>Shop by category</h4>
            </div>

            <div className="cate-btm">
              <div className="row">
                {categories.map((category: Category) => (
                  <div className="col-xl-2 col-lg-4 col-sm-6 cate-col">
                  <div className="cate-innr text-center">
                    <a href="https://www.aipaze.com/category/fruit--vegetables-vo2rt">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/LcgmRco4qiw9pckNxd7qTCM9e2Yq4aGYpVx1qw4R.png "
                          alt="Vegetables"
                        />
                      </figure>
                      <h6>{category.name}</h6>
                    </a>
                  </div>
                </div>
                ))}
                {/* <div className="col-xl-2 col-lg-4 col-sm-6 cate-col">
                  <div className="cate-innr text-center">
                    <a href="https://www.aipaze.com/category/fruit--vegetables-vo2rt">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/LcgmRco4qiw9pckNxd7qTCM9e2Yq4aGYpVx1qw4R.png "
                          alt="Vegetables"
                        />
                      </figure>
                      <h6>Vegetables</h6>
                    </a>
                  </div>
                </div> */}

                <div className="col-xl-2 col-lg-4 col-sm-6 cate-col">
                  <div className="cate-innr text-center">
                    <a href="https://www.aipaze.com/category/fruit--vegetables-vo2rt">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/LcgmRco4qiw9pckNxd7qTCM9e2Yq4aGYpVx1qw4R.png "
                          alt="Vegetables"
                        />
                      </figure>
                      <h6>Vegetables</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advertise-sec cmn-gap">
        <div className="container">
          <div className="ad-outr">
            <div className="row ad-row">
              <div className="col-md-6 ad-col">
                <div className="ad-inr">
                  <a href="#">
                    <figure>
                      <img
                        src="https://www.aipaze.com/public/uploads/all/5lE4g7WFyljzM0H1dnjZopppQVvGm6gld7qyITWI.png"
                        alt="Aipaze promo"
                      />
                    </figure>
                  </a>
                  <div className="discount disc2-red">
                    <em>25%</em>
                    <span>off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
