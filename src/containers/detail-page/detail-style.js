import { V, S, M } from 'shared-styles.js';

const purchaseContainerWidth = 315;
const styles = {
  V,
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: V.spacingSmall,
    marginBottom: 0,
    maxWidth: V.maxWidth,
  },
  mainContainer: {
    maxWidth: V.mainContentWidth,
    position: 'relative',
    background: V.colors.white,
    padding: V.spacingSmall,
  },
  carouselImg: {
    width: '100%',
  },
  sliderContainer: {
    position: 'relative',
    marginBottom: V.spacing,
  },
  list: {
    ...S.bordered,
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    textTransform: 'capitalize',
    backgroundColor: V.colors.lightGreyBackground,
    borderTop: `1px solid ${V.colors.grey}`,
    fontSize: V.fontLarge,
  },
  nestedList: {
    backgroundColor: V.colors.white,
    padding: 0,
  },
  ul: {
    marginLeft: V.spacingLarge,
  },
  name: {
    display: 'inline-block',
    fontSize: V.fontXLarge,
    margin: V.spacingSmall,
  },
  mileage: {
    float: 'right',
    marginTop: 20,
  },
  overviewContainer: {
    marginLeft: V.spacingLarge,
    marginRight: V.spacingLarge,
    marginTop: V.spacingSmall,
    marginBottom: V.spacingSmall,
  },
  overview: {
    width: '45%',
    verticalAlign: 'top',
    display: 'inline-block',
    marginLeft: '5%',
  },
  labelContainer: {
    position: 'relative',
    minHeight: '1em',
  },
  labels: {
    position: 'absolute',
    color: V.colors.fontLight,
  },
  labelsValues: {
    marginLeft: 115,
  },

  purchaseContainer: {},
  purchaseWrapper: {},
  headlinePositioner: {
    paddingTop: '75%',
    position: 'absolute',
    top: -78,
    zIndex: 3,
    width: '100%',
  },
  headlineWrapper: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.75) 100%)',
    color: V.colors.white,
    padding: V.spacingSmall,
  },
};
styles.equipmentListItem = {
  ...styles.listItem,
};
styles.equipmentNestedList = {
  ...styles.nestedList,
  fontWeight: V.fontWeightLight,
  fontSize: V.fontSmall,
};

const purchaseMedia = `@media (min-width: ${V.mainContentWidth + purchaseContainerWidth + V.spacingSmall + V.spacingSmall}px)`;
styles.purchaseWrapper[purchaseMedia] = {
  position: 'absolute',
  right: -V.spacingSmall,
};
styles.purchaseContainer[purchaseMedia] = {
  position: 'fixed',
  top: 52,
  width: purchaseContainerWidth,
};
styles.overview[M.smallMax] = {
  width: '100%',
};
styles.mainContainer[`@media (min-width: ${V.mainContentWidth + V.spacingLarge}px)`] = {
  marginLeft: V.spacing,
};
styles.sliderContainer[`@media (max-width: ${V.mainContentWidth}px)`] = {
  marginLeft: -V.spacingSmall,
  marginRight: -V.spacingSmall,
};

export default styles;
