import { V } from 'shared-styles';
const appStyles = {
  V,
  topBarBackground: {
    height: 100,
    background: V.colors.lightBackground,
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: -1,
  },
  logoContainer: {
    color: V.colors.white,
    marginTop: 7,
    marginBottom: 7,
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
  },
};

export default appStyles;
