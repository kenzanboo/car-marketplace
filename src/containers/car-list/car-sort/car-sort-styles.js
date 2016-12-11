import { V, S } from 'shared-styles';

const carSortStyles = {
  V, S,
  applyFilter: {
    marginLeft: V.spacingSmall,
    minHeight: 0,
    minWidth: 0,
    border: `1px solid ${V.colors.borderColor}`,
    height: 30,
    width: 30,
    lineHeight: 0,
  },
  applyFilterLabel: {
    padding: 5,
  },
  container: {
    backgroundColor: V.colors.lightGreyBackground,
    textAlign: 'right',
    borderRadius: 2,
    minHeight: V.spacingLarge,
    paddingRight: V.spacing,
  },
  selectWrapper: {
    display: 'inline-block',
  },
  label: {
    color: V.colors.fontLight,
    display: 'inline-block',
    marginRight: V.spacingSmall,
  },
  zip: {
    width: 80,
  },
  sortBy: {
    width: 100,
    top: 5,
  },
};

export default carSortStyles;

