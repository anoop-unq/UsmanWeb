// // // import React, { useState, useRef } from 'react';
// // // import { Upload, Plus, Trash2, AlignLeft, AlignCenter, AlignRight, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, Square } from 'lucide-react';

// // // // UploadedImage Component (in left sidebar)
// // // const UploadedImage = ({ image, onDragStart }) => {
// // //   return (
// // //     <div
// // //       draggable
// // //       onDragStart={(e) => onDragStart(e, image)}
// // //       className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-move hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-400"
// // //     >
// // //       <img 
// // //         src={image.src} 
// // //         alt={image.name}
// // //         className="w-full h-24 object-cover"
// // //       />
// // //       <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-1">
// // //         <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
// // //           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //         </svg>
// // //       </div>
// // //       <p className="text-xs text-gray-600 p-2 text-center truncate">{image.name}</p>
// // //     </div>
// // //   );
// // // };

// // // // PageCanvas Component (droppable area)
// // // const PageCanvas = ({ page, index, onDrop, onDragOver, onTextChange, isActive, onClick }) => {
// // //   const [isDragging, setIsDragging] = useState(false);

// // //   const handleDragOver = (e) => {
// // //     e.preventDefault();
// // //     setIsDragging(true);
// // //     onDragOver(e);
// // //   };

// // //   const handleDragLeave = () => {
// // //     setIsDragging(false);
// // //   };

// // //   const handleDrop = (e) => {
// // //     e.preventDefault();
// // //     setIsDragging(false);
// // //     onDrop(e, index);
// // //   };

// // //   return (
// // //     <div
// // //       onClick={onClick}
// // //       onDragOver={handleDragOver}
// // //       onDragLeave={handleDragLeave}
// // //       onDrop={handleDrop}
// // //       className={`relative bg-white shadow-xl transition-all ${
// // //         isActive ? 'ring-4 ring-blue-500' : ''
// // //       } ${isDragging ? 'ring-4 ring-blue-300 bg-blue-50' : ''}`}
// // //       style={{ 
// // //         aspectRatio: '8.5/11',
// // //         minHeight: '600px',
// // //         background: page.bgColor || '#faf9f6'
// // //       }}
// // //     >
// // //       {/* Book Spine */}
// // //       {(index === 0 || index === 1) && (
// // //         <div 
// // //           className="absolute top-0 bottom-0 w-12 bg-gray-300 flex items-center justify-center"
// // //           style={{ 
// // //             [index === 0 ? 'right' : 'left']: 0,
// // //             borderLeft: index === 0 ? '1px solid #999' : 'none',
// // //             borderRight: index === 1 ? '1px solid #999' : 'none'
// // //           }}
// // //         >
// // //           <span className="text-xs text-gray-600 transform rotate-90 whitespace-nowrap">TEXT</span>
// // //         </div>
// // //       )}

// // //       {/* Main Content Area */}
// // //       <div className={`h-full flex flex-col justify-between ${index === 0 ? 'pr-12' : index === 1 ? 'pl-12' : ''} p-8`}>
// // //         {/* Top Text Area */}
// // //         {page.topText && (
// // //           <div className="text-center">
// // //             <input
// // //               type="text"
// // //               value={page.topText}
// // //               onChange={(e) => onTextChange(index, 'topText', e.target.value)}
// // //               onClick={(e) => e.stopPropagation()}
// // //               className="w-full text-4xl font-serif text-center bg-transparent border-none outline-none"
// // //               style={{ 
// // //                 fontFamily: page.topTextFont || 'Georgia',
// // //                 textAlign: page.topTextAlign || 'center',
// // //                 color: '#2d5a4a'
// // //               }}
// // //             />
// // //           </div>
// // //         )}

// // //         {/* Image Drop Zone */}
// // //         <div className="flex-1 flex items-center justify-center my-8">
// // //           {page.image ? (
// // //             <div className="relative group">
// // //               <img 
// // //                 src={page.image} 
// // //                 alt="Page content"
// // //                 className="max-w-full max-h-96 object-contain shadow-lg"
// // //                 style={{
// // //                   filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
// // //                 }}
// // //               />
// // //               <button
// // //                 onClick={(e) => {
// // //                   e.stopPropagation();
// // //                   const newPages = [...page];
// // //                   onTextChange(index, 'image', null);
// // //                 }}
// // //                 className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
// // //               >
// // //                 <Trash2 size={16} />
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
// // //               <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
// // //                 <Upload size={32} className="text-gray-400" />
// // //               </div>
// // //               <p className="text-gray-400 text-sm">Drag & Drop Image Here</p>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Bottom Text Area */}
// // //         {page.bottomText && (
// // //           <div className="text-center">
// // //             <input
// // //               type="text"
// // //               value={page.bottomText}
// // //               onChange={(e) => onTextChange(index, 'bottomText', e.target.value)}
// // //               onClick={(e) => e.stopPropagation()}
// // //               className="w-full text-sm text-center bg-transparent border-none outline-none uppercase tracking-wider"
// // //               style={{ 
// // //                 fontFamily: page.bottomTextFont || 'Arial',
// // //                 textAlign: page.bottomTextAlign || 'center',
// // //                 letterSpacing: '0.2em'
// // //               }}
// // //             />
// // //           </div>
// // //         )}

// // //         {/* Page-specific elements */}
// // //         {index === 0 && (
// // //           <div className="absolute bottom-8 left-8">
// // //             <input
// // //               type="text"
// // //               value={page.brandText || 'Odd Giraffe'}
// // //               onChange={(e) => onTextChange(index, 'brandText', e.target.value)}
// // //               onClick={(e) => e.stopPropagation()}
// // //               className="text-2xl font-serif italic bg-transparent border-none outline-none"
// // //             />
// // //             <div className="flex gap-2 items-center mt-2">
// // //               <div className="w-8 h-8 bg-gray-800 rounded-sm"></div>
// // //               <div className="flex gap-1">
// // //                 <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
// // //                 <div className="w-2 h-2 bg-gray-800"></div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // PageThumbnail Component
// // // const PageThumbnail = ({ page, index, isActive, onClick, label }) => {
// // //   return (
// // //     <div
// // //       onClick={onClick}
// // //       className={`relative cursor-pointer bg-white shadow-md hover:shadow-lg transition-all overflow-hidden ${
// // //         isActive ? 'ring-3 ring-blue-500' : ''
// // //       }`}
// // //       style={{ aspectRatio: '8.5/11' }}
// // //     >
// // //       <div className="h-full p-2 text-xs" style={{ background: page.bgColor || '#faf9f6' }}>
// // //         {page.image && (
// // //           <img src={page.image} alt={`Page ${index + 1}`} className="w-full h-20 object-contain mb-1" />
// // //         )}
// // //         {page.topText && (
// // //           <div className="text-center text-xs truncate font-serif">{page.topText}</div>
// // //         )}
// // //       </div>
// // //       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center py-1">
// // //         <p className="text-xs font-medium">{label}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // TextEditor Sidebar Component
// // // const TextEditorSidebar = ({ activePage, pages, onUpdate }) => {
// // //   if (!activePage) return (
// // //     <div className="p-8 text-center text-gray-400">
// // //       <p className="mb-4">Click the <span className="inline-block w-6 h-6 bg-gray-200 rounded"></span> button</p>
// // //       <p>at the top of the main area to add a text box to your project.</p>
// // //       <p className="mt-4">Double click existing text boxes to edit them.</p>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="p-4 space-y-6">
// // //       <div>
// // //         <h3 className="font-semibold mb-3 flex items-center gap-2">
// // //           <span className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-sm">T</span>
// // //           Texts:
// // //         </h3>
// // //       </div>

