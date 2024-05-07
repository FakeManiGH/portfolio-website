import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header>
      <h4>{title}</h4>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;