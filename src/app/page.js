"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/about");
  }, []);
  return null;
}








// "use client";
// import React, { useState } from "react";

// export default function MenuIcon() {
//   const [open, setOpen] = useState(false);

//   return (
//     <button
//       onClick={() => setOpen(!open)}
//       className="relative w-9 h-9 flex items-center justify-center"
//     >
//       {/* Line 1 */}
//       <span
//         className={`absolute w-7 h-[3px] bg-black rounded transition-all duration-300 ease-in-out ${open ? "rotate-45" : "-translate-y-2.5"
//           }`}
//       ></span>

//       {/* Line 2 */}
//       <span
//         className={`absolute w-7 h-[3px] bg-black rounded transition-all duration-300 ease-in-out ${open ? " opacity-0" : ""
//           }`}
//       ></span>

//       {/* Line 3 */}
//       <span
//         className={`absolute w-7 h-[3px] bg-black rounded transition-all duration-300 ease-in-out ${open ? "-rotate-45" : "translate-y-2.5"
//           }`}
//       ></span>
//     </button>
//   );
// }






// "use client";
// import React, { useState } from "react";

// export default function MenuIcon() {
//   const [open, setOpen] = useState(false);

//   return (
//     <button
//       onClick={() => setOpen(!open)}
//       className="relative w-8 h-8 flex items-center justify-center"
//     >
//       {/* Top Line */}
//       <span
//         className={`absolute h-0.5 w-7 bg-black transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"
//           }`}
//       ></span>

//       {/* Middle Line */}
//       <span
//         className={`absolute h-0.5 w-7 bg-black transition-all duration-300 ${open ? "opacity-0" : ""
//           }`}
//       ></span>

//       {/* Bottom Line */}
//       <span
//         className={`absolute h-0.5 w-7 bg-black transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"
//           }`}
//       ></span>
//     </button>
//   );
// }

