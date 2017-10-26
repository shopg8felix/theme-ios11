/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * Renders the Sort component.
 * @param {Object} props The components props.
 * @param {Function} props.handleSelectionUpdate Callback that is executed when selection changed.
 * @returns {JSX}
 */
const Item = ({ children }) => (
  <div className={styles}>
    {children}
  </div>
);

Item.propTypes = {
  children: PropTypes.node,
};

Item.defaultProps = {
  children: null,
};

export default Item;
