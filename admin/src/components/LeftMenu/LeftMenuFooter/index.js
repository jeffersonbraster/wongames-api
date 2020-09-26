/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">

          Powered by

        &nbsp;
        <a href="https://github.com/jeffersonbraster" target="_blank" rel="noopener noreferrer">
          Jefferson Brandão
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
