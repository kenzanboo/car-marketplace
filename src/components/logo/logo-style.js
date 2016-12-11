import { V } from 'shared-styles';
const appStyles = {
  V,
  logoContainer: {
    color: V.colors.white,
    marginTop: 7,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: V.maxWidth,
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 500,
  },
  link: {
    color: V.colors.white,
    marginLeft: V.spacingSmall,
    position: 'relative',
    zIndex: 4,
  },
  trustMessage: {
    float: 'right',
    fontSize: V.fontSmall,
    fontWeight: V.fontWeightLight,
    marginTop: 15,
    marginRight: 30,
  },
};

export default appStyles;