// // //       {/* Alignment */}
// // //       <div>
// // //         <div className="flex gap-2 mb-4">
// // //           <button
// // //             onClick={() => onUpdate({ topTextAlign: 'left' })}
// // //             className={`p-3 border rounded ${activePage.topTextAlign === 'left' ? 'bg-gray-200' : 'bg-white'}`}
// // //           >
// // //             <AlignLeft size={20} />
// // //           </button>
// // //           <button
// // //             onClick={() => onUpdate({ topTextAlign: 'center' })}
// // //             className={`p-3 border rounded ${activePage.topTextAlign === 'center' ? 'bg-gray-200' : 'bg-white'}`}
// // //           >
// // //             <AlignCenter size={20} />
// // //           </button>
// // //           <button
// // //             onClick={() => onUpdate({ topTextAlign: 'right' })}
// // //             className={`p-3 border rounded ${activePage.topTextAlign === 'right' ? 'bg-gray-200' : 'bg-white'}`}
// // //           >
// // //             <AlignRight size={20} />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Font */}
// // //       <div>
// // //         <div className="grid grid-cols-2 gap-2">
// // //           <button className="p-3 border rounded bg-white hover:bg-gray-50">
// // //             <div className="w-full h-4 bg-gray-200 rounded"></div>
// // //           </button>
// // //           <button className="p-3 border rounded bg-white hover:bg-gray-50">
// // //             <div className="w-full h-4 bg-gray-200 rounded"></div>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Effects */}
// // //       <div>
// // //         <button className="w-full p-3 border rounded bg-white hover:bg-gray-50 flex items-center justify-center gap-2">
// // //           <span className="w-4 h-4 bg-gray-200 rounded"></span>
// // //           Effects
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Main App Component
// // // const App = () => {
// // //   const [uploadedImages, setUploadedImages] = useState([]);
// // //   const [pages, setPages] = useState([
// // //     { 
// // //       id: 'back-cover',
// // //       image: null, 
// // //       topText: '', 
// // //       bottomText: '',
// // //       brandText: 'Odd Giraffe',
// // //       bgColor: '#faf9f6',
// // //       topTextAlign: 'center',
// // //       topTextFont: 'Georgia'
// // //     },
// // //     { 
// // //       id: 'front-cover',
// // //       image: null, 
// // //       topText: 'you&me', 
// // //       bottomText: 'THANK YOU FOR EVERYTHING',
// // //       bgColor: '#faf9f6',
// // //       topTextAlign: 'center',
// // //       topTextFont: 'Georgia'
// // //     },
// // //     { id: 'page-1', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// // //     { id: 'page-2', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// // //     { id: 'page-3', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// // //     { id: 'page-4', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// // //     { id: 'page-5', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// // //     { id: 'page-6', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// // //   ]);
// // //   const [activePageIndex, setActivePageIndex] = useState(1);
// // //   const [draggedImage, setDraggedImage] = useState(null);
// // //   const [viewMode, setViewMode] = useState('spread'); // 'spread' or 'single'
// // //   const [currentSpread, setCurrentSpread] = useState(0);
// // //   const fileInputRef = useRef(null);

// // //   const handleFileUpload = (e) => {
// // //     const files = Array.from(e.target.files);
// // //     files.forEach(file => {
// // //       const reader = new FileReader();
// // //       reader.onload = (event) => {
// // //         const newImage = {
// // //           id: Date.now() + Math.random(),
// // //           src: event.target.result,
// // //           name: file.name
// // //         };
// // //         setUploadedImages(prev => [...prev, newImage]);
// // //       };
// // //       reader.readAsDataURL(file);
// // //     });
// // //   };

// // //   const handleDragStart = (e, image) => {
// // //     setDraggedImage(image);
// // //     e.dataTransfer.effectAllowed = 'copy';
// // //   };

// // //   const handleDragOver = (e) => {
// // //     e.preventDefault();
// // //     e.dataTransfer.dropEffect = 'copy';
// // //   };

// // //   const handleDrop = (e, pageIndex) => {
// // //     e.preventDefault();
// // //     if (draggedImage) {
// // //       const newPages = [...pages];
// // //       newPages[pageIndex] = { ...newPages[pageIndex], image: draggedImage.src };
// // //       setPages(newPages);
// // //       setDraggedImage(null);
// // //     }
// // //   };

// // //   const handleTextChange = (pageIndex, field, value) => {
// // //     const newPages = [...pages];
// // //     newPages[pageIndex] = { ...newPages[pageIndex], [field]: value };
// // //     setPages(newPages);
// // //   };

// // //   const handlePageUpdate = (updates) => {
// // //     const newPages = [...pages];
// // //     newPages[activePageIndex] = { ...newPages[activePageIndex], ...updates };
// // //     setPages(newPages);
// // //   };

// // //   const handleAddPage = () => {
// // //     const newPage = {
// // //       id: `page-${Date.now()}`,
// // //       image: null,
// // //       topText: '',
// // //       bottomText: '',
// // //       bgColor: '#ffffff'
// // //     };
// // //     setPages([...pages, newPage]);
// // //   };

// // //   const visiblePages = viewMode === 'spread' 
// // //     ? [pages[currentSpread * 2], pages[currentSpread * 2 + 1]].filter(Boolean)
// // //     : [pages[currentSpread]];

// // //   return (
// // //     <div className="flex h-screen bg-gray-50">
// // //       {/* Left Sidebar - Upload Area */}
// // //       <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
// // //         <div className="p-4 border-b">
// // //           <h2 className="font-semibold mb-3">Upload</h2>
          
// // //           {/* Autofill Toggle */}
// // //           <div className="flex items-center gap-2 mb-4">
// // //             <input type="checkbox" id="autofill" className="w-4 h-4" />
// // //             <label htmlFor="autofill" className="text-sm">Autofill</label>
// // //           </div>

// // //           {/* View Mode Buttons */}
// // //           <div className="flex gap-2 mb-4">
// // //             <button 
// // //               onClick={() => setViewMode('single')}
// // //               className={`flex-1 p-2 border rounded ${viewMode === 'single' ? 'bg-gray-200' : ''}`}
// // //             >
// // //               <Square size={20} className="mx-auto" />
// // //             </button>
// // //             <button 
// // //               onClick={() => setViewMode('spread')}
// // //               className={`flex-1 p-2 border rounded ${viewMode === 'spread' ? 'bg-gray-200' : ''}`}
// // //             >
// // //               <LayoutGrid size={20} className="mx-auto" />
// // //             </button>
// // //             <button className="flex-1 p-2 border rounded">
// // //               <Grid3x3 size={20} className="mx-auto" />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Uploaded Images */}
// // //         <div className="flex-1 overflow-y-auto p-4">
// // //           <div className="space-y-3">
// // //             {uploadedImages.map((image) => (
// // //               <UploadedImage
// // //                 key={image.id}
// // //                 image={image}
// // //                 onDragStart={handleDragStart}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Upload Button */}
// // //         <div className="p-4 border-t">
// // //           <button
// // //             onClick={() => fileInputRef.current?.click()}
// // //             className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
// // //           >
// // //             <Plus size={20} />
// // //             Upload images
// // //           </button>
// // //           <input
// // //             ref={fileInputRef}
// // //             type="file"
// // //             accept="image/*"
// // //             multiple
// // //             onChange={handleFileUpload}
// // //             className="hidden"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Main Content Area */}
// // //       <div className="flex-1 flex flex-col">
// // //         {/* Top Toolbar */}
// // //         <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
// // //           <div className="flex items-center gap-4">
// // //             <button className="p-2 hover:bg-gray-100 rounded">
// // //               <ChevronLeft size={20} />
// // //             </button>
// // //             <button className="p-2 hover:bg-gray-100 rounded">
// // //               <ChevronRight size={20} />
// // //             </button>
// // //           </div>
          
// // //           <div className="flex items-center gap-2">
// // //             <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">−</button>
// // //             <span className="text-sm w-16 text-center">100%</span>
// // //             <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">+</button>
// // //           </div>
// // //         </div>

// // //         {/* Canvas Area */}
// // //         <div className="flex-1 overflow-auto bg-gray-100 p-8">
// // //           <div className="max-w-6xl mx-auto">
// // //             <div className={`grid gap-0 ${viewMode === 'spread' ? 'grid-cols-2' : 'grid-cols-1'} shadow-2xl`}>
// // //               {visiblePages.map((page, idx) => {
// // //                 const actualIndex = viewMode === 'spread' ? currentSpread * 2 + idx : currentSpread;
// // //                 return (
// // //                   <PageCanvas
// // //                     key={page?.id || idx}
// // //                     page={page || {}}
// // //                     index={actualIndex}
// // //                     onDrop={handleDrop}
// // //                     onDragOver={handleDragOver}
// // //                     onTextChange={handleTextChange}
// // //                     isActive={activePageIndex === actualIndex}
// // //                     onClick={() => setActivePageIndex(actualIndex)}
// // //                   />
// // //                 );
// // //               })}
// // //             </div>

// // //             {/* Page Labels */}
// // //             <div className={`grid gap-8 mt-4 ${viewMode === 'spread' ? 'grid-cols-2' : 'grid-cols-1'}`}>
// // //               {visiblePages.map((page, idx) => {
// // //                 const actualIndex = viewMode === 'spread' ? currentSpread * 2 + idx : currentSpread;
// // //                 let label = '';
// // //                 if (actualIndex === 0) label = 'Back Cover';
// // //                 else if (actualIndex === 1) label = 'Front Cover';
// // //                 else label = `Page ${actualIndex - 1}`;
                
