import { V, S } from 'shared-styles';

const purchase = {
  V, S,
  container: {
    background: V.colors.white,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: V.spacingSmall,
  },
  button: {
    width: '100%',
    height: V.spacingLarge,
  },
  buttonLabel: {
    fontSize: V.fontXLarge,
  },
  monthlyContainer: {
    textAlign: 'left',
    background: V.colors.darkBackground,
    width: '100%',
    height: V.spacingLarge,
    color: V.colors.white,
    boxSizing: 'border-box',
    padding: 6,
  },
  monthlyLabel: {
    float: 'right',
    marginTop: 20,
    marginRight: 3,
  },
  noHaggle: {
    color: V.colors.fontLight,
    fontSize: V.fontLarge,
    margin: V.spacingSmall,
  },
  monthly: {
    marginLeft: V.spacingTiny,
    fontSize: V.fontHuge,
  },
  price: {
    fontSize: V.fontXLarge,
  },
  pickupContainer: {
    textAlign: 'left',
    backgroundColor: V.colors.lessDarkBackground,
    color: V.colors.white,
    padding: V.spacingSmall,
  },
  pickupLocationLabel: {
    borderBottom: `1px solid ${V.colors.borderColor}`,
    paddingBottom: V.spacingTiny,
    marginBottom: V.spacingTiny,
  },
  pickupLocation: {
    fontSize: V.fontSmall,
  },
  msrp: {
    color: V.colors.fontLight,
  },
};

export default purchase;
