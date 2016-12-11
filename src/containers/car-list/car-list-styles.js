import { V, S, M } from 'shared-styles';

const carListStyles = {
  V, S,
  card: {
    ...S.materialUICard,
    margin: V.spacingSmall,
  },
  container: {
    margin: '0 auto',
    minHeight: 600,
    maxWidth: 1100,
  },
  list: {
  },
  content: {
    position: 'relative',
    paddingLeft: V.filterWidth + V.spacingSmall,
  },
  filtersButton: {
    display: 'none',
  },
  drawerFilter: {
    display: 'none',
  },
  noDrawerFilter: {
    position: 'absolute',
    left: 0,
  },
  noDrawerFilterPositioner: {
    position: 'fixed',
    top: 40,
  },
};
carListStyles.drawerFilter[M.mediumMax] = {
  display: 'block',
};
carListStyles.card[M.mediumMax] = {
  marginLeft: V.spacingSmall,
};
carListStyles.noDrawerFilter[M.mediumMax] = {
  display: 'none',
};
carListStyles.filtersButton[M.mediumMax] = {
  zIndex: 2,
  display: 'block',
  position: 'fixed',
  width: '80%',
  left: '10%',
  bottom: 30,
};
carListStyles.content[M.mediumMax] = {
  paddingLeft: 0,
};
carListStyles.card[M.mediumMax] = {
  margin: 0,
};
carListStyles.list[M.smallMax] = {
  minWidth: 0,
};
carListStyles.card[M.smallMax] = {
  padding: 0,
  margin: 0,
  width: '100%',
};

export default carListStyles;