// // //                 return (
// // //                   <p key={idx} className="text-center text-sm text-gray-600">{label}</p>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom Thumbnails */}
// // //         <div className="bg-white border-t px-4 py-3">
// // //           <div className="flex items-center justify-between mb-2">
// // //             <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1">
// // //               <span>📖</span> Organize pages <ChevronLeft size={16} className="rotate-90" />
// // //             </button>
// // //           </div>
          
// // //           <div className="flex gap-3 overflow-x-auto pb-2">
// // //             {pages.map((page, index) => {
// // //               let label = '';
// // //               if (index === 0) label = 'Back Cover';
// // //               else if (index === 1) label = 'Front Cover';
// // //               else label = `Page ${index - 1}`;
              
// // //               return (
// // //                 <div key={page.id} className="flex-shrink-0" style={{ width: '100px' }}>
// // //                   <PageThumbnail
// // //                     page={page}
// // //                     index={index}
// // //                     isActive={activePageIndex === index}
// // //                     onClick={() => {
// // //                       setActivePageIndex(index);
// // //                       setCurrentSpread(Math.floor(index / 2));
// // //                     }}
// // //                     label={label}
// // //                   />
// // //                 </div>
// // //               );
// // //             })}
            
// // //             <button
// // //               onClick={handleAddPage}
// // //               className="flex-shrink-0 border-2 border-dashed border-gray-300 rounded hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center"
// // //               style={{ width: '100px', aspectRatio: '8.5/11' }}
// // //             >
// // //               <Plus size={24} className="text-gray-400" />
// // //             </button>

// // //             <button className="flex-shrink-0 border-2 border-gray-300 rounded hover:bg-gray-100 transition-all flex items-center justify-center"
// // //               style={{ width: '100px', aspectRatio: '8.5/11' }}>
// // //               <Trash2 size={24} className="text-gray-400" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Right Sidebar - Text Editor */}
// // //       <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
// // //         <TextEditorSidebar
// // //           activePage={pages[activePageIndex]}
// // //           pages={pages}
// // //           onUpdate={handlePageUpdate}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // import React, { useState, useRef, useEffect } from 'react';
// // import { Upload, Plus, Trash2, AlignLeft, AlignCenter, AlignRight, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, Square } from 'lucide-react';

// // // UploadedImage Component (in left sidebar)
// // const UploadedImage = ({ image, onDragStart }) => {
// //   return (
// //     <div
// //       draggable
// //       onDragStart={(e) => onDragStart(e, image)}
// //       className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-move hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-400"
// //     >
// //       <img 
// //         src={image.src} 
// //         alt={image.name}
// //         className="w-full h-24 object-cover"
// //       />
// //       <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-1">
// //         <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
// //           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //         </svg>
// //       </div>
// //       <p className="text-xs text-gray-600 p-2 text-center truncate">{image.name}</p>
// //     </div>
// //   );
// // };

// // // PageCanvas Component (droppable area)
// // const PageCanvas = ({ page, index, onDrop, onDragOver, onTextChange, isActive, onClick }) => {
// //   const [isDragging, setIsDragging] = useState(false);

// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //     setIsDragging(true);
// //     onDragOver(e);
// //   };

// //   const handleDragLeave = () => {
// //     setIsDragging(false);
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     onDrop(e, index);
// //   };

// //   return (
// //     <div
// //       onClick={onClick}
// //       onDragOver={handleDragOver}
// //       onDragLeave={handleDragLeave}
// //       onDrop={handleDrop}
// //       className={`relative bg-white transition-all ${
// //         isActive ? 'ring-4 ring-blue-500' : ''
// //       } ${isDragging ? 'ring-4 ring-blue-300 bg-blue-50' : ''}`}
// //       style={{ 
// //         aspectRatio: '8.5/11',
// //         background: page.bgColor || '#faf9f6'
// //       }}
// //     >
// //       {/* Book Spine */}
// //       {(index === 0 || index === 1) && (
// //         <div 
// //           className="absolute top-0 bottom-0 w-8 bg-gray-300 flex items-center justify-center"
// //           style={{ 
// //             [index === 0 ? 'right' : 'left']: 0,
// //             borderLeft: index === 0 ? '1px solid #999' : 'none',
// //             borderRight: index === 1 ? '1px solid #999' : 'none'
// //           }}
// //         >
// //           <span className="text-xs text-gray-600 transform rotate-90 whitespace-nowrap">TEXT</span>
// //         </div>
// //       )}

// //       {/* Main Content Area */}
// //       <div className={`h-full flex flex-col justify-between ${index === 0 ? 'pr-8' : index === 1 ? 'pl-8' : ''} p-6`}>
// //         {/* Top Text Area */}
// //         {page.topText && (
// //           <div className="text-center">
// //             <input
// //               type="text"
// //               value={page.topText}
// //               onChange={(e) => onTextChange(index, 'topText', e.target.value)}
// //               onClick={(e) => e.stopPropagation()}
// //               className="w-full text-3xl font-serif text-center bg-transparent border-none outline-none"
// //               style={{ 
// //                 fontFamily: page.topTextFont || 'Georgia',
// //                 textAlign: page.topTextAlign || 'center',
// //                 color: '#2d5a4a'
// //               }}
// //             />
// //           </div>
// //         )}

// //         {/* Image Drop Zone */}
// //         <div className="flex-1 flex items-center justify-center my-4">
// //           {page.image ? (
// //             <div className="relative group">
// //               <img 
// //                 src={page.image} 
// //                 alt="Page content"
// //                 className="max-w-full max-h-64 object-contain"
// //                 style={{
// //                   filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
// //                 }}
// //               />
// //               <button
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   onTextChange(index, 'image', null);
// //                 }}
// //                 className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
// //               >
// //                 <Trash2 size={14} />
// //               </button>
// //             </div>
// //           ) : (
// //             <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
// //               <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
// //                 <Upload size={24} className="text-gray-400" />
// //               </div>
// //               <p className="text-gray-400 text-xs">Drag & Drop Image Here</p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Bottom Text Area */}
// //         {page.bottomText && (
// //           <div className="text-center">
// //             <input
// //               type="text"
// //               value={page.bottomText}
// //               onChange={(e) => onTextChange(index, 'bottomText', e.target.value)}
// //               onClick={(e) => e.stopPropagation()}
// //               className="w-full text-xs text-center bg-transparent border-none outline-none uppercase tracking-wider"
// //               style={{ 
// //                 fontFamily: page.bottomTextFont || 'Arial',
// //                 textAlign: page.bottomTextAlign || 'center',
// //                 letterSpacing: '0.2em'
// //               }}
// //             />
// //           </div>
// //         )}

// //         {/* Page-specific elements */}
// //         {index === 0 && (
// //           <div className="absolute bottom-4 left-4">
// //             <input
// //               type="text"
// //               value={page.brandText || 'Odd Giraffe'}
// //               onChange={(e) => onTextChange(index, 'brandText', e.target.value)}
// //               onClick={(e) => e.stopPropagation()}
// //               className="text-lg font-serif italic bg-transparent border-none outline-none"
// //             />
// //             <div className="flex gap-2 items-center mt-1">
// //               <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
// //               <div className="flex gap-1">
// //                 <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
// //                 <div className="w-1.5 h-1.5 bg-gray-800"></div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // PageThumbnail Component
// // const PageThumbnail = ({ page, index, isActive, onClick, label }) => {
// //   return (
// //     <div
// //       onClick={onClick}
// //       className={`relative cursor-pointer bg-white shadow-md hover:shadow-lg transition-all overflow-hidden ${
// //         isActive ? 'ring-2 ring-blue-500' : ''
// //       }`}
// //       style={{ aspectRatio: '8.5/11' }}
// //     >
// //       <div className="h-full p-1 text-xs" style={{ background: page.bgColor || '#faf9f6' }}>
// //         {page.image && (
// //           <img src={page.image} alt={`Page ${index + 1}`} className="w-full h-16 object-contain mb-1" />
// //         )}
// //         {page.topText && (
// //           <div className="text-center text-xs truncate font-serif">{page.topText}</div>
// //         )}
// //       </div>
// //       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center py-1">
// //         <p className="text-xs font-medium">{label}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // // TextEditor Sidebar Component
// // const TextEditorSidebar = ({ activePage, pages, onUpdate }) => {
// //   if (!activePage) return (
// //     <div className="p-6 text-center text-gray-400">
// //       <p className="mb-3">Click the <span className="inline-block w-5 h-5 bg-gray-200 rounded"></span> button</p>
// //       <p className="text-sm">at the top of the main area to add a text box to your project.</p>
// //       <p className="mt-3 text-sm">Double click existing text boxes to edit them.</p>
// //     </div>
// //   );

