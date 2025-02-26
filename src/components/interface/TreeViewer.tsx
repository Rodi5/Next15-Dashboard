'use client';
import { FaFolder, FaFolderOpen, FaFileAlt } from 'react-icons/fa';

import React, { useState } from 'react';

interface TreeNodeType {
  label: string;
  open?: boolean;
  children?: TreeNodeType[];
}

const TreeNode = ({ node }: { node: TreeNodeType }) => {
  const [isOpen, setIsOpen] = useState(node.open || false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div
        className={`flex items-center flex-wrap cursor-pointer select-none hover:bg-blue-100 w-full duration-200 ${
          node.children ? 'font-normal' : ''
        }`}
        onDoubleClick={toggleOpen}
        style={{wordBreak: "break-word", display: "flex", flexWrap: "wrap"}}>
        {node.children ? (
          isOpen ? (
            <FaFolderOpen className="mr-2 text-blue-500" />
          ) : (
            <FaFolder className="mr-2 text-yellow-500" />
          )
        ) : (
          <FaFileAlt className="mr-2 text-gray-500" />
        )}
        {node.label}
      </div>
      {isOpen && node.children && (
        <ul className="ml-4 border-l border-gray-300 pl-4">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeViewer = ({ data, title }: { data: TreeNodeType[]; title: string }) => {
    return (
      <div className="bg-white shadow p-4" style={{ color: '#333' }}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <ul className="list-none">
          {data.map((node, index) => (
            <TreeNode key={index} node={node} />
          ))}
        </ul>
      </div>
    );
  };

export default function App() {
  const treeData1: TreeNodeType[] = [
    {
      label: 'Admin Template',
      open: true,
      children: [
        {
          label: 'css',
          children: [
            { label: 'bootstrap.min.css' },
            { label: 'font-awesome.min.css' },
            { label: 'responsive.css' },
            { label: 'tree-viewer.css' },
          ],
        },
        {
          label: 'sounds',
          children: [
            { label: 'sound1.ogg' },
            { label: 'sound2.ogg' },
            { label: 'sound3.ogg' },
            { label: 'sound4.ogg' },
            { label: 'sound5.ogg' },
            { label: 'sound6.ogg' },
          ],
        },
        {
          label: 'fonts',
          children: [
            { label: 'edu-icon.ttf' },
            { label: 'edu-icon.woff' },
            { label: 'FontAwesome.otf' },
            { label: 'fontawesome-webfont.ttf' },
            { label: 'fontawesome-webfont.woff' },
            { label: 'glyphicons-halflings-regular.woff' },
          ],
        },
        {
          label: 'img',
          open: true,
          children: [
            { label: 'logo.png' },
            { label: 'favicon.ico' },
            { label: 'notification.png' },
            { label: 'message.png' },
          ],
        },
        {
          label: 'js',
          open: true,
          children: [
            { label: 'bootstrap.min.js' },
            { label: 'jquery-ui.min.js' },
            { label: 'jquery-meanmenu.js' },
            { label: 'jquery-1.11.3.min.js' },
            { label: 'modernizr-2.8.3.min.js' },
            { label: 'jquery.mCustomScrollbar.concat.min.js' },
          ],
        },
        { label: 'dashboard.html' },
        { label: 'dashboard2.html' },
        { label: 'analytics.html' },
        { label: 'widgets.html' },
        { label: 'tree-view.html' },
        { label: 'tinymc.html' },
        { label: 'sparkline.html' },
      ],
    },
  ];
  const treeData2: TreeNodeType[] = [
    {
      label: 'Empty Folder',
      children:[]
    },
    {
      label: 'Resources',
      open: true,
      children: [
        {
          label: 'css',
          open: true,
          children: [
            { label: 'animate.css' },
            { label: 'bootstrap.css' },
            { label: 'main.css' },
            { label: 'style.css' },
          ],
        },
        {
          label: 'js',
          open: true,
          children: [
            { label: 'bootstrap.ls' },
            { label: 'inspinia.min.js' },
            { label: 'jquery.min.js' },
            { label: 'jsTree.min.js' },
            { label: 'custom.min.js' },
          ],
        },
        {
          label: 'html',
          open: true,
          children: [
            { label: 'layout.html' },
            { label: 'navigation.html' },
            { label: 'navbar.html' },
            { label: 'footer.html' },
            { label: 'sidebar.html' },
          ],
        },
      ],
    },
    {
      label: 'Fonts',
      children: [],
    },
    {
      label: 'Images',
      children: [],
    },
    {
      label: 'Scripts',
      children: [],
    },
    {
      label: 'Templates',
      children: [],
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tree Viewer Style 1 */}
          <TreeViewer data={treeData1} title="Tree Viewer Style 1" />
          {/* Tree Viewer Style 2 */}
          <TreeViewer data={treeData2} title="Tree Viewer Style 2" />
        </div>
      </div>
    </div>
  );
}