import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';

import { Wrapper } from './Header.styled';
import { fetchHeader } from '../../actions/header.action';

class Header extends React.Component {
  componentDidMount() {
    if (this.props.shouldFetch) {
      this.props.fetchHeader();
    }
  }

  render() {
    const {
      content,
      error,
      isFetching,
      fetched,
    } = this.props.header;

    if (!fetched || isFetching) {
      return <div>Fetching</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    return (
      <Wrapper>
        <img src={content.logo.url} width="220" />
        {RichText.render(content.phone)}
        {RichText.render(content.opentime)}
        {RichText.render(content.title)}
      </Wrapper>
    );
  }
}

Header.propTypes = {
  shouldFetch: PropTypes.bool.isRequired,
  fetchHeader: PropTypes.func.isRequired,
  header: PropTypes.object.isRequired,
};

const mapStateToProps = ({ header }) => ({
  shouldFetch: !header.fetched && !header.isFetching,
  header,
});

const mapDispatchToProps = {
  fetchHeader
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
