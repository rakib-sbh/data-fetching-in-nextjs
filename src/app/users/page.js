const userStyle = {
  backgroundColor: "wheat",
  color: "black",
  padding: "10px",
  margin: "10px",
};

const headingStyle = {
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  padding: "10px",
};

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      <h1 style={headingStyle}>All Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id} style={userStyle}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersPage;
