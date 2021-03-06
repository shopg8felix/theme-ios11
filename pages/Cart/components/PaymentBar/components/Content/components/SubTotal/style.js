import { css } from 'glamor';
import colors from 'Styles/colors';

const disabled = css({
  color: `${colors.shade4} !important`,
}).toString();

const totalValue = css({
  fontSize: 16,
  textAlign: 'right',
}).toString();

export default {
  disabled,
  totalValue,
};
