import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {streamFetch, streamDelete} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.streamFetch(this.props.match.params.id);
  };
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={this.deleteState}>
          Delete
        </button>
		<Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  };
  deleteState = () => {
    console.log(this.props);
    this.props.streamDelete(this.props.match.params.id);
  };
  onClick() {
    history.push('/');
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
		  onDismiss={() => history.push('/')}
		  title={"Do you really want to delete?"}
		  content={`Contents:${this.props.stream.title}: ${this.props.stream.description}`
		    }
          actions={this.renderActions()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(
  mapStateToProps,
  {streamDelete, streamFetch},
)(StreamDelete);
