import React, { useState, useEffect } from "react";
import "./Editable.css";

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly

class Editable extends React.Component{

  // text,
  // type,
  // placeholder,
  // children,
  // childRef,
  // ...props

  state = {
    isEditing: false
  }

  // useEffect(() => {
  //   if (childRef && childRef.current && isEditing === true) {
  //     childRef.current.focus();
  //   }
  // }, [isEditing, childRef]);

  handleFocus = (e) => {
    e.target.focus()
  }

  turnOnEditing = () => {
    // this.handleFocus(e)
    this.setState({
      isEditing: true
    })
    console.log("Editting should be on")
  }

  turnOffEditing = () => {
    this.setState({
      isEditing: false
    })
  }

  handleKeyDown = (event, type) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];
    if (
      (type === "textarea" && keys.indexOf(key) > -1) ||
      (type !== "textarea" && allKeys.indexOf(key) > -1)
    ) {
      // setEditing(false);
      this.turnOffEditing()
    }
  };

  render(){
    return (
      // don't know what this {...props is for}
      <section {...this.props}>
        {this.state.isEditing ? (
          <div
            onBlur={this.turnOffEditing}
            onKeyDown={e => this.handleKeyDown(e, this.props.type)}
          >
            {this.props.children}
          </div>
        ) : (
          <div onClick={this.turnOnEditing}>
            <p>
              {this.props.text || this.props.placeholder || "Editable content"}
            </p>
          </div>
        )}
      </section>
    );
  }
};

export default Editable;