// //   return (
// //     <div className="p-4 space-y-4">
// //       <div>
// //         <h3 className="font-semibold mb-2 flex items-center gap-2">
// //           <span className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">T</span>
// //           Texts:
// //         </h3>
// //       </div>

// //       {/* Alignment */}
// //       <div>
// //         <div className="flex gap-1 mb-3">
// //           <button
// //             onClick={() => onUpdate({ topTextAlign: 'left' })}
// //             className={`p-2 border rounded ${activePage.topTextAlign === 'left' ? 'bg-gray-200' : 'bg-white'}`}
// //           >
// //             <AlignLeft size={16} />
// //           </button>
// //           <button
// //             onClick={() => onUpdate({ topTextAlign: 'center' })}
// //             className={`p-2 border rounded ${activePage.topTextAlign === 'center' ? 'bg-gray-200' : 'bg-white'}`}
// //           >
// //             <AlignCenter size={16} />
// //           </button>
// //           <button
// //             onClick={() => onUpdate({ topTextAlign: 'right' })}
// //             className={`p-2 border rounded ${activePage.topTextAlign === 'right' ? 'bg-gray-200' : 'bg-white'}`}
// //           >
// //             <AlignRight size={16} />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Font */}
// //       <div>
// //         <div className="grid grid-cols-2 gap-1">
// //           <button className="p-2 border rounded bg-white hover:bg-gray-50 text-xs">
// //             Georgia
// //           </button>
// //           <button className="p-2 border rounded bg-white hover:bg-gray-50 text-xs">
// //             Arial
// //           </button>
// //         </div>
// //       </div>

// //       {/* Effects */}
// //       <div>
// //         <button className="w-full p-2 border rounded bg-white hover:bg-gray-50 flex items-center justify-center gap-1 text-sm">
// //           <span className="w-3 h-3 bg-gray-200 rounded"></span>
// //           Effects
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main App Component
// // const App = () => {
// //   const [uploadedImages, setUploadedImages] = useState([]);
// //   const [pages, setPages] = useState([
// //     { 
// //       id: 'back-cover',
// //       image: null, 
// //       topText: '', 
// //       bottomText: '',
// //       brandText: 'Odd Giraffe',
// //       bgColor: '#faf9f6',
// //       topTextAlign: 'center',
// //       topTextFont: 'Georgia'
// //     },
// //     { 
// //       id: 'front-cover',
// //       image: null, 
// //       topText: 'you&me', 
// //       bottomText: 'THANK YOU FOR EVERYTHING',
// //       bgColor: '#faf9f6',
// //       topTextAlign: 'center',
// //       topTextFont: 'Georgia'
// //     },
// //     { id: 'page-1', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// //     { id: 'page-2', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// //     { id: 'page-3', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// //     { id: 'page-4', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// //     { id: 'page-5', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// //     { id: 'page-6', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
// //   ]);
// //   const [activePageIndex, setActivePageIndex] = useState(1);
// //   const [draggedImage, setDraggedImage] = useState(null);
// //   const [viewMode, setViewMode] = useState('spread'); // 'spread' or 'single'
// //   const [currentSpread, setCurrentSpread] = useState(0);
// //   const [scale, setScale] = useState(1);
// //   const fileInputRef = useRef(null);

// //   const handleFileUpload = (e) => {
// //     const files = Array.from(e.target.files);
// //     files.forEach(file => {
// //       const reader = new FileReader();
// //       reader.onload = (event) => {
// //         const newImage = {
// //           id: Date.now() + Math.random(),
// //           src: event.target.result,
// //           name: file.name
// //         };
// //         setUploadedImages(prev => [...prev, newImage]);
// //       };
// //       reader.readAsDataURL(file);
// //     });
// //   };

// //   const handleDragStart = (e, image) => {
// //     setDraggedImage(image);
// //     e.dataTransfer.effectAllowed = 'copy';
// //   };

// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //     e.dataTransfer.dropEffect = 'copy';
// //   };

// //   const handleDrop = (e, pageIndex) => {
// //     e.preventDefault();
// //     if (draggedImage) {
// //       const newPages = [...pages];
// //       newPages[pageIndex] = { ...newPages[pageIndex], image: draggedImage.src };
// //       setPages(newPages);
// //       setDraggedImage(null);
// //     }
// //   };

// //   const handleTextChange = (pageIndex, field, value) => {
// //     const newPages = [...pages];
// //     newPages[pageIndex] = { ...newPages[pageIndex], [field]: value };
// //     setPages(newPages);
// //   };

// //   const handlePageUpdate = (updates) => {
// //     const newPages = [...pages];
// //     newPages[activePageIndex] = { ...newPages[activePageIndex], ...updates };
// //     setPages(newPages);
// //   };

// //   const handleAddPage = () => {
// //     const newPage = {
// //       id: `page-${Date.now()}`,
// //       image: null,
// //       topText: '',
// //       bottomText: '',
// //       bgColor: '#ffffff'
// //     };
// //     setPages([...pages, newPage]);
// //   };

// //   const handleZoomIn = () => {
// //     setScale(prev => Math.min(prev + 0.1, 2));
// //   };

// //   const handleZoomOut = () => {
// //     setScale(prev => Math.max(prev - 0.1, 0.5));
// //   };

// //   const visiblePages = viewMode === 'spread' 
// //     ? [pages[currentSpread * 2], pages[currentSpread * 2 + 1]].filter(Boolean)
// //     : [pages[currentSpread]];

// //   return (
// //     <div className="flex h-screen bg-gray-50 overflow-hidden">
// //       {/* Left Sidebar - Upload Area */}
// //       <div className="w-60 bg-white border-r border-gray-200 flex flex-col">
// //         <div className="p-3 border-b">
// //           <h2 className="font-semibold mb-2 text-sm">Upload</h2>
          
// //           {/* Autofill Toggle */}
// //           <div className="flex items-center gap-2 mb-3">
// //             <input type="checkbox" id="autofill" className="w-3 h-3" />
// //             <label htmlFor="autofill" className="text-xs">Autofill</label>
// //           </div>

// //           {/* View Mode Buttons */}
// //           <div className="flex gap-1 mb-3">
// //             <button 
// //               onClick={() => setViewMode('single')}
// //               className={`flex-1 p-1 border rounded text-xs ${viewMode === 'single' ? 'bg-gray-200' : ''}`}
// //             >
// //               <Square size={14} className="mx-auto" />
// //             </button>
// //             <button 
// //               onClick={() => setViewMode('spread')}
// //               className={`flex-1 p-1 border rounded text-xs ${viewMode === 'spread' ? 'bg-gray-200' : ''}`}
// //             >
// //               <LayoutGrid size={14} className="mx-auto" />
// //             </button>
// //             <button className="flex-1 p-1 border rounded text-xs">
// //               <Grid3x3 size={14} className="mx-auto" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Uploaded Images */}
// //         <div className="flex-1 overflow-y-auto p-3">
// //           <div className="space-y-2">
// //             {uploadedImages.map((image) => (
// //               <UploadedImage
// //                 key={image.id}
// //                 image={image}
// //                 onDragStart={handleDragStart}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Upload Button */}
// //         <div className="p-3 border-t">
// //           <button
// //             onClick={() => fileInputRef.current?.click()}
// //             className="w-full bg-gray-700 text-white py-2 rounded text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
// //           >
// //             <Plus size={16} />
// //             Upload images
// //           </button>
// //           <input
// //             ref={fileInputRef}
// //             type="file"
// //             accept="image/*"
// //             multiple
// //             onChange={handleFileUpload}
// //             className="hidden"
// //           />
// //         </div>
// //       </div>

// //       {/* Main Content Area */}
// //       <div className="flex-1 flex flex-col min-w-0">
// //         {/* Top Toolbar */}
// //         <div className="bg-white border-b px-4 py-2 flex items-center justify-between flex-shrink-0">
// //           <div className="flex items-center gap-2">
// //             <button 
// //               className="p-1 hover:bg-gray-100 rounded"
// //               onClick={() => setCurrentSpread(prev => Math.max(prev - 1, 0))}
// //             >
// //               <ChevronLeft size={16} />
// //             </button>
// //             <button 
// //               className="p-1 hover:bg-gray-100 rounded"
// //               onClick={() => setCurrentSpread(prev => Math.min(prev + 1, Math.floor((pages.length - 1) / 2)))}
// //             >
// //               <ChevronRight size={16} />
// //             </button>
// //           </div>
          
