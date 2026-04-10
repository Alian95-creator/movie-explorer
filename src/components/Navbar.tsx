import { useState, useEffect } from "react";
import { auth, provider } from "../services/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-red-500 font-bold">MovieExplorer</h1>

      {user ? (
        <div className="flex items-center gap-3">
          <img
            src={user.photoURL}
            className="w-8 h-8 rounded-full"
          />
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login} className="bg-white text-black px-3 py-1 rounded">
          Login
        </button>
      )}
    </div>
  );
}

export default Navbar;