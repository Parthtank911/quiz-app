function Navbar({ user, setUser, setPage, cart }) {
  const handleLogout = () => {
    setUser(null);
    setPage("home");
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#2563eb",
      color: "white"
    }}>
      <div style={{ cursor: "pointer" }} onClick={() => setPage("home")}>Home</div>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: "15px" }}>Hello, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={() => setPage("login")}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
