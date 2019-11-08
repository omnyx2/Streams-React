import React from 'react';
import { streamFetch } from '../../actions';
import { connect } from 'react-redux';

class StreamShow extends React.Component{
		
	componentDidMount(){
		this.props.streamFetch(this.props.match.params.id);
	}
	

		render(){
				console.log(this.props);
			return (
				<div>
						<h3>{this.props.stream.title}</h3>
						<h5>{this.props.stream.description}</h5>
				</div>

			);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
			stream: state.streams[ownProps.match.params.id]
	};
};


export default connect(mapStateToProps, { streamFetch })(StreamShow);
