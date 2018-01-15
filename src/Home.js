import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiData } from './actions';

class Home extends PureComponent {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const { data } = this.props
    return data
      ? <h1>
          {data}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
