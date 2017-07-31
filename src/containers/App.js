import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import FlickrResultList from '../components/FlickrResultList';
import Title from '../components/Title'
import '../styles/bootstrap/css/bootstrap.css';
import '../styles/custom.css';

class App extends React.Component {
  render() {
    return (
      <div>
      	<Title />
        <SearchBar onSubmit={this.props.actions.submit_search} />
        <FlickrResultList urls={this.props.urls} search_tag={this.props.search_tag}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    urls: state.urls,
    search_tag:state.search_tag
  };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);