// //           <div className="flex items-center gap-1">
// //             <button 
// //               className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs"
// //               onClick={handleZoomOut}
// //             >
// //               −
// //             </button>
// //             <span className="text-xs w-12 text-center">{Math.round(scale * 100)}%</span>
// //             <button 
// //               className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs"
// //               onClick={handleZoomIn}
// //             >
// //               +
// //             </button>
// //           </div>
// //         </div>

// //         {/* Canvas Area */}
// //         <div className="flex-1 overflow-auto bg-gray-100 p-4">
// //           <div 
// //             className="mx-auto transition-transform duration-200"
// //             style={{ 
// //               transform: `scale(${scale})`,
// //               transformOrigin: 'center center',
// //               maxWidth: viewMode === 'spread' ? '1200px' : '600px'
// //             }}
// //           >
// //             <div className={`grid gap-4 ${viewMode === 'spread' ? 'grid-cols-2' : 'grid-cols-1'}`}>
// //               {visiblePages.map((page, idx) => {
// //                 const actualIndex = viewMode === 'spread' ? currentSpread * 2 + idx : currentSpread;
// //                 return (
// //                   <PageCanvas
// //                     key={page?.id || idx}
// //                     page={page || {}}
// //                     index={actualIndex}
// //                     onDrop={handleDrop}
// //                     onDragOver={handleDragOver}
// //                     onTextChange={handleTextChange}
// //                     isActive={activePageIndex === actualIndex}
// //                     onClick={() => setActivePageIndex(actualIndex)}
// //                   />
// //                 );
// //               })}
// //             </div>

// //             {/* Page Labels */}
// //             <div className={`grid gap-4 mt-2 ${viewMode === 'spread' ? 'grid-cols-2' : 'grid-cols-1'}`}>
// //               {visiblePages.map((page, idx) => {
// //                 const actualIndex = viewMode === 'spread' ? currentSpread * 2 + idx : currentSpread;
// //                 let label = '';
// //                 if (actualIndex === 0) label = 'Back Cover';
// //                 else if (actualIndex === 1) label = 'Front Cover';
// //                 else label = `Page ${actualIndex - 1}`;
                
// //                 return (
// //                   <p key={idx} className="text-center text-xs text-gray-600">{label}</p>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Thumbnails */}
// //         <div className="bg-white border-t px-3 py-2 flex-shrink-0">
// //           <div className="flex items-center justify-between mb-1">
// //             <button className="text-xs text-gray-600 hover:text-gray-800 flex items-center gap-1">
// //               <span>📖</span> Organize pages <ChevronLeft size={12} className="rotate-90" />
// //             </button>
// //           </div>
          
// //           <div className="flex gap-2 overflow-x-auto pb-1">
// //             {pages.map((page, index) => {
// //               let label = '';
// //               if (index === 0) label = 'Back Cover';
// //               else if (index === 1) label = 'Front Cover';
// //               else label = `Page ${index - 1}`;
              
// //               return (
// //                 <div key={page.id} className="flex-shrink-0" style={{ width: '80px' }}>
// //                   <PageThumbnail
// //                     page={page}
// //                     index={index}
// //                     isActive={activePageIndex === index}
// //                     onClick={() => {
// //                       setActivePageIndex(index);
// //                       setCurrentSpread(Math.floor(index / 2));
// //                     }}
// //                     label={label}
// //                   />
// //                 </div>
// //               );
// //             })}
            
// //             <button
// //               onClick={handleAddPage}
// //               className="flex-shrink-0 border-2 border-dashed border-gray-300 rounded hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center"
// //               style={{ width: '80px', aspectRatio: '8.5/11' }}
// //             >
// //               <Plus size={16} className="text-gray-400" />
// //             </button>

// //             <button className="flex-shrink-0 border-2 border-gray-300 rounded hover:bg-gray-100 transition-all flex items-center justify-center"
// //               style={{ width: '80px', aspectRatio: '8.5/11' }}>
// //               <Trash2 size={16} className="text-gray-400" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right Sidebar - Text Editor */}
// //       <div className="w-64 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0">
// //         <TextEditorSidebar
// //           activePage={pages[activePageIndex]}
// //           pages={pages}
// //           onUpdate={handlePageUpdate}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState, useRef } from 'react';
// import { Upload, Plus, Trash2, AlignLeft, AlignCenter, AlignRight, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, Square, ArrowLeft, ArrowRight } from 'lucide-react';

// // UploadedImage Component (in left sidebar)
// const UploadedImage = ({ image, onDragStart }) => {
//   return (
//     <div
//       draggable
//       onDragStart={(e) => onDragStart(e, image)}
//       className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-move hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-400"
//     >
//       <img 
//         src={image.src} 
//         alt={image.name}
//         className="w-full h-24 object-cover"
//       />
//       <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-1">
//         <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//         </svg>
//       </div>
//       <p className="text-xs text-gray-600 p-2 text-center truncate">{image.name}</p>
//     </div>
//   );
// };

// // PageCanvas Component (droppable area)
// const PageCanvas = ({ page, index, onDrop, onDragOver, onTextChange, isActive, onClick }) => {
//   const [isDragging, setIsDragging] = useState(false);

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//     onDragOver(e);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     onDrop(e, index);
//   };

//   return (
//     <div
//       onClick={onClick}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//       className={`relative bg-white transition-all ${
//         isActive ? 'ring-4 ring-blue-500' : ''
//       } ${isDragging ? 'ring-4 ring-blue-300 bg-blue-50' : ''}`}
//       style={{ 
//         aspectRatio: '8.5/11',
//         background: page.bgColor || '#faf9f6'
//       }}
//     >
//       {/* Book Spine */}
//       {(index === 0 || index === 1) && (
//         <div 
//           className="absolute top-0 bottom-0 w-8 bg-gray-300 flex items-center justify-center"
//           style={{ 
//             [index === 0 ? 'right' : 'left']: 0,
//             borderLeft: index === 0 ? '1px solid #999' : 'none',
//             borderRight: index === 1 ? '1px solid #999' : 'none'
//           }}
//         >
//           <span className="text-xs text-gray-600 transform rotate-90 whitespace-nowrap">TEXT</span>
//         </div>
//       )}

//       {/* Main Content Area */}
//       <div className={`h-full flex flex-col justify-between ${index === 0 ? 'pr-8' : index === 1 ? 'pl-8' : ''} p-6`}>
//         {/* Top Text Area */}
//         {page.topText && (
//           <div className="text-center">
//             <input
//               type="text"
//               value={page.topText}
//               onChange={(e) => onTextChange(index, 'topText', e.target.value)}
//               onClick={(e) => e.stopPropagation()}
//               className="w-full text-3xl font-serif text-center bg-transparent border-none outline-none"
//               style={{ 
//                 fontFamily: page.topTextFont || 'Georgia',
//                 textAlign: page.topTextAlign || 'center',
//                 color: '#2d5a4a'
//               }}
//               placeholder="Add your text here"
//             />
//           </div>
//         )}

//         {/* Image Drop Zone */}
//         <div className="flex-1 flex items-center justify-center my-4">
//           {page.image ? (
//             <div className="relative group">
//               <img 
//                 src={page.image} 
//                 alt="Page content"
//                 className="max-w-full max-h-64 object-contain"
//                 style={{
//                   filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
//                 }}
//               />
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onTextChange(index, 'image', null);
//                 }}
//                 className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={14} />
//               </button>
//             </div>
//           ) : (
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full">
//               <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
//                 <Upload size={24} className="text-gray-400" />
//               </div>
//               <p className="text-gray-400 text-xs">Drag & Drop Image Here</p>
//             </div>
//           )}
//         </div>

//         {/* Bottom Text Area */}
//         {page.bottomText && (
//           <div className="text-center">
//             <input
//               type="text"
//               value={page.bottomText}
//               onChange={(e) => onTextChange(index, 'bottomText', e.target.value)}
//               onClick={(e) => e.stopPropagation()}
//               className="w-full text-xs text-center bg-transparent border-none outline-none uppercase tracking-wider"
//               style={{ 
//                 fontFamily: page.bottomTextFont || 'Arial',
//                 textAlign: page.bottomTextAlign || 'center',
//                 letterSpacing: '0.2em'
//               }}
//               placeholder="Add caption or delete if you prefer"
//             />
//           </div>
//         )}

//         {/* Page Numbers - Always show for all pages */}
//         <div className="flex justify-between text-xs text-gray-500 mt-4">
//           <div>Page {index === 0 ? 'Back Cover' : index === 1 ? 'Front Cover' : index}</div>
//           <div>Page {index === 0 ? 'Back Cover' : index === 1 ? 'Front Cover' : index + 1}</div>
//         </div>

