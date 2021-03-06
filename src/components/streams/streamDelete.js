import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../modal";
import { fetchStream, deleteStream } from "../../actions/index";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <Link
          to="/"
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </Link>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete ${this.props.stream.title}?`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {}}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
