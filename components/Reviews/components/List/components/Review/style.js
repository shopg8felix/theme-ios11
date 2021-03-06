import { css } from 'glamor';
import colors from 'Styles/colors';
import variables from 'Styles/variables';

export default css({
  marginLeft: variables.gap.big,
  padding: variables.gap.big,
  paddingLeft: 0,
  borderTop: `1px solid ${colors.shade7}`,
}).toString();
