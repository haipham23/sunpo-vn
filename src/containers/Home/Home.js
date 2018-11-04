import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Sunpo VN from Hai v3</h1>
        <div>
          <Button variant="contained" color="primary">
            Click Me
          </Button>
        </div>
        <div style={{ width: 150 }}>
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  //
};

function mapStateToProps({ i18n }) {
  return {
    i18n
  };
}

export default connect(
  mapStateToProps
)(Home);
