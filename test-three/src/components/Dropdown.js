import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div className="sub-nav">
                <ul>
                  {this.props.item.children.map((child, i) =>
                    <p key={i}>{child.name}</p>
                  )}
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div className="sub-container">
        <h4 className="header">{this.props.item.name}</h4>
        <span className="klick" onClick = { this.toggleMenu }> + </span>
        {menu}
    </div>
    )
  }
}

export default Dropdown;
