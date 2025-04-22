import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <div className="iphone">
        <div className="front top-bar"></div>
        <div className="front bottom-bar"></div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
