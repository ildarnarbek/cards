import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingBottom: 15,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  starFilled: {
    color: '#ef3631',
  },
  iconBUtton: {
    padding: 5,
    width: 45,
    height: 45,
  },
}));

export default useStyles;
