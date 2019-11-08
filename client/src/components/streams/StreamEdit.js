import React from 'react';
import {connect} from 'react-redux';
import {streamEdit, streamFetch} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.streamFetch(this.props.match.params.id);
  }

  onSubmit = formValue => {
    this.props.streamEdit(formValue, this.props.match.params.id);
  };

  render() {
					
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3> Edit a stream </h3>
        <StreamForm
				initialValues={
						{
								title: this.props.stream.title,
								description: this.props.stream.description }}
          onSubmit={this.onSubmit}
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
  {streamEdit, streamFetch},
)(StreamEdit);
