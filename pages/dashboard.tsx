interface DashboardInfo {
  name: string;
  bio: string;
  blog: string;
}

const Dashboard = ({ name, bio, blog }: DashboardInfo) => (
  <>
    <h1>{name}</h1>
    <p>{`Bio: ${bio}`}</p>
    <p>{`Blog: ${blog}`}</p>
  </>
);

export default Dashboard;

Dashboard.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/hiimchrislim");
  const user = res.json();
  return user;
};
