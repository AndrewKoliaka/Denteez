import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ErrorPopup extends Component {
  componentDidMount() {
    this.renderPopup();
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('popup'));
  }
  
  renderPopup() {
    let popup = document.createElement("div");
    popup.setAttribute('id', 'popup');
    document
      .body
      .appendChild(popup);
    ReactDOM.render(
      <div className="errorPopup">
      <h2 className="errorPopup__message">{this.props.error.message}</h2>
      <p className="errorPopup__description">
        <code className="errorPopup__code">{this.props.error.code} </code>
        {this.props.error.description}
      </p>
      <a className="errorPopup__closeBtn" onClick={this.destroy} href="#" title="close popup"></a>
    </div>, document.getElementById('popup'));
  }

  render(){
      return <noscript />
  }
}

export default ErrorPopup;