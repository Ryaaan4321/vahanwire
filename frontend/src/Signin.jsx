import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signin successful");
        navigate("/"); // go to dashboard
      } else {
        alert("Signin failed: " + data);
      }
    } catch (error) {
      console.log(error.message);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <input
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <input
        name="password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleSignin}
        className="bg-green-500 text-white p-2 rounded"
      >
        Sign In
      </button>
    </div>
  );
}

export default Signin;
