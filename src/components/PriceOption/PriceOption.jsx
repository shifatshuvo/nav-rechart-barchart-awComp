import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="flex flex-col bg-blue-500 rounded-md p-4 my-6 text-white space-y-2">
      <h2>
        <span className="text-2xl font-semibold">{price}$</span>
        <span className="xl">/mon</span>
      </h2>
      <h4 className="font-bold">{name}</h4>
      <div className="flex-grow md:pl-4">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-green-500 hover:bg-green-400 py-1 px-6 rounded-md mt-4 font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
