App (Parent)
|_NavBar (Child)
|_GifListContainer (Child/Parent)
  |_GifSearch (Child)
  |_GifList (Child)



  class CommentListContainer extends React.Component {
    state = { comments: [] };
    componentDidMount() {
      fetchSomeComments(comments =>
        this.setState({ comments: comments }));
    }
    render() {
      return <CommentList comments={this.state.comments} />;
    }
  }
