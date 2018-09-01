import React from "react";
import "./Builder.css";
import List from "../../containers/List/List";
class Builder extends React.Component {
  state = {
    tasks: []
  };
  render() {
    return (
			<div>
				<List/>
			</div>
    	);
  }
}

export default Builder;
