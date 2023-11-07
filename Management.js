import React, { useState } from 'react';
import './Management.css';

const Management = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'nfvo',
      title: 'NFVO (Network Functions Virtualization Orchestrator)',
      description:
        'Imagine NFVO as a conductor guiding a virtual orchestra, deciding which instruments (VNFs) play when and how loud.',
    },
    {
      id: 'vim',
      title: 'VIM (Virtualized Infrastructure Manager)',
      description:
        'VIM is like a backstage manager ensuring that the stage (NFVI) is set up with the right equipment and resources for the performance.',
    },
    {
      id: 'vnfm',
      title: 'VNFM (VNF Manager)',
      description:
        'VNFM is akin to a personal assistant for each musician (VNF), ensuring they are ready, tuned, and in the right place.',
    },
  ];

  const handleRoleClick = (roleId) => {
    setSelectedRole(roleId);
  };

  return (
    <div className="management-container">
      <h2>Slide 6: Management and Orchestration (MANO)</h2>
      <h3>Heading: "The Maestro Behind the Scenes: MANO"</h3>
      <div className="content">
        <div className="role-list">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`role ${selectedRole === role.id ? 'selected' : ''}`}
              onClick={() => handleRoleClick(role.id)}
            >
              {role.title}
            </div>
          ))}
        </div>
        <div className="description">
          {selectedRole && (
            <p>{roles.find((role) => role.id === selectedRole).description}</p>
          )}
        </div>
      </div>
      <div className="speaker-notes">
        <p>
          Speaker Notes: "MANO is our symphony conductor, directing the deployment, management, and lifecycles of VNFs. NFVO, VIM, and VNFM are our musical notes, each playing a crucial role. Imagine NFVO as a conductor guiding a virtual orchestra, deciding which instruments (VNFs) play when and how loud. VIM is like a backstage manager ensuring that the stage (NFVI) is set up with the right equipment and resources for the performance. VNFM is akin to a personal assistant for each musician (VNF), ensuring they are ready, tuned, and in the right place."
        </p>
      </div>
    </div>
  );
};

export default Management;
