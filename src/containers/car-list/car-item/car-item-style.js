import { V, S, M } from 'shared-styles';

const carItemStyle = {
  V, S,
  listItem: {
    minHeight: 112,
    fontWeight: V.fontWeightLight,
    position: 'relative',
    display: 'flex',
  },
  image: {
    width: '100%',
    // position: 'absolute',
    // top: '50%',
    // transform: 'translateY(-50%)',
  },
  imgWrapper: {
    width: 240,
    position: 'relative',
  },
  // imgContainer: {
  //   background: 'rgb(29,31,31)',
  //   width: '100%',
  //   paddingBottom: '75%',
  //   position: 'relative',
  // },
  description: {
    marginLeft: '1em',
    flexGrow: 2,
    flexShrink: 10000,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '.5em',
    fontSize: V.fontLarge,
    fontWeight: V.fontWeightHeavy,
  },
  subtitle: {
    marginBottom: '.3em',
    fontWeight: V.fontWeightMedium,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
  },
  price: {
    marginBottom: V.spacingSmall,
    fontSize: V.fontXLarge,
    fontWeight: V.fontWeightHeavy,
    color: V.colors.primary,
  },
  perMonth: {
    color: V.colors.fontLight,
  },
  markdown: {
    color: V.colors.fontLight,
    textDecoration: 'line-through',
  },
  totalPrice: {
    fontWeight: V.fontWeightMedium,
    fontSize: V.fontLarge,
    marginBottom: V.spacingTiny,
  },
  monthlyPaper: {
    marginTop: V.spacingSmall,
    marginLeft: V.spacingSmall,
    padding: V.spacingSmall,
  },
  location: {
    color: V.colors.fontLight,
    flexGrow: 10,
    display: 'flex',
    alignItems: 'flex-end',
  },
  monthly: {
    flexGrow: 10,
    display: 'flex',
    alignItems: 'flex-end',
  },
  divider: {
    marginLeft: V.spacingSmall,
    marginRight: V.spacingSmall,
  },
  mileage: {
    color: V.colors.fontLight,
  },
  monthlyContainer: {
  },
};
carItemStyle.imgWrapper[`${M.mediumMin} and (max-width: ${V.filterWidth + V.spacing + V.mainContentWidth}px) `] = {
  width: V.listImageWidthSmall,
};
carItemStyle.imgWrapper[M.smallMax] = {
  width: '100%',
  marginBottom: V.spacingSmall,
};
carItemStyle.monthlyContainer[M.smallMax] = {
  position: 'absolute',
  bottom: 0,
  right: V.spacingSmall,
};
carItemStyle.listItem[M.smallMax] = {
  display: 'block',
  marginLeft: -16,
  marginRight: -16,
};

export default carItemStyle;
