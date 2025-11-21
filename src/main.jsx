import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <App />
    
  </React.StrictMode>,
)


// // DmsLogin.jsx
// import React, { useMemo, useState } from "react";
// import { assets } from "./assets/assets";

// /**
//  * Improved floating-card shadow (downwards) + diamond grid.
//  * Floating image path used: /mnt/data/Screenshot 2025-11-21 141547.png
//  */

// export default function DmsLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);

//   // Denser, small tile grid params (tweak as needed)
//   const tileSize = 120;
//   const tileRadius = 12;
//   const tileGapX = 16;
//   const tileGapY = 48;
//   const rows = 7;
//   const cols = 8;

//   const tiles = useMemo(() => {
//     const arr = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const x = c * (tileSize + tileGapX) + (r % 2 ? (tileSize + tileGapX) / 2 : 0);
//         const y = r * (tileSize * 0.45 + tileGapY * 0.0);
//         arr.push({ key: `${r}-${c}`, x, y });
//       }
//     }
//     return arr;
//   }, [rows, cols, tileSize, tileGapX, tileGapY]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submit", { email, password, remember });
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0A2240]">
//       <style>{`
//         /* tile helpers */
//         .tile-outer { transform: rotate(45deg); }
//         .tile-inner  { transform: rotate(-45deg); }

//         /* floating card movement */
//         @keyframes floatingSmall {
//           0% { transform: translate(-50%, -50%) rotate(-12deg) translateY(0); }
//           50% { transform: translate(-50%, -50%) rotate(-12deg) translateY(-12px); }
//           100% { transform: translate(-50%, -50%) rotate(-12deg) translateY(0); }
//         }

//         /* shadow morph: vertical emphasis (bigger translateY and blur) */
//         @keyframes shadowMorphDown {
//           0% { transform: translateX(18px) translateY(36px) scale(0.98); opacity: 0.34; filter: blur(14px); }
//           50% { transform: translateX(22px) translateY(58px) scale(1.08); opacity: 0.18; filter: blur(26px); }
//           100% { transform: translateX(18px) translateY(36px) scale(0.98); opacity: 0.34; filter: blur(14px); }
//         }

//         /* darker inner shadow layer animation (follows the card more closely) */
//         @keyframes shadowInner {
//           0% { transform: translateX(10px) translateY(20px) scale(0.98); opacity: 0.45; filter: blur(8px); }
//           50% { transform: translateX(14px) translateY(36px) scale(1.02); opacity: 0.28; filter: blur(16px); }
//           100% { transform: translateX(10px) translateY(20px) scale(0.98); opacity: 0.45; filter: blur(8px); }
//         }
//       `}</style>

//       {/* LEFT: tile grid */}
//       <div className="relative w-full lg:w-1/2 bg-white overflow-hidden">
//         <div
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//           style={{
//             width: cols * (tileSize + tileGapX) + 160,
//             height: rows * (tileSize * 0.5 + tileGapY) + 160,
//           }}
//         >
//           {tiles.map((t) => (
//             <div
//               key={t.key}
//               className="absolute"
//               style={{
//                 left: t.x,
//                 top: t.y,
//                 width: tileSize,
//                 height: tileSize,
//                 transform: `translate(-50%, -50%)`,
//               }}
//               aria-hidden="true"
//             >
//               <div
//                 className="tile-outer w-full h-full flex items-center justify-center"
//                 style={{
//                   borderRadius: tileRadius,
//                   background: "#FFF",
//                   border: "7px solid rgba(229,231,235,0.95)",
//                   boxSizing: "border-box",
//                   boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
//                 }}
//               >
//                 <div className="tile-inner w-full h-full flex items-center justify-center">
//                   <img
//                     src={assets.bg_logo_one}
//                     alt=""
//                     className="w-6 h-6 -rotate-45"
//                     style={{ userSelect: "none", pointerEvents: "none" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Floating card + two shadow layers BELOW it (so shadow sits on top of tiles but behind card) */}
//         <div className="absolute left-1/2 top-1/2 z-40" style={{ transform: "translate(-50%,-50%)" }}>
//           {/* outer soft broad shadow (big, very blurred, gives ambient) */}
//           <div
//             aria-hidden="true"
//             style={{
//               position: "absolute",
//               left: "50%",
//               top: "85%", // push further down
//               transform: "translateX(18px) translateY(48px)",
//               width: 320,
//               height: 140,
//               borderRadius: 36,
//               background: "radial-gradient(closest-side, rgba(10,34,64,0.18), rgba(10,34,64,0.02))",
//               filter: "blur(26px)",
//               zIndex: 12,
//               animation: "shadowMorphDown 3.6s ease-in-out infinite",
//               pointerEvents: "none",
//             }}
//           />

