import { V } from 'shared-styles';
const FILTER_WIDTH = V.filterWidth;
const styles = {
  list: {
    marginTop: V.spacingSmall,
    marginLeft: V.spacingSmall,
    width: FILTER_WIDTH,
    background: V.colors.white,
  },
  checkItem: {
    paddingBottom: 0,
    marginTop: -10,
    fontWeight: V.fontWeightLight,
  },
  input: {
    overflow: 'hidden',
    width: '43%',
    marginLeft: '5%',
    marginTop: '-10px',
  },
  fullWidthInput: {
    width: '80%',
    marginLeft: '5%',
    marginTop: '-10px',
  },
  distance: {
    float: 'left',
    marginTop: -34,
  },
  applyFilter: {
    width: '100%',
  },
  buttonContainer: {
    padding: V.spacingSmall,
  },
};

export default styles;