//         {/* Page-specific elements */}
//         {index === 0 && (
//           <div className="absolute bottom-4 left-4">
//             <input
//               type="text"
//               value={page.brandText || 'Odd Giraffe'}
//               onChange={(e) => onTextChange(index, 'brandText', e.target.value)}
//               onClick={(e) => e.stopPropagation()}
//               className="text-lg font-serif italic bg-transparent border-none outline-none"
//               placeholder="Brand name"
//             />
//             <div className="flex gap-2 items-center mt-1">
//               <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
//               <div className="flex gap-1">
//                 <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
//                 <div className="w-1.5 h-1.5 bg-gray-800"></div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // PageThumbnail Component
// const PageThumbnail = ({ page, index, isActive, onClick, label }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`relative cursor-pointer bg-white shadow-md hover:shadow-lg transition-all overflow-hidden ${
//         isActive ? 'ring-2 ring-blue-500' : ''
//       }`}
//       style={{ aspectRatio: '8.5/11' }}
//     >
//       <div className="h-full p-1 text-xs" style={{ background: page.bgColor || '#faf9f6' }}>
//         {page.image && (
//           <img src={page.image} alt={`Page ${index + 1}`} className="w-full h-16 object-contain mb-1" />
//         )}
//         {page.topText && (
//           <div className="text-center text-xs truncate font-serif">{page.topText}</div>
//         )}
//         {page.bottomText && (
//           <div className="text-center text-xs truncate text-gray-500">{page.bottomText}</div>
//         )}
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center py-1">
//         <p className="text-xs font-medium">{label}</p>
//       </div>
//     </div>
//   );
// };

// // TextEditor Sidebar Component
// const TextEditorSidebar = ({ activePage, onUpdate }) => {
//   if (!activePage) return (
//     <div className="p-6 text-center text-gray-400">
//       <p className="mb-3">Select a page to edit text</p>
//       <p className="text-sm">Click on any page to start editing</p>
//     </div>
//   );

//   return (
//     <div className="p-4 space-y-6">
//       <div>
//         <h3 className="font-semibold mb-3 text-gray-800">Text Editor</h3>
//       </div>

//       {/* Main Text Field */}
//       <div>
//         <label className="block text-sm font-medium mb-2">Main Text</label>
//         <textarea
//           value={activePage.topText || ''}
//           onChange={(e) => onUpdate({ topText: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-lg text-sm resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//           rows={4}
//           placeholder="Add your main text here..."
//         />
//       </div>

//       {/* Caption Text Field */}
//       <div>
//         <label className="block text-sm font-medium mb-2">Caption Text</label>
//         <input
//           type="text"
//           value={activePage.bottomText || ''}
//           onChange={(e) => onUpdate({ bottomText: e.target.value })}
//           className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//           placeholder="Add photo caption here or delete if you prefer"
//         />
//       </div>

//       {/* Brand Text Field (for cover pages) */}
//       {(activePage.id === 'back-cover' || activePage.id === 'front-cover') && (
//         <div>
//           <label className="block text-sm font-medium mb-2">Brand Text</label>
//           <input
//             type="text"
//             value={activePage.brandText || ''}
//             onChange={(e) => onUpdate({ brandText: e.target.value })}
//             className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             placeholder="Brand name"
//           />
//         </div>
//       )}

//       {/* Text Alignment */}
//       <div>
//         <label className="block text-sm font-medium mb-2">Text Alignment</label>
//         <div className="flex gap-2">
//           <button
//             onClick={() => onUpdate({ topTextAlign: 'left' })}
//             className={`flex-1 p-3 border rounded-lg flex items-center justify-center ${
//               activePage.topTextAlign === 'left' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <AlignLeft size={18} />
//           </button>
//           <button
//             onClick={() => onUpdate({ topTextAlign: 'center' })}
//             className={`flex-1 p-3 border rounded-lg flex items-center justify-center ${
//               activePage.topTextAlign === 'center' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <AlignCenter size={18} />
//           </button>
//           <button
//             onClick={() => onUpdate({ topTextAlign: 'right' })}
//             className={`flex-1 p-3 border rounded-lg flex items-center justify-center ${
//               activePage.topTextAlign === 'right' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             <AlignRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Font Selection */}
//       <div>
//         <label className="block text-sm font-medium mb-2">Font Family</label>
//         <div className="grid grid-cols-2 gap-2">
//           <button
//             onClick={() => onUpdate({ topTextFont: 'Georgia' })}
//             className={`p-3 border rounded-lg text-sm ${
//               activePage.topTextFont === 'Georgia' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             Georgia
//           </button>
//           <button
//             onClick={() => onUpdate({ topTextFont: 'Arial' })}
//             className={`p-3 border rounded-lg text-sm ${
//               activePage.topTextFont === 'Arial' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             Arial
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [pages, setPages] = useState([
//     { 
//       id: 'back-cover',
//       image: null, 
//       topText: '', 
//       bottomText: '',
//       brandText: 'Odd Giraffe',
//       bgColor: '#faf9f6',
//       topTextAlign: 'center',
//       topTextFont: 'Georgia'
//     },
//     { 
//       id: 'front-cover',
//       image: null, 
//       topText: 'you&me', 
//       bottomText: 'THANK YOU FOR EVERYTHING',
//       bgColor: '#faf9f6',
//       topTextAlign: 'center',
//       topTextFont: 'Georgia'
//     },
//     { id: 'page-1', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
//     { id: 'page-2', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
//     { id: 'page-3', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
//     { id: 'page-4', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
//     { id: 'page-5', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
//     { id: 'page-6', image: null, topText: '', bottomText: '', bgColor: '#ffffff' },
//   ]);
//   const [activePageIndex, setActivePageIndex] = useState(1);
//   const [draggedImage, setDraggedImage] = useState(null);
//   const [viewMode, setViewMode] = useState('single');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [scale, setScale] = useState(1);
//   const fileInputRef = useRef(null);

//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     files.forEach(file => {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const newImage = {
//           id: Date.now() + Math.random(),
//           src: event.target.result,
//           name: file.name
//         };
//         setUploadedImages(prev => [...prev, newImage]);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleDragStart = (e, image) => {
//     setDraggedImage(image);
//     e.dataTransfer.effectAllowed = 'copy';
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'copy';
//   };

//   const handleDrop = (e, pageIndex) => {
//     e.preventDefault();
//     if (draggedImage) {
//       const newPages = [...pages];
//       newPages[pageIndex] = { ...newPages[pageIndex], image: draggedImage.src };
//       setPages(newPages);
//       setDraggedImage(null);
//     }
//   };

//   const handleTextChange = (pageIndex, field, value) => {
//     const newPages = [...pages];
//     newPages[pageIndex] = { ...newPages[pageIndex], [field]: value };
//     setPages(newPages);
//   };

//   const handlePageUpdate = (updates) => {
//     const newPages = [...pages];
//     newPages[activePageIndex] = { ...newPages[activePageIndex], ...updates };
//     setPages(newPages);
//   };

//   const handleAddPage = () => {
//     const newPage = {
//       id: `page-${Date.now()}`,
//       image: null,
//       topText: '',
//       bottomText: '',
//       bgColor: '#ffffff'
//     };
//     setPages([...pages, newPage]);
//   };

//   const handleZoomIn = () => {
//     setScale(prev => Math.min(prev + 0.1, 2));
//   };

//   const handleZoomOut = () => {
//     setScale(prev => Math.max(prev - 0.1, 0.5));
//   };

//   const nextPage = () => {
//     setCurrentPage(prev => Math.min(prev + 1, pages.length - 1));
//     setActivePageIndex(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(prev => Math.max(prev - 1, 0));
//     setActivePageIndex(currentPage - 1);
//   };

//   const visiblePages = viewMode === 'spread' 
//     ? [pages[currentPage * 2], pages[currentPage * 2 + 1]].filter(Boolean)
//     : [pages[currentPage]];

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* Left Sidebar - Upload Area */}
//       <div className="w-60 bg-white border-r border-gray-200 flex flex-col">
//         <div className="p-3 border-b">
//           <h2 className="font-semibold mb-2 text-sm">Upload</h2>
          
//           {/* Autofill Toggle */}
//           <div className="flex items-center gap-2 mb-3">
//             <input type="checkbox" id="autofill" className="w-3 h-3" />
//             <label htmlFor="autofill" className="text-xs">Autofill</label>
//           </div>

//           {/* View Mode Buttons */}
//           <div className="flex gap-1 mb-3">
//             <button 
//               onClick={() => setViewMode('single')}
//               className={`flex-1 p-1 border rounded text-xs ${viewMode === 'single' ? 'bg-gray-200' : ''}`}
//             >
//               <Square size={14} className="mx-auto" />
//             </button>
//             <button 
//               onClick={() => setViewMode('spread')}
//               className={`flex-1 p-1 border rounded text-xs ${viewMode === 'spread' ? 'bg-gray-200' : ''}`}
//             >
//               <LayoutGrid size={14} className="mx-auto" />
//             </button>
//             <button className="flex-1 p-1 border rounded text-xs">
//               <Grid3x3 size={14} className="mx-auto" />
//             </button>
//           </div>
//         </div>

//         {/* Uploaded Images */}
//         <div className="flex-1 overflow-y-auto p-3">
//           <div className="space-y-2">
//             {uploadedImages.map((image) => (
//               <UploadedImage
//                 key={image.id}
//                 image={image}
//                 onDragStart={handleDragStart}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Upload Button */}
//         <div className="p-3 border-t">
//           <button
//             onClick={() => fileInputRef.current?.click()}
//             className="w-full bg-gray-700 text-white py-2 rounded text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
//           >
//             <Plus size={16} />
//             Upload images
//           </button>
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleFileUpload}
//             className="hidden"
//           />
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* Top Toolbar */}
//         <div className="bg-white border-b px-4 py-2 flex items-center justify-between flex-shrink-0">
//           <div className="flex items-center gap-2">
//             <button 
//               className="p-1 hover:bg-gray-100 rounded"
//               onClick={prevPage}
//               disabled={currentPage === 0}
//             >
//               <ChevronLeft size={16} />
//             </button>
//             <button 
//               className="p-1 hover:bg-gray-100 rounded"
//               onClick={nextPage}
//               disabled={currentPage === pages.length - 1}
//             >
//               <ChevronRight size={16} />
//             </button>
//           </div>
          
