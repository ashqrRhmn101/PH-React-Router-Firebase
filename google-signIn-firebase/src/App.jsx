import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./Firebase/firebase.init";
import { useState } from "react";

const googleProvide = new GoogleAuthProvider();
const gitHubProvide = new GithubAuthProvider();
gitHubProvide.addScope("user:email");

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvide)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHub = () => {
    signInWithPopup(auth, gitHubProvide)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <h1>Simple Google Sign In</h1>
        {user ? (
          <button className="btn-signOut" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <>
            <button className="btn-signIn" onClick={handleSignIn}>
              Sign In with google
            </button>
            <button className="btn-signIn" onClick={handleGitHub}>
              Sign In with GitHub
            </button>
          </>
        )}

        <div>
          {user && (
            <div>
              <h1>{user.displayName}</h1>
              <p>email: {user.email}</p>
              <p>
                Image: <img src={user.photoURL} alt="" />
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
