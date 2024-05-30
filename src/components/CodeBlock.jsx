import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function CodeBlock({ code }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1250); // Reset after 2 seconds
  };

  return (
    <pre>
      <code>{code}</code>
      <button className='copy_btn' onClick={handleCopy}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
      {isCopied && <span className='copied_txt'>Copied!</span>}
    </pre>
  );
}

CodeBlock.propTypes = {
    code: PropTypes.node.isRequired,
};

export default CodeBlock;