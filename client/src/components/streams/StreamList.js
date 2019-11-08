import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {streamList} from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.streamList();
  }
	  
  renderAdmin(stream) {
    if (this.props.currentId === stream.userId) {
      return (
        <div className="right floated content">
		  <Link to={`/streams/edit/${stream.id}`} className="ui primary button">
			Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="negative ui button">Delete
          </Link>
        </div>
      );
	} 
  }

  renderCreate() {
    if (this.props.isSignedIn) {
	  return (
       <div style={{ textAlign: 'right'}}>
	   <Link to="/streams/new" className="ui primary button">
	    	Create
		</Link>
		</div>
      );
    } else {
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
        return (
          <div className="item" key={stream.id}>
            {this.renderAdmin(stream)}
            <i className="large middle aligend icon camera" />
			<div className="content">
			  <Link to={`streams/${stream.id}`} className="title">
			 	{stream.title}
			  </Link>
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div className="right floated content">{this.renderCreate()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentId: state.auth.userId,
	isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  {streamList},
)(StreamList);
