import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div style={{display:"flex" }}>
            <div>
                <Link to="/signup">
                    <button>Signup</button>
                </Link>
            </div>
            <div>
                <Link to="/signin">
                    <button>Signin</button>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
