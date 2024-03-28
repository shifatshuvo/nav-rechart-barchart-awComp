import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
  return (
    <div>
      <p className='flex items-center space-x-1'><FaCheckCircle className='text-green-500' /> <span>{feature}</span></p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string
}

export default Feature;