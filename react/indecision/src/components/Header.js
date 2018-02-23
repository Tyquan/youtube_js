import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
}
// Default Properties
Header.defaultProps = {
  title: 'Indecision App',
  subTitle: 'Let Computers make Decisions'
};

export default Header;