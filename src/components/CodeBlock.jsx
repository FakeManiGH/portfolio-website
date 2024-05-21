import PropTypes from 'prop-types';

function CodeBlock({ code }) {
  return (
    <pre>
      <code>{code}</code>
      <button className='copy_btn' onClick={() => navigator.clipboard.writeText(code)}>Copy</button>
    </pre>
  );
}

CodeBlock.propTypes = {
    code: PropTypes.node.isRequired,
};

export default CodeBlock;