//           <div className="flex items-center gap-1">
//             <button 
//               className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs"
//               onClick={handleZoomOut}
//             >
//               −
//             </button>
//             <span className="text-xs w-12 text-center">{Math.round(scale * 100)}%</span>
//             <button 
//               className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs"
//               onClick={handleZoomIn}
//             >
//               +
//             </button>
//           </div>
//         </div>

//         {/* Canvas Area with Carousel */}
//         <div className="flex-1 overflow-auto bg-gray-100 p-4">
//           <div 
//             className="mx-auto transition-transform duration-200"
//             style={{ 
//               transform: `scale(${scale})`,
//               transformOrigin: 'center center',
//               maxWidth: '600px'
//             }}
//           >
//             {/* Carousel Navigation */}
//             <div className="flex items-center justify-center mb-6 space-x-6">
//               <button
//                 onClick={prevPage}
//                 disabled={currentPage === 0}
//                 className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 <ArrowLeft size={24} className="text-gray-600" />
//               </button>
              
//               <div className="text-center">
//                 <div className="text-lg font-semibold text-gray-800">
//                   {currentPage === 0 ? 'Back Cover' : 
//                    currentPage === 1 ? 'Front Cover' : 
//                    `Page ${currentPage - 1}`}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Page {currentPage + 1} of {pages.length}
//                 </div>
//               </div>
              
//               <button
//                 onClick={nextPage}
//                 disabled={currentPage === pages.length - 1}
//                 className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 <ArrowRight size={24} className="text-gray-600" />
//               </button>
//             </div>

//             {/* Current Page */}
//             <div className="grid grid-cols-1 gap-4">
//               {visiblePages.map((page, idx) => {
//                 const actualIndex = viewMode === 'spread' ? currentPage * 2 + idx : currentPage;
//                 return (
//                   <PageCanvas
//                     key={page?.id || idx}
//                     page={page || {}}
//                     index={actualIndex}
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     onTextChange={handleTextChange}
//                     isActive={activePageIndex === actualIndex}
//                     onClick={() => setActivePageIndex(actualIndex)}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Thumbnails */}
//         <div className="bg-white border-t px-3 py-2 flex-shrink-0">
//           <div className="flex items-center justify-between mb-1">
//             <button className="text-xs text-gray-600 hover:text-gray-800 flex items-center gap-1">
//               <span>📖</span> Organize pages <ChevronLeft size={12} className="rotate-90" />
//             </button>
//           </div>
          
//           <div className="flex gap-2 overflow-x-auto pb-1">
//             {pages.map((page, index) => {
//               let label = '';
//               if (index === 0) label = 'Back Cover';
//               else if (index === 1) label = 'Front Cover';
//               else label = `Page ${index - 1}`;
              
//               return (
//                 <div key={page.id} className="flex-shrink-0" style={{ width: '80px' }}>
//                   <PageThumbnail
//                     page={page}
//                     index={index}
//                     isActive={activePageIndex === index}
//                     onClick={() => {
//                       setActivePageIndex(index);
//                       setCurrentPage(index);
//                     }}
//                     label={label}
//                   />
//                 </div>
//               );
//             })}
            
//             <button
//               onClick={handleAddPage}
//               className="flex-shrink-0 border-2 border-dashed border-gray-300 rounded hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center"
//               style={{ width: '80px', aspectRatio: '8.5/11' }}
//             >
//               <Plus size={16} className="text-gray-400" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right Sidebar - Text Editor */}
//       <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0">
//         <TextEditorSidebar
//           activePage={pages[activePageIndex]}
//           onUpdate={handlePageUpdate}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState, useRef } from 'react';
import { Upload, Plus, Trash2, AlignLeft, AlignCenter, AlignRight, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

// UploadedImage Component (in left sidebar)
const UploadedImage = ({ image, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, image)}
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-move hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-400"
    >
      <img 
        src={image.src} 
        alt={image.name}
        className="w-full h-24 object-cover"
      />
      <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-xs text-gray-600 p-2 text-center truncate">{image.name}</p>
    </div>
  );
};

