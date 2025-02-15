import { RectangleHorizontal, RectangleVertical, Square, Circle, AlignLeft, ImageIcon, LayoutGrid, Minus, Twitter } from 'lucide-react';

export default [
  {
    icon: RectangleHorizontal,
    label: 'Button',
    type: 'Button',
    content: 'Sample Button',
    url: '',
    style: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      padding: '10px',
      width: 'auto',
      textAlign: 'center',
      fontSize: '16px',
      borderRadius: '10px',
      fontWeight: 'normal',
    },
    outerStyle: 'flex items-center justify-center',
  },
  {
    icon: AlignLeft,
    label: 'Text',
    type: 'Text',
    content: 'Sample Text',
    url: '',
    style: {
      fontSize: '16px',
      color: '#333',
      textAlign: 'left',
    },
    outerStyle: 'flex items-center justify-center',
  },
  {
    icon: ImageIcon,
    label: 'Image',
    type: 'Image',
    content: '',
    url: '',
    style: {
      width: '100%',
      height: 'auto',
    },
    outerStyle: 'flex items-center justify-center',
  },
  {
    icon: LayoutGrid,
    label: 'Logo',
    type: 'Logo',
    content: '',
    url: '',
    style: {
      width: '100px',
      height: '100px',
    },
    outerStyle: 'flex items-center justify-center',
  },
 
  {
    icon: Minus, // Utilise l'icône Minus de lucide-react
    label: 'Divider',
    type: 'Divider',
    content: '',
    url: '',
    style: {
      height: '1px',
      width: '100%',
      backgroundColor: '#ccc',
      margin: '10px 0',
    },
    outerStyle: 'flex items-center justify-center',
  },  
  
//   {
//     icon: RectangleVertical,
//     label: 'Input Field',
//     type: 'Input',
//     content: '',
//     url: '',
//     style: {
//       backgroundColor: '#f8f9fa',
//       color: '#495057',
//       padding: '8px',
//       width: '100%',
//       textAlign: 'left',
//       fontSize: '14px',
//       borderRadius: '5px',
//       fontWeight: 'normal',
//     },
//     outerStyle: 'flex items-center justify-center',
//   },
//   {
//     icon: Square,
//     label: 'Card',
//     type: 'Card',
//     content: 'Sample Card Content',
//     url: '',
//     style: {
//       backgroundColor: '#ffffff',
//       color: '#212529',
//       padding: '15px',
//       width: '100%',
//       textAlign: 'center',
//       fontSize: '18px',
//       borderRadius: '8px',
//       fontWeight: 'bold',
//     },
//     outerStyle: 'flex items-center justify-center',
//   },
//   {
//     icon: Circle,
//     label: 'Avatar',
//     type: 'Avatar',
//     content: '',
//     url: '',
//     style: {
//       backgroundColor: '#6c757d',
//       color: '#ffffff',
//       padding: '5px',
//       width: '50px',
//       height: '50px',
//       borderRadius: '50%',
//       textAlign: 'center',
//       fontSize: '16px',
//       fontWeight: 'normal',
//     },
//     outerStyle: 'flex items-center justify-center',
//   },
 
 
 
//   {
//     icon: Minus,
//     label: 'Divider',
//     type: 'Divider',
//     content: '',
//     url: '',
//     style: {
//       height: '1px',
//       backgroundColor: '#ccc',
//     },
//     outerStyle: 'flex items-center justify-center',
//   },
  {
    icon: Twitter,
    label: 'Twitter',
    type: 'Twitter',
    content: '',
    url: '',
    style: {
      color: '#1DA1F2',
      fontSize: '24px',
    },
    outerStyle: 'flex items-center justify-center',
  }
];
