


import React, { useState, useRef } from 'react';
import { Upload, Plus, Trash2, AlignLeft, AlignCenter, AlignRight, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Crop, X, Check } from 'lucide-react';

// Background Images Data (unchanged)
const BACKGROUND_IMAGES = [
  { id: 'bg1', name: 'Floral Left', pattern: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 50 Q30 30 40 50 T60 50\' stroke=\'%23e5e5e5\' fill=\'none\' stroke-width=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'80\' r=\'15\' fill=\'none\' stroke=\'%23e5e5e5\' stroke-width=\'1\'/%3E%3Cpath d=\'M25 120 L35 110 L40 120 L35 130 Z\' fill=\'%23e5e5e5\'/%3E%3C/svg%3E") left repeat-y' },
  { id: 'bg2', name: 'Floral Right', pattern: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M180 50 Q170 30 160 50 T140 50\' stroke=\'%23e5e5e5\' fill=\'none\' stroke-width=\'1\'/%3E%3Ccircle cx=\'170\' cy=\'80\' r=\'15\' fill=\'none\' stroke=\'%23e5e5e5\' stroke-width=\'1\'/%3E%3Cpath d=\'M175 120 L165 110 L160 120 L165 130 Z\' fill=\'%23e5e5e5\'/%3E%3C/svg%3E") right repeat-y' },
  { id: 'bg3', name: 'Corner Flowers', pattern: 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'10\' fill=\'none\' stroke=\'%23e5e5e5\' stroke-width=\'1\'/%3E%3Ccircle cx=\'380\' cy=\'20\' r=\'10\' fill=\'none\' stroke=\'%23e5e5e5\' stroke-width=\'1\'/%3E%3C/g%3E%3C/svg%3E") no-repeat' },
  { id: 'bg4', name: 'Elegant Border', pattern: 'linear-gradient(to right, rgba(229,229,229,0.3) 0%, transparent 5%, transparent 95%, rgba(229,229,229,0.3) 100%), linear-gradient(to bottom, rgba(229,229,229,0.3) 0%, transparent 5%, transparent 95%, rgba(229,229,229,0.3) 100%)' },
  { id: 'bg5', name: 'Watercolor Wash', pattern: 'radial-gradient(circle at 20% 30%, rgba(240,230,220,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(235,220,210,0.3) 0%, transparent 50%)' },
  { id: 'bg6', name: 'Subtle Grid', pattern: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(229,229,229,0.1) 49px, rgba(229,229,229,0.1) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(229,229,229,0.1) 49px, rgba(229,229,229,0.1) 50px)' },
  { id: 'bg7', name: 'Dots Pattern', pattern: 'radial-gradient(circle, rgba(229,229,229,0.3) 1px, transparent 1px)', patternSize: '20px 20px' },
  { id: 'bg8', name: 'Vintage Frame', pattern: 'linear-gradient(to right, rgba(210,180,140,0.2) 0%, transparent 3%, transparent 97%, rgba(210,180,140,0.2) 100%), linear-gradient(to bottom, rgba(210,180,140,0.2) 0%, transparent 3%, transparent 97%, rgba(210,180,140,0.2) 100%)' },
  { id: 'bg9', name: 'Botanical Left', pattern: 'url("data:image/svg+xml,%3Csvg width=\'150\' height=\'500\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 50 Q40 60 30 70 T30 90\' stroke=\'%23d4d4d4\' fill=\'none\' stroke-width=\'1.5\'/%3E%3Cellipse cx=\'25\' cy=\'120\' rx=\'8\' ry=\'12\' fill=\'none\' stroke=\'%23d4d4d4\' stroke-width=\'1\'/%3E%3Cpath d=\'M35 150 C40 155 40 165 35 170\' stroke=\'%23d4d4d4\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E") left repeat-y' },
  { id: 'bg10', name: 'Botanical Right', pattern: 'url("data:image/svg+xml,%3Csvg width=\'150\' height=\'500\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M120 50 Q110 60 120 70 T120 90\' stroke=\'%23d4d4d4\' fill=\'none\' stroke-width=\'1.5\'/%3E%3Cellipse cx=\'125\' cy=\'120\' rx=\'8\' ry=\'12\' fill=\'none\' stroke=\'%23d4d4d4\' stroke-width=\'1\'/%3E%3Cpath d=\'M115 150 C110 155 110 165 115 170\' stroke=\'%23d4d4d4\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E") right repeat-y' },
  { id: 'bg11', name: 'Soft Vignette', pattern: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.05) 100%)' },
  { id: 'bg12', name: 'Top Border', pattern: 'linear-gradient(to bottom, rgba(229,229,229,0.5) 0%, rgba(229,229,229,0.3) 2%, transparent 5%)' },
  { id: 'bg13', name: 'Bottom Border', pattern: 'linear-gradient(to top, rgba(229,229,229,0.5) 0%, rgba(229,229,229,0.3) 2%, transparent 5%)' },
  { id: 'bg14', name: 'Leaf Pattern', pattern: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 50 Q30 40 40 50 Q30 60 20 50\' fill=\'none\' stroke=\'%23e0e0e0\' stroke-width=\'1\'/%3E%3C/svg%3E") repeat' },
  { id: 'bg15', name: 'Diagonal Lines', pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(229,229,229,0.1) 10px, rgba(229,229,229,0.1) 11px)' },

  // Geometric Patterns
  { id: 'bg16', name: 'Modern Grid', pattern: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', patternSize: '20px 20px' },
  { id: 'bg17', name: 'Subtle Dots', pattern: 'radial-gradient(circle, #e0e0e0 1px, transparent 1px)', patternSize: '15px 15px' },
  { id: 'bg18', name: 'Diagonal Stripes', pattern: 'repeating-linear-gradient(45deg, #f8f8f8, #f8f8f8 5px, #ffffff 5px, #ffffff 10px)' },
  { id: 'bg19', name: 'Hexagon Pattern', pattern: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0 L93 25 L93 75 L50 100 L7 75 L7 25 Z\' fill=\'none\' stroke=\'%23f0f0f0\' stroke-width=\'1\'/%3E%3C/svg%3E") repeat' },
  
  // Gradient Backgrounds
  { id: 'bg20', name: 'Soft Blue Gradient', pattern: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', patternSize: 'cover' },
  { id: 'bg21', name: 'Warm Sunset', pattern: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', patternSize: 'cover' },
  { id: 'bg22', name: 'Fresh Mint', pattern: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', patternSize: 'cover' },
  { id: 'bg23', name: 'Golden Hour', pattern: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', patternSize: 'cover' },
  { id: 'bg24', name: 'Ocean Breeze', pattern: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', patternSize: 'cover' },
  
  // Minimalist Patterns
  { id: 'bg25', name: 'Clean Lines', pattern: 'repeating-linear-gradient(0deg, transparent, transparent 24px, #e8e8e8 24px, #e8e8e8 25px)' },
  { id: 'bg26', name: 'Micro Dots', pattern: 'radial-gradient(circle, #d0d0d0 1px, transparent 1px)', patternSize: '8px 8px' },
  { id: 'bg27', name: 'Zig Zag', pattern: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 L20 0 L40 20 L40 40 L20 20 L0 40 Z\' fill=\'none\' stroke=\'%23e8e8e8\' stroke-width=\'1\'/%3E%3C/svg%3E") repeat' },
  
  // Professional Textures
  { id: 'bg28', name: 'Paper Texture', pattern: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E") repeat, linear-gradient(#fefefe, #fafafa)' },
  { id: 'bg29', name: 'Canvas Texture', pattern: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0 L100 0 L100 100 L0 100 Z\' fill=\'%23f5f5f5\'/%3E%3Cpath d=\'M20 20 L80 20 L80 80 L20 80 Z\' fill=\'none\' stroke=\'%23e0e0e0\' stroke-width=\'2\'/%3E%3C/svg%3E") repeat' },
  
  // Modern Abstract
  { id: 'bg30', name: 'Bubble Pattern', pattern: 'radial-gradient(circle at 25% 25%, #ffffff 0%, transparent 20%), radial-gradient(circle at 75% 75%, #ffffff 0%, transparent 20%)', patternSize: '100px 100px', backgroundColor: '#f8f9fa' },
  { id: 'bg31', name: 'Wave Lines', pattern: 'url("data:image/svg+xml,%3Csvg width=\'120\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 30 Q30 10 60 30 T120 30\' stroke=\'%23e8e8e8\' fill=\'none\' stroke-width=\'2\'/%3E%3C/svg%3E") repeat' },
  { id: 'bg32', name: 'Abstract Blob', pattern: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 40 Q100 20 160 40 Q180 100 160 160 Q100 180 40 160 Q20 100 40 40\' fill=\'none\' stroke=\'%23f0f0f0\' stroke-width=\'8\'/%3E%3C/svg%3E") no-repeat center/contain' },
  
  // Corporate & Clean
  { id: 'bg33', name: 'Dot Grid', pattern: 'linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)', patternSize: '25px 25px' },
  { id: 'bg34', name: 'Subtle Stripe', pattern: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #f0f0f0 49px, #f0f0f0 50px)' },
  { id: 'bg35', name: 'Minimal Border', pattern: 'linear-gradient(to right, #e0e0e0 0%, transparent 10%, transparent 90%, #e0e0e0 100%), linear-gradient(to bottom, #e0e0e0 0%, transparent 10%, transparent 90%, #e0e0e0 100%)' },
  
  // Creative & Fun
  { id: 'bg36', name: 'Confetti', pattern: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'3\' fill=\'%23ff6b6b\' opacity=\'0.3\'/%3E%3Ccircle cx=\'40\' cy=\'20\' r=\'2\' fill=\'%234ecdc4\' opacity=\'0.3\'/%3E%3Ccircle cx=\'30\' cy=\'40\' r=\'2.5\' fill=\'%2345b7d1\' opacity=\'0.3\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'2\' fill=\'%2396ceb4\' opacity=\'0.3\'/%3E%3C/svg%3E") repeat' },
  { id: 'bg37', name: 'Stars', pattern: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 10 L42 15 L47 15 L43 18 L45 23 L40 20 L35 23 L37 18 L33 15 L38 15 Z\' fill=\'%23e0e0e0\' opacity=\'0.3\'/%3E%3C/svg%3E") repeat' },
  { id: 'bg38', name: 'Hearts', pattern: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 10 C25 5 35 5 35 15 C35 25 20 35 20 35 C20 35 5 25 5 15 C5 5 15 5 20 10 Z\' fill=\'none\' stroke=\'%23e0e0e0\' stroke-width=\'1\'/%3E%3C/svg%3E") repeat' },
  
  // Nature Inspired
  { id: 'bg39', name: 'Leaves', pattern: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 10 C45 15 50 20 40 30 C30 20 35 15 40 10 Z\' fill=\'none\' stroke=\'%23a8d5ba\' stroke-width=\'1\' opacity=\'0.5\'/%3E%3C/svg%3E") repeat' },
  { id: 'bg40', name: 'Water Drops', pattern: 'radial-gradient(circle at 30% 30%, #e3f2fd 0%, transparent 50%), radial-gradient(circle at 70% 70%, #e3f2fd 0%, transparent 50%)', patternSize: '100px 100px', backgroundColor: '#ffffff' },
  
  // Seasonal & Holiday
  { id: 'bg41', name: 'Snowflakes', pattern: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M15 15 L45 45 M15 45 L45 15\' stroke=\'%23e0e0e0\' stroke-width=\'1\' opacity=\'0.5\'/%3E%3C/svg%3E") repeat' },
  { id: 'bg42', name: 'Festive Dots', pattern: 'radial-gradient(circle, #ff6b6b 1px, transparent 1px), radial-gradient(circle, #4ecdc4 1px, transparent 1px), radial-gradient(circle, #45b7d1 1px, transparent 1px)', patternSize: '30px 30px', patternPos: '0px 0px, 10px 10px, 20px 20px', backgroundColor: '#f8f9fa' },
  
  // Professional Business
  { id: 'bg43', name: 'Corporate Lines', pattern: 'repeating-linear-gradient(90deg, transparent, transparent 9px, #e8e8e8 9px, #e8e8e8 10px)' },
  { id: 'bg44', name: 'Tech Grid', pattern: 'linear-gradient(#e8e8e8 1px, transparent 1px), linear-gradient(90deg, #e8e8e8 1px, transparent 1px)', patternSize: '15px 15px' },
  { id: 'bg45', name: 'Blueprint', pattern: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'10\' y=\'10\' width=\'80\' height=\'80\' fill=\'none\' stroke=\'%2345b7d1\' stroke-width=\'1\' opacity=\'0.3\'/%3E%3Cline x1=\'10\' y1=\'30\' x2=\'90\' y2=\'30\' stroke=\'%2345b7d1\' stroke-width=\'1\' opacity=\'0.3\'/%3E%3Cline x1=\'10\' y1=\'70\' x2=\'90\' y2=\'70\' stroke=\'%2345b7d1\' stroke-width=\'1\' opacity=\'0.3\'/%3E%3C/svg%3E") repeat' },
  
  // Artistic & Creative
  { id: 'bg46', name: 'Brush Strokes', pattern: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 50 C40 30 80 40 90 70 C100 100 60 120 30 100 C0 80 10 60 20 50 Z\' fill=\'none\' stroke=\'%23e0e0e0\' stroke-width=\'8\' opacity=\'0.3\'/%3E%3C/svg%3E") no-repeat center/contain' },
  { id: 'bg47', name: 'Color Splash', pattern: 'radial-gradient(circle at 20% 80%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 40% 40%, #45b7d1 0%, transparent 50%)', patternSize: '200px 200px', backgroundColor: '#f8f9fa' },
  { id: 'bg48', name: 'Ink Blots', pattern: 'url("data:image/svg+xml,%3Csvg width=\'150\' height=\'150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cellipse cx=\'50\' cy=\'50\' rx=\'40\' ry=\'25\' fill=\'%23e0e0e0\' opacity=\'0.2\'/%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'30\' fill=\'%23e0e0e0\' opacity=\'0.2\'/%3E%3C/svg%3E") repeat' },
  
  // Elegant & Luxury
  { id: 'bg49', name: 'Gold Foil', pattern: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(255,215,0,0.05) 100%)' },
  { id: 'bg50', name: 'Marble Texture', pattern: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }

];

// Image Cropper Modal Component
const ImageCropper = ({ image, onCrop, onCancel }) => {
  const [crop, setCrop] = useState({ x: 20, y: 20, width: 60, height: 60 });
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeHandle, setResizeHandle] = useState(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Check resize handles
    const handles = ['nw', 'ne', 'sw', 'se'];
    for (const handle of handles) {
      if (isInHandle(handle, x, y)) {
        setResizeHandle(handle);
        setDragStart({ x, y });
        setIsDragging(true);
        return;
      }
    }

    // Check if inside crop area for moving
    if (x >= crop.x && x <= crop.x + crop.width && 
        y >= crop.y && y <= crop.y + crop.height) {
      setResizeHandle('move');
      setDragStart({ x: x - crop.x, y: y - crop.y });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !resizeHandle) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    setCrop(prev => {
      const newCrop = { ...prev };

      switch (resizeHandle) {
        case 'move':
          newCrop.x = Math.max(0, Math.min(100 - newCrop.width, x - dragStart.x));
          newCrop.y = Math.max(0, Math.min(100 - newCrop.height, y - dragStart.y));
          break;
        case 'nw':
          newCrop.width = Math.max(10, prev.x + prev.width - x);
          newCrop.height = Math.max(10, prev.y + prev.height - y);
          newCrop.x = Math.max(0, x);
          newCrop.y = Math.max(0, y);
          break;
        case 'ne':
          newCrop.width = Math.max(10, x - prev.x);
          newCrop.height = Math.max(10, prev.y + prev.height - y);
          newCrop.y = Math.max(0, y);
          break;
        case 'sw':
          newCrop.width = Math.max(10, prev.x + prev.width - x);
          newCrop.height = Math.max(10, y - prev.y);
          newCrop.x = Math.max(0, x);
          break;
        case 'se':
          newCrop.width = Math.max(10, x - prev.x);
          newCrop.height = Math.max(10, y - prev.y);
          break;
      }

      return newCrop;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setResizeHandle(null);
  };

  const isInHandle = (handle, x, y) => {
    const handles = {
      nw: { x: crop.x - 2, y: crop.y - 2, width: 4, height: 4 },
      ne: { x: crop.x + crop.width - 2, y: crop.y - 2, width: 4, height: 4 },
      sw: { x: crop.x - 2, y: crop.y + crop.height - 2, width: 4, height: 4 },
      se: { x: crop.x + crop.width - 2, y: crop.y + crop.height - 2, width: 4, height: 4 },
    };

    const handleArea = handles[handle];
    return x >= handleArea.x && x <= handleArea.x + handleArea.width && 
           y >= handleArea.y && y <= handleArea.y + handleArea.height;
  };

  const handleCrop = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const scaleX = img.width / 100;
      const scaleY = img.height / 100;
      
      canvas.width = crop.width * scaleX;
      canvas.height = crop.height * scaleY;
      
      ctx.drawImage(
        img,
        crop.x * scaleX, crop.y * scaleY,
        crop.width * scaleX, crop.height * scaleY,
        0, 0,
        crop.width * scaleX, crop.height * scaleY
      );
      
      const croppedImageUrl = canvas.toDataURL('image/png');
      onCrop(croppedImageUrl);
    };
    
    img.src = image;
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Crop Image</h3>
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <button
              onClick={handleCrop}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <Check size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div 
            ref={containerRef}
            className="relative bg-gray-100 rounded-lg overflow-hidden mx-auto cursor-move"
            style={{ aspectRatio: '1', maxHeight: '60vh' }}
            onMouseDown={handleMouseDown}
          >
            <img 
              src={image} 
              alt="Crop preview" 
              className="w-full h-full object-contain"
            />
            
            {/* Crop overlay */}
            <div
              className="absolute border-2 border-white shadow-lg"
              style={{
                left: `${crop.x}%`,
                top: `${crop.y}%`,
                width: `${crop.width}%`,
                height: `${crop.height}%`,
                boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Resize handles */}
              {['nw', 'ne', 'sw', 'se'].map(handle => (
                <div
                  key={handle}
                  className={`absolute w-3 h-3 bg-white border-2 border-blue-500 rounded-sm ${
                    handle === 'nw' ? '-top-1 -left-1 cursor-nw-resize' :
                    handle === 'ne' ? '-top-1 -right-1 cursor-ne-resize' :
                    handle === 'sw' ? '-bottom-1 -left-1 cursor-sw-resize' :
                    '-bottom-1 -right-1 cursor-se-resize'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-600">
            Drag to move, drag corners to resize
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced UploadedImage Component with Crop Option
const UploadedImage = ({ image, onDragStart, onCrop }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, image)}
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-move hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-400 group"
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
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
      
      {/* Crop Button */}
      {showOptions && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCrop(image);
          }}
          className="absolute top-1 left-1 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600 transition-colors"
          title="Crop Image"
        >
          <Crop size={12} />
        </button>
      )}
      
      <p className="text-xs text-gray-600 p-2 text-center truncate">{image.name}</p>
    </div>
  );
};

// Enhanced PageCanvas Component with Crop Option
const PageCanvas = ({ page, index, onDrop, onDragOver, onTextChange, isActive, onClick, onCropImage }) => {
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
        backgroundColor: page.bgColor || '#faf9f6',
        background: page.bgPattern || (page.bgColor || '#faf9f6'),
        backgroundSize: page.bgPatternSize || 'auto',
        backgroundPosition: page.bgPatternPos || 'center',
        backgroundRepeat: page.bgPatternRepeat || 'repeat'
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
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCropImage(page.image, index);
                  }}
                  className="bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 transition-colors"
                  title="Crop Image"
                >
                  <Crop size={14} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onTextChange(index, 'image', null);
                  }}
                  className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
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

// PageThumbnail Component (unchanged)
const PageThumbnail = ({ page, index, isActive, onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer bg-white shadow-md hover:shadow-lg transition-all overflow-hidden ${
        isActive ? 'ring-2 ring-blue-500' : ''
      }`}
      style={{ aspectRatio: '8.5/11' }}
    >
      <div 
        className="h-full p-1 text-xs" 
        style={{ 
          backgroundColor: page.bgColor || '#faf9f6',
          background: page.bgPattern || (page.bgColor || '#faf9f6'),
          backgroundSize: page.bgPatternSize || 'auto',
          backgroundPosition: page.bgPatternPos || 'center',
          backgroundRepeat: page.bgPatternRepeat || 'repeat'
        }}
      >
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

// TextEditor Sidebar Component (unchanged)
const TextEditorSidebar = ({ activePage, onUpdate }) => {
  if (!activePage) return (
    <div className="p-6 text-center text-gray-400">
      <p className="mb-3">Select a page to edit text</p>
      <p className="text-sm">Click on any page to start editing</p>
    </div>
  );

  return (
    <div className="p-4 space-y-6 overflow-y-auto max-h-full">
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

      {/* Background Images Section */}
      <div>
        <label className="block text-sm font-medium mb-2">Background Patterns</label>
        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto p-1">
          {BACKGROUND_IMAGES.map((bg) => (
            <button
              key={bg.id}
              onClick={() => onUpdate({ 
                bgPattern: bg.pattern,
                bgPatternSize: bg.patternSize,
                bgPatternPos: bg.patternPos,
                bgPatternRepeat: bg.patternRepeat
              })}
              className={`relative aspect-square border-2 rounded-lg overflow-hidden transition-all hover:scale-105 ${
                activePage.bgPattern === bg.pattern ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300 hover:border-blue-300'
              }`}
              title={bg.name}
            >
              <div 
                className="w-full h-full"
                style={{ 
                  background: bg.pattern,
                  backgroundSize: bg.patternSize || 'auto',
                  backgroundPosition: bg.patternPos || 'center',
                  backgroundRepeat: bg.patternRepeat || 'repeat',
                  backgroundColor: '#ffffff'
                }}
              />
              {activePage.bgPattern === bg.pattern && (
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
        {activePage.bgPattern && (
          <button
            onClick={() => onUpdate({ 
              bgPattern: null, 
              bgPatternSize: null, 
              bgPatternPos: null, 
              bgPatternRepeat: null 
            })}
            className="w-full mt-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs text-gray-700 transition-colors"
          >
            Remove Background
          </button>
        )}
      </div>
    </div>
  );
};

// Main App Component with Cropping
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
  const [croppingImage, setCroppingImage] = useState(null);
  const [croppingPageIndex, setCroppingPageIndex] = useState(null);
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
      bgColor: '#ffffff',
      topTextAlign: 'center',
      topTextFont: 'Georgia'
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

  // Crop functionality
  const handleStartCrop = (image, pageIndex = null) => {
    setCroppingImage(image.src || image);
    setCroppingPageIndex(pageIndex);
  };

  const handleCropComplete = (croppedImageUrl) => {
    if (croppingPageIndex !== null) {
      // Update image in page
      const newPages = [...pages];
      newPages[croppingPageIndex] = { ...newPages[croppingPageIndex], image: croppedImageUrl };
      setPages(newPages);
    } else {
      // Update image in uploaded images
      setUploadedImages(prev => prev.map(img => 
        img.src === croppingImage ? { ...img, src: croppedImageUrl } : img
      ));
    }
    setCroppingImage(null);
    setCroppingPageIndex(null);
  };

  const handleCropCancel = () => {
    setCroppingImage(null);
    setCroppingPageIndex(null);
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
                onCrop={handleStartCrop}
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
                    onCropImage={handleStartCrop}
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

      {/* Image Cropper Modal */}
      {croppingImage && (
        <ImageCropper
          image={croppingImage}
          onCrop={handleCropComplete}
          onCancel={handleCropCancel}
        />
      )}
    </div>
  );
};

export default App;
