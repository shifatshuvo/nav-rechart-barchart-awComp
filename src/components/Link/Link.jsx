import PropTypes from 'prop-types';

const Link = ({route}) => {
  return (
      <div className="md:w-24 w-32">
        <a className='w-full inline-block md:rounded-md hover:bg-gray-300 md:hover:bg-gray-100 py-2 px-4 font-semibold text-gray-600' href={route.path}>{route.name}</a>
      </div>
  );
};

Link.propTypes = {
  route: PropTypes.object
}

export default Link;
