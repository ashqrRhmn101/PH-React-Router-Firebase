import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth } from "./Firebase/firebase.init";
import { useState } from "react";

const googleProvide = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvide)
      .then((result) => {
        console.log(result.user)
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {
      setUser(null)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <>
      <div>
        <h1>Simple Google Sign In</h1>
        {user ? (
          <button className="btn-signOut" onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button className="btn-signIn" onClick={handleSignIn}>Sign In</button>
        )}

        <div>
          {user && (
            <div>
              <h1>{user.displayName}</h1>
              <p>email: {user.email}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
