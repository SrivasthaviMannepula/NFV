import React from 'react';
import './NFVBuildingBlocks.css';

const NFVBuildingBlocks = () => {
  return (
    <div className="nfv-building-blocks">
      <h2>Slide 4: NFV Building Blocks</h2>
      <h3>Heading: "Meet the Players: VNFs, NFVI, and More"</h3>
      <div className="content">
        <div className="flashcard">
          <h4>Introducing VNFs (Virtualized Network Functions)</h4>
          <p className="flashcard-content">
            What's a VNF?: Imagine if your favorite video game could suddenly become a music player without changing anything – that's how flexible VNFs are. They're like digital superheroes that can do different tasks without needing a new gadget.
          </p>
          <p className="flashcard-content">
            Real-Life Examples: Think of a VNF like a virtual superhero – a firewall that protects your computer or a load balancer that makes sure your favorite website doesn't get too slow.
          </p>
        </div>
        <div className="flashcard">
          <h4>Exploring NFVI (NFV Infrastructure)</h4>
          <p className="flashcard-content">
            The Digital Stage: NFVI is like the stage where all the magic happens. It includes:
          </p>
          <ul className="flashcard-list">
            <li>Compute: Think of this like the brain of our digital superhero, where all the thinking and processing takes place.</li>
            <li>Storage: This is like the superhero's memory, where it stores all the information it needs for different tasks.</li>
            <li>Networking: Imagine this as the superhero's way of talking to other superheroes and coordinating their actions.</li>
          </ul>
        </div>
      </div>
      <div className="speaker-notes">
        <p>Speaker Notes: "Our building blocks are software wonders – VNFs that perform tasks like magic, and NFVI that provides the stage for these digital performers. VNFs are like digital superheroes that can transform tasks without needing a new gadget. For example, think of a VNF as a firewall superhero protecting your computer or a load balancer superhero making sure your favorite website stays speedy. And then, NFVI is like the superhero's digital stage, where all the magic happens. It has the brain (compute), memory (storage), and communication skills (networking) to make everything work seamlessly."</p>
      </div>
    </div>
  );
};

export default NFVBuildingBlocks;
