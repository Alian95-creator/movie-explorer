import { useState, useEffect } from "react";
import { auth, provider } from "../services/firebase";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

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

  // 🔥 fallback avatar
  const avatar =
    user?.photoURL ||
    "https://ui-avatars.com/api/?name=User&background=111&color=fff";

  return (
    <div className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-red-500 font-bold text-lg">
        MovieExplorer
      </h1>

      {loading ? (
        <div className="text-gray-400 text-sm">Loading...</div>
      ) : user ? (
        <div className="flex items-center gap-3">
          {/* 👤 AVATAR */}
          <img
            src={avatar}
            alt="user"
            className="w-8 h-8 rounded-full object-cover border border-white/20"
            onError={(e: any) => {
              e.target.src =
                "https://ui-avatars.com/api/?name=User&background=111&color=fff";
            }}
          />

          {/* LOGOUT */}
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
          className="bg-white text-black px-3 py-1 rounded text-sm font-semibold"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Navbar;