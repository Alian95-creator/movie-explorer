import { useState, useEffect } from "react";
import { auth, provider } from "../services/firebase";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import Logo from "./Logo";

function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const avatar =
    user?.photoURL ||
    "https://ui-avatars.com/api/?name=User&background=111&color=fff";

  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* 🔥 LOGO */}
        <Logo />

        {/* RIGHT SIDE */}
        {loading ? (
          <div className="text-gray-400 text-sm">Loading...</div>
        ) : user ? (
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              className="w-9 h-9 rounded-full object-cover border border-white/20"
              onError={(e: any) =>
                (e.target.src =
                  "https://ui-avatars.com/api/?name=User")
              }
            />

            <button
              onClick={logout}
              className="text-sm hover:text-red-400 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={login}
            className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-md"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;