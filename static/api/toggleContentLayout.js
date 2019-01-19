'use strict';

const toggleLayoutStyle = {
  fontSize: "14px",
  cursor:"pointer",
  transitionDuration: "2s",
  backgroundColor:"CornflowerBlue",
  background:"linear-gradient(to right,CornflowerBlue,Cyan)"
};

class ToggleContentLayout extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.element.imgsrc.length > 0){
      return(
        <div>
          <button type="button" className="card" style={toggleLayoutStyle}
           data-toggle="modal" data-target={"#" + this.props.element.target}>
            <div className="card-body text-center">
              <strong className="card-text text-white">{this.props.element.title}</strong>
            </div>
          </button>

          <div className="modal fade" id={this.props.element.target}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                  Modal body..
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }

  }
};

const el = {
  target : "hello",
  imgsrc : "",
  alt : "",
  title : "Chúng ta không thuộc về nhau",

};


ReactDOM.render(
  <ToggleContentLayout element={el} />,
  document.getElementById('test_toggle')
);
