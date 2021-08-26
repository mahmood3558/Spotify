import SetToken from "../../../services/setToken/setToken";

const home = () => {
  return (
    <div>
      <div id="services" className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src="https://public.am.files.1drv.com/y4mC7sOokXD6paJozFY_iBAsjSrLhNTo1XG8GBsmn-Nqq1vnDGjmq_4h8rOxhn7fvR38vgRxlnuZ_g4bTRkl9rXnN5TiffqGw_VGrq1odvAzSDuMziv9w3lyEc6GBx6VweBw2ZiPAU86X-62HLatJ-y4p9LPsqYXCZcM09ER8ZblYCvWVE-xQlfyU-kg3vm9FHnzpQ9Vtdl9i4_6o3k326fq73XO6LMdG0vaYJpYBsX9wc?access_token=EwAQA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAeYZ06O7moKo%2bgovZOTPb/VwgCeRM4figt2U1UYXtxLUJ7b8a2mJaxGEdKqUj4HqoA8qusRSXiib75T/4OACArMqfz9/cNsEXC7osQgyuA5QT%2bqGoamWzHFCILVdJ18NrWlCvOJhrBnQReW2JGrmEftgSwd25R%2bpswxAsZ6gz8xDRWAv6R1c%2b3QLoio9Fu%2bO1alss/3ku3gRhPraBIoz5UcIm/6PrxnJnYrQ2/xWMK8Oglq5QmjpA5VyRl/PAbnqWHvJwpM5GHag9XnqSXt7SJwQHsYkiKvEb2T06hfOmL9BqoEKVEa/1ksB9r9QFte3bNeRgvbODVjt1uG26DHkQjUDZgAACF1sLfSyhkiT4AGWStM0mrUC2bFBDYuxmUH/r/0iIqnWVj4qTzbWG%2b8L5ventaZae74YHwb%2bNKkYCHrvHYrkYBc%2bx36TufHGs5gHwk/hEMMwyPb7J7uO1S/PPoXnFLXCBahB8UhFZb0x0GKmGREvZfyOQWAZWz5bcnnhiT4V2XqVMXxg8/6vSTZWGf9dvji2TmgQqzQgFrGSLcrLe181Jezp205iuWnIirOfUFJjudkXQFAt06Q5YCAJ%2bjlBS4viG7TJVClZm4y3rd88hYaL5rxtjcwdcjy7KbjiTdFamDOZu/h4on%2b5dqJ2ONDRvef%2bWBmWboqWwhtxsYjUr/naseLF38wE/iHOPUFaSoFgSHMbrzmuIfnAMrcLOfSUUMCOxsp/j16sauncBmdFTzJUYh8YACvWuIK8QbsBvtIMzbLs%2bbMhv6FnfQjdbJWhk6jK9dS/s1JDweS4BNrWkN5YYmfOzwc1NMolaNNV4T3n7F/SSl9ufqRXYdMiGTMd/%2bn0wtlS2K9ckE%2bGggCj99UFwoG6l7ZbCB7QZuE5lq/AMJf%2bFG47cbYtMI5DLt4g8xItwg5uxpJb6OeJ8FthHCo%2bMIX0q8kEdjcG4k4/5ad2o83Dbq4fDl1cLo3bE96h0GH%2bh/x80BjgilmG8OklAg%3d%3d"
                    alt="alternative"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Off The Ground Off The Ground</h3>
                  <p>
                    Perfect for fresh ideas or young startups, this package will
                    help get the business off the ground
                  </p>
                  <p className="price">
                    Starting at <span>$199</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SetToken></SetToken>
      {/* <UserPreview></UserPreview> */}
    </div>
  );
};

export default home;
