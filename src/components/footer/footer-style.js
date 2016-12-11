import { V, S } from 'shared-styles.js';

const footerStyles = {
  V, S,
  footer: {
    marginTop: V.spacingLarge,
    width: '100%',
    backgroundColor: V.colors.darkBackground,
  },
  header: {
    fontWeight: V.fontWeightHeavy,
    color: V.colors.fontLightDarkBG,
  },
  content: {
    fontSize: V.fontSmall,
    color: V.colors.fontPrimaryDarkBG,
  },
  about: {
    maxWidth: V.mainContentWidth,
    display: 'inline-block',
    marginRight: V.spacing,
  },
  location: {
    marginLeft: 'auto',
  },
  footerContent: {
    ...S.container,
    padding: V.spacing,
    display: 'flex',
  },
};
export default footerStyles;