//           {/* inner darker elongated shadow (gives sharper contact) */}
//           <div
//             aria-hidden="true"
//             style={{
//               position: "absolute",
//               left: "50%",
//               top: "78%",
//               transform: "translateX(12px) translateY(30px)",
//               width: 220,
//               height: 84,
//               borderRadius: 18,
//               background: "linear-gradient(180deg, rgba(2,20,40,0.45), rgba(10,34,64,0.04))",
//               filter: "blur(10px)",
//               zIndex: 13,
//               animation: "shadowInner 3.6s ease-in-out infinite",
//               pointerEvents: "none",
//             }}
//           />

//           {/* floating card image (on top of shadows) */}
//           <div
//             role="img"
//             aria-label="Floating navy card small"
//             style={{
//               width: 180,
//               height: 100,
//               transform: "translate(-50%,-50%) rotate(-12deg)",
//               backgroundImage: `url("/mnt/data/Screenshot 2025-11-21 141547.png")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               borderRadius: 12,
//               boxShadow: "0 8px 18px rgba(2,20,40,0.45), 0 22px 60px rgba(10,34,64,0.26)",
//               zIndex: 20,
//               animation: "floatingSmall 3.6s ease-in-out infinite",
//             }}
//           />
//         </div>
//       </div>

//       {/* RIGHT: login panel */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative overflow-hidden">
//         {/* animated vignette overlay */}
//         <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 5 }}>
//           <div
//             style={{
//               position: "absolute",
//               left: "60%",
//               top: "40%",
//               width: "60%",
//               height: "80%",
//               background: "radial-gradient(closest-side, rgba(255,255,255,0.06), rgba(255,255,255,0) 60%)",
//               transform: "translate(-50%,-50%) scale(1)",
//               animation: "vignetteShift 8s ease-in-out infinite",
//               mixBlendMode: "overlay",
//             }}
//           />
//         </div>

//         <div
//           className="w-full max-w-md rounded-xl p-8 relative z-10"
//           style={{ background: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
//           role="region"
//           aria-label="Login form"
//         >
//           <h1 className="text-2xl lg:text-3xl font-semibold mb-6" style={{ color: "#0A2240" }}>
//             Login
//           </h1>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email address"
//                 required
//                 aria-label="Email address"
//                 className="w-full rounded-md px-4 py-3 text-sm bg-[#F9FAFB] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//                 aria-label="Password"
//                 className="w-full rounded-md px-4 py-3 text-sm bg-[#F9FAFB] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]"
//               />
//             </div>

//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center gap-2 text-[#6B7280]">
//                 <input
//                   type="checkbox"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                   className="h-4 w-4 rounded accent-[#0A2240]"
//                 />
//                 Remember me
//               </label>
//               <a href="#" className="text-sm text-[#3B82F6] hover:underline">Forgot password?</a>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 rounded-md text-white font-semibold"
//               style={{ backgroundColor: "#0A2240", boxShadow: "0 6px 18px rgba(10,34,64,0.25)" }}
//             >
//               Login
//             </button>

//             <p className="text-center text-sm text-[#6B7280] mt-3">
//               Don’t have an account?{" "}
//               <a href="#" className="text-[#0A2240] font-medium hover:underline">Create free account</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
