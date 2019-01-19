class Menu extends React.Component{
  render(){
    return(
      <button
        className="btn btn-primary"
        data-toggle="collapse"
        data-target={"#" + this.props.id}
      >
        {this.props.value}
      </button>
    )
  }
}
ReactDOM.render(
  <Menu id="hello" value="Hello boy"/>,
  document.getElementById('root')
);
