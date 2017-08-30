import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SuccessPopup extends Component {
  componentDidMount() {
    this.renderPopup();
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('messagePopupContainer'));
  }

  renderPopup() {
    if(!document.getElementById('messagePopupContainer')){
      let popup = document.createElement("div");
      popup.setAttribute('id', 'messagePopupContainer');
      document.body.appendChild(popup);
    }
    
    ReactDOM.render(
      <div className="messagePopup">
      <h2 className="messagePopup__title">Your form has been sent</h2>
      <p className="messagePopup__description">
        {this.props.data.message}
      </p>
      <button className="messagePopup__okBtn" onClick={this.destroy}>Ok</button>
    </div>, document.getElementById('messagePopupContainer'));
  }

  render() {
    return <noscript/>
  }
}

export default SuccessPopup;