import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ErrorPopup extends Component {
  componentDidMount() {
    this.renderPopup();
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('errorPopupContainer'));
  }
  
  renderPopup() {
    if(!document.getElementById('errorPopupContainer')){
      let popup = document.createElement("div");
      popup.setAttribute('id', 'errorPopupContainer');
      document.body.appendChild(popup);
    }
    
    ReactDOM.render(
      <div className="errorPopup">
      <h2 className="errorPopup__message">{this.props.error.message}</h2>
      <p className="errorPopup__description">
        <code className="errorPopup__code">{this.props.error.code} </code>
        {this.props.error.description}
      </p>
      <a className="errorPopup__closeBtn" onClick={this.destroy} href="#!" title="close popup"></a>
    </div>, document.getElementById('errorPopupContainer'));
  }

  render(){
      return <noscript />
  }
}

export default ErrorPopup;