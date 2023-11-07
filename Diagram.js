import React, { Component } from "react";
import Section from "./Section";

class Diagram extends Component {
  state = {
    sections: [],
  };

  buildDiagram = () => {
    const numSections = 9; // Number of sections to be generated
    const radius = 200; // Distance from the center
    const startAngle = 0;
    const angleIncrement = (360 / numSections) * (Math.PI / 180);

    const sections = [];
    for (let i = 0; i < numSections; i++) {
      const angle = startAngle + i * angleIncrement;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      sections.push({
        title: `Section ${i + 1}`,
        x,
        y,
      });
    }

    this.setState({ sections });
  };

  componentDidMount() {
    this.buildDiagram(); // Build the diagram on component mount
  }

  render() {
    return (
      <div className="diagram-container">
        <div className="nfv-title">
          <h1>NFV</h1>
        </div>
        <div className="sections">
          {this.state.sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              x={section.x}
              y={section.y}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Diagram;