// PageCanvas Component (droppable area)
const PageCanvas = ({ page, index, onDrop, onDragOver, onTextChange, isActive, onClick }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    onDragOver(e);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    onDrop(e, index);
  };

  return (
    <div
      onClick={onClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative bg-white transition-all ${
        isActive ? 'ring-4 ring-blue-500' : ''
      } ${isDragging ? 'ring-4 ring-blue-300 bg-blue-50' : ''}`}
      style={{ 
        aspectRatio: '8.5/11',
        background: page.bgColor || '#faf9f6'
      }}
    >
      {/* Main Content Area */}
      <div className="h-full flex flex-col justify-between p-6">
        {/* Top Text Area */}
        {page.topText && (
          <div className="text-center">
            <input
              type="text"
              value={page.topText}
              onChange={(e) => onTextChange(index, 'topText', e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-full text-3xl font-serif text-center bg-transparent border-none outline-none"
              style={{ 
                fontFamily: page.topTextFont || 'Georgia',
                textAlign: page.topTextAlign || 'center',
                color: '#2d5a4a'
              }}
              placeholder="Add your text here"
            />
          </div>
        )}

        {/* Image Drop Zone */}
        <div className="flex-1 flex items-center justify-center my-4">
          {page.image ? (
            <div className="relative group">
              <img 
                src={page.image} 
                alt="Page content"
                className="max-w-full max-h-64 object-contain"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTextChange(index, 'image', null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <Upload size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-xs">Drag & Drop Image Here</p>
            </div>
          )}
        </div>

        {/* Bottom Text Area */}
        {page.bottomText && (
          <div className="text-center">
            <input
              type="text"
              value={page.bottomText}
              onChange={(e) => onTextChange(index, 'bottomText', e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-full text-xs text-center bg-transparent border-none outline-none uppercase tracking-wider"
              style={{ 
                fontFamily: page.bottomTextFont || 'Arial',
                textAlign: page.bottomTextAlign || 'center',
                letterSpacing: '0.2em'
              }}
              placeholder="Add caption or delete if you prefer"
            />
          </div>
        )}

        {/* Page Numbers */}
        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <div>Page {index + 1}</div>
          <div>Page {index + 2}</div>
        </div>
      </div>
    </div>
  );
};

// PageThumbnail Component
const PageThumbnail = ({ page, index, isActive, onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer bg-white shadow-md hover:shadow-lg transition-all overflow-hidden ${
        isActive ? 'ring-2 ring-blue-500' : ''
      }`}
      style={{ aspectRatio: '8.5/11' }}
    >
      <div className="h-full p-1 text-xs" style={{ background: page.bgColor || '#faf9f6' }}>
        {page.image && (
          <img src={page.image} alt={`Page ${index + 1}`} className="w-full h-16 object-contain mb-1" />
        )}
        {page.topText && (
          <div className="text-center text-xs truncate font-serif">{page.topText}</div>
        )}
        {page.bottomText && (
          <div className="text-center text-xs truncate text-gray-500">{page.bottomText}</div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center py-1">
        <p className="text-xs font-medium">{label}</p>
      </div>
    </div>
  );
};

// TextEditor Sidebar Component
const TextEditorSidebar = ({ activePage, onUpdate }) => {
  if (!activePage) return (
    <div className="p-6 text-center text-gray-400">
      <p className="mb-3">Select a page to edit text</p>
      <p className="text-sm">Click on any page to start editing</p>
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-gray-800">Text Editor</h3>
      </div>

      {/* Main Text Field */}
      <div>
        <label className="block text-sm font-medium mb-2">Main Text</label>
        <textarea
          value={activePage.topText || ''}
          onChange={(e) => onUpdate({ topText: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          rows={4}
          placeholder="Add your main text here..."
        />
      </div>

      {/* Caption Text Field */}
      <div>
        <label className="block text-sm font-medium mb-2">Caption Text</label>
        <input
          type="text"
          value={activePage.bottomText || ''}
          onChange={(e) => onUpdate({ bottomText: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Add photo caption here or delete if you prefer"
        />
      </div>

      {/* Text Alignment */}
      <div>
        <label className="block text-sm font-medium mb-2">Text Alignment</label>
        <div className="flex gap-2">
          <button
            onClick={() => onUpdate({ topTextAlign: 'left' })}
            className={`flex-1 p-3 border rounded-lg flex items-center justify-center ${
              activePage.topTextAlign === 'left' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            <AlignLeft size={18} />
          </button>
          <button
            onClick={() => onUpdate({ topTextAlign: 'center' })}
            className={`flex-1 p-3 border rounded-lg flex items-center justify-center ${
              activePage.topTextAlign === 'center' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            <AlignCenter size={18} />
          </button>
          <button
            onClick={() => onUpdate({ topTextAlign: 'right' })}
            className={`flex-1 p-3 border rounded-lg flex items-center justify-center ${
              activePage.topTextAlign === 'right' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            <AlignRight size={18} />
          </button>
        </div>
      </div>

      {/* Font Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">Font Family</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onUpdate({ topTextFont: 'Georgia' })}
            className={`p-3 border rounded-lg text-sm ${
              activePage.topTextFont === 'Georgia' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            Georgia
          </button>
          <button
            onClick={() => onUpdate({ topTextFont: 'Arial' })}
            className={`p-3 border rounded-lg text-sm ${
              activePage.topTextFont === 'Arial' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            Arial
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [pages, setPages] = useState([
    { 
      id: 'page-1',
      image: null, 
      topText: 'ado area', 
      bottomText: 'Adi para apreciar todas as dicas fiyas pode',
      bgColor: '#ffffff',
      topTextAlign: 'center',
      topTextFont: 'Georgia'
    },
    { 
      id: 'page-2',
      image: null, 
      topText: 'ado area', 
      bottomText: 'Adi para apreciar todas as dicas fiyas pode',
      bgColor: '#ffffff',
      topTextAlign: 'center',
      topTextFont: 'Georgia'
    },
  ]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [draggedImage, setDraggedImage] = useState(null);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [scale, setScale] = useState(0.8);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          id: Date.now() + Math.random(),
          src: event.target.result,
          name: file.name
        };
        setUploadedImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDragStart = (e, image) => {
    setDraggedImage(image);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e, pageIndex) => {
    e.preventDefault();
    if (draggedImage) {
      const newPages = [...pages];
      newPages[pageIndex] = { ...newPages[pageIndex], image: draggedImage.src };
      setPages(newPages);
      setDraggedImage(null);
    }
  };

  const handleTextChange = (pageIndex, field, value) => {
    const newPages = [...pages];
    newPages[pageIndex] = { ...newPages[pageIndex], [field]: value };
    setPages(newPages);
  };

  const handlePageUpdate = (updates) => {
    const newPages = [...pages];
    newPages[activePageIndex] = { ...newPages[activePageIndex], ...updates };
    setPages(newPages);
  };

  const handleAddPage = () => {
    const newPage = {
      id: `page-${Date.now()}`,
      image: null,
      topText: '',
      bottomText: '',
      bgColor: '#ffffff'
    };
    setPages([...pages, newPage]);
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 1.2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const nextSpread = () => {
    setCurrentSpread(prev => Math.min(prev + 1, Math.floor((pages.length - 1) / 2)));
  };

  const prevSpread = () => {
    setCurrentSpread(prev => Math.max(prev - 1, 0));
  };

  // Get current spread pages (2 pages horizontally)
  const currentPages = [
    pages[currentSpread * 2],
    pages[currentSpread * 2 + 1]
  ].filter(Boolean);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Left Sidebar - Upload Area */}
      <div className="w-60 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-3 border-b">
          <h2 className="font-semibold mb-2 text-sm">Upload</h2>
          
          {/* Autofill Toggle */}
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" id="autofill" className="w-3 h-3" />
            <label htmlFor="autofill" className="text-xs">Autofill</label>
          </div>
        </div>

        {/* Uploaded Images */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="space-y-2">
            {uploadedImages.map((image) => (
              <UploadedImage
                key={image.id}
                image={image}
                onDragStart={handleDragStart}
              />
            ))}
          </div>
        </div>

        {/* Upload Button */}
        <div className="p-3 border-t">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full bg-gray-700 text-white py-2 rounded text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
          >
            <Plus size={16} />
            Upload images
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Toolbar */}
        <div className="bg-white border-b px-4 py-2 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button 
              className="p-1 hover:bg-gray-100 rounded"
              onClick={prevSpread}
              disabled={currentSpread === 0}
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              className="p-1 hover:bg-gray-100 rounded"
              onClick={nextSpread}
              disabled={currentSpread >= Math.floor((pages.length - 1) / 2)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="flex items-center gap-1">
            <button 
              className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs"
              onClick={handleZoomOut}
            >
              −
            </button>
            <span className="text-xs w-12 text-center">{Math.round(scale * 100)}%</span>
            <button 
              className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs"
              onClick={handleZoomIn}
            >
              +
            </button>
          </div>
        </div>

        {/* Canvas Area with Horizontal Pages */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div 
            className="mx-auto transition-transform duration-200"
            style={{ 
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          >
            {/* Carousel Navigation */}
            <div className="flex items-center justify-center mb-6 space-x-8">
              <button
                onClick={prevSpread}
                disabled={currentSpread === 0}
                className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">
                  Spread {currentSpread + 1}
                </div>
                <div className="text-sm text-gray-500">
                  Pages {currentSpread * 2 + 1}-{Math.min(currentSpread * 2 + 2, pages.length)}
                </div>
              </div>
              
              <button
                onClick={nextSpread}
                disabled={currentSpread >= Math.floor((pages.length - 1) / 2)}
                className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowRight size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Horizontal Pages */}
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {currentPages.map((page, idx) => {
                const actualIndex = currentSpread * 2 + idx;
                return (
                  <PageCanvas
                    key={page?.id || idx}
                    page={page || {}}
                    index={actualIndex}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onTextChange={handleTextChange}
                    isActive={activePageIndex === actualIndex}
                    onClick={() => setActivePageIndex(actualIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Thumbnails */}
        <div className="bg-white border-t px-3 py-2 flex-shrink-0">
          <div className="flex items-center justify-between mb-1">
            <button className="text-xs text-gray-600 hover:text-gray-800 flex items-center gap-1">
              <span>📖</span> Organize pages
            </button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-1">
            {pages.map((page, index) => (
              <div key={page.id} className="flex-shrink-0" style={{ width: '80px' }}>
                <PageThumbnail
                  page={page}
                  index={index}
                  isActive={activePageIndex === index}
                  onClick={() => {
                    setActivePageIndex(index);
                    setCurrentSpread(Math.floor(index / 2));
                  }}
                  label={`Page ${index + 1}`}
                />
              </div>
            ))}
            
            <button
              onClick={handleAddPage}
              className="flex-shrink-0 border-2 border-dashed border-gray-300 rounded hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center"
              style={{ width: '80px', aspectRatio: '8.5/11' }}
            >
              <Plus size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Text Editor */}
      <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0">
        <TextEditorSidebar
          activePage={pages[activePageIndex]}
          onUpdate={handlePageUpdate}
        />
      </div>
    </div>
  );
};

export default App;