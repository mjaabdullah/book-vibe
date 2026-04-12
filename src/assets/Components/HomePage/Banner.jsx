import bannerImg from "../../hero_img.jpg";
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="hero bg-base-200 min-h-[40vh] rounded-lg md:p-8">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={bannerImg}
            className="max-w-62.5 sm:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Books to freshen up
              <br />
              your bookshelf
            </h1>
            <button className="btn bg-green-500 text-white rounded-lg">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
