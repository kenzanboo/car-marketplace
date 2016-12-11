import { V, M } from 'shared-styles.js';

const CAR_IMG = 'https://cdn.getprodigy.com/img/slide-1.jpg';

const homeStyles = {
  V,
  jumbotron: {
    backgroundImage: `url(${CAR_IMG})`,
    backgroundPosition: 'center',
    height: 500,
    marginTop: -41,
    backgroundColor: V.colors.lessDarkBackground,
  },
  jumbotronContent: {
    paddingTop: 200,
    textAlign: 'center',
    color: V.colors.white,
  },
  CTAButton: {
    marginRight: V.spacing,
    marginLeft: V.spacing,
    marginBottom: V.spacing,
    height: 72,
  },
  CTAButtonLabel: {
    textTransform: 'capitalize',
    fontSize: V.fontLarge,
    padding: V.spacing,
  },
  belowBanner: {
    color: V.colors.white,
    backgroundColor: V.colors.lightBackground,
    fontSize: V.fontLarge,
    fontStyle: 'italic',
  },
  innerBelowBanner: {
    margin: '0 auto',
    maxWidth: V.maxWidth,
    paddingLeft: V.spacingLarge,
    paddingRight: V.spacingLarge,
    paddingTop: V.spacing,
    paddingBottom: V.spacing,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  container: {
    maxWidth: V.maxWidth,
    margin: '0 auto',
    padding: V.spacing,
    width: '100%',
    boxSizing: 'border-box',
  },
  h1: {
    textTransform: 'uppercase',
    fontSize: V.fontHuge,
  },
  h3: {
    fontWeight: V.fontWeightLight,
    fontSize: V.fontLarge,
  },
  content: {
    marginBottom: V.spacingLarge,
  },
  imgContainer: {
    padding: V.spacing,
    width: '45%', // golden ratio 1/2.61
    display: 'inline-block',
    boxSizing: 'border-box',
  },
  textContainer: {
    boxSizing: 'border-box',
    padding: V.spacing,
    width: '55%',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  textHeader: {
    fontSize: V.fontHuge,
    fontWeight: V.fontWeightLight,
    marginBottom: V.spacingLarge,
  },
  description: {
    fontWeight: V.fontWeightLight,
    color: V.fontLight,
    fontSize: V.fontLarge,
    lineHeight: '1.2em',
  },
  img: {
    width: '100%',
  },
  divider: {
    marginLeft: V.spacingLarge,
    marginRight: V.spacingLarge,
  },
};
homeStyles.jumbotronContent[M.smallMax] = {
  paddingTop: 60,
};
homeStyles.imgContainer[M.smallMax] = {
  width: '100%',
};
homeStyles.textContainer[M.smallMax] = {
  width: '100%',
};
export default homeStyles;
