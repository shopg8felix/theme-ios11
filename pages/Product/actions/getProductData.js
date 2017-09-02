/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import {
  setProductId,
  setProductVariantId,
} from '@shopgate/pwa-common-commerce/currentProduct/action-creators';
import getProduct from '@shopgate/pwa-common-commerce/product/actions/getProduct';
import getProductDescription from '@shopgate/pwa-common-commerce/product/actions/getProductDescription';
import getProductProperties from '@shopgate/pwa-common-commerce/product/actions/getProductProperties';
import getProductImages from '@shopgate/pwa-common-commerce/product/actions/getProductImages';
import getProductShipping from '@shopgate/pwa-common-commerce/product/actions/getProductShipping';
import { requestProductData } from '../action-creators';

/**
 * Triggers the fetching of all product data for a certain product ID.
 * @param {Object} props The component's props.
 * @param {string} [selectedVariantId=null] The selected variant's ID.
 * @return {Function} The dispatched action.
 */
const getProductData = (props, selectedVariantId = null) => (dispatch) => {
  const parentId = hex2bin(props.params.productId);
  const productId = selectedVariantId || parentId;

  if (!productId) {
    return;
  }

  dispatch(requestProductData(productId, selectedVariantId));

  dispatch(setProductId(parentId));
  dispatch(setProductVariantId(selectedVariantId));

  dispatch(getProduct(productId));
  dispatch(getProductDescription(productId));
  dispatch(getProductProperties(productId));
  dispatch(getProductImages(productId));
  dispatch(getProductShipping(productId));
};

export default getProductData;