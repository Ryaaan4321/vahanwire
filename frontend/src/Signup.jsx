import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        navigate('/');
        alert("signup succesfull");
      } else {
        alert("signup failedddd");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <input
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
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
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </div>
  );
}

export default Signup;
