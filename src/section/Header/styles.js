import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'rgb(51, 51, 51)',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  rightSection: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export default useStyles;