import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = ({ onSelect }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Nouvel état pour l'élément sélectionné

  const styles = {
    menuItem: {
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      padding: '10px 15px',
      margin: '0 -15px',
      width: 'calc(100% + 30px)',
    },
    menuItemHovered: {
      backgroundColor: '#cfbd97',
      color: '#FFFFFF',
    },
    menuItemSelected: {
      backgroundColor: '#cfbd97',
      color: '#FFFFFF',
    }
  };

  const getItemStyle = (itemName) => {
    // Vérifie si l'item est sélectionné ou survolé
    if (selectedItem === itemName || hoveredItem === itemName) {
      return { ...styles.menuItem, ...styles.menuItemSelected };
    }
    return styles.menuItem;
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName); // Met à jour l'élément sélectionné
    onSelect(itemName); // Appelle la fonction onSelect passée en props
  };

  const menuItems = [
    { name: 'informations', icon: 'info-circle', label: 'Informations Restaurant' },
    { name: 'horaires', icon: 'clock', label: 'Horaires' },
    { name: 'paiements', icon: 'credit-card', label: 'Paiements' },
    { name: 'politiques', icon: 'file-alt', label: "Politiques de l'Application" }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#000000"
        style={{ height: '100%' }}
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit', fontSize: '20px' }}
          >
            Paramètres
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            {menuItems.map(item => (
              <CDBSidebarMenuItem
                key={item.name}
                icon={item.icon}
                onClick={() => handleItemClick(item.name)}
                style={getItemStyle(item.name)}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
              </CDBSidebarMenuItem>
            ))}
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;