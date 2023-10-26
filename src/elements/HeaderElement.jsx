function Header() {
  return (
    <div className="p-5 mx-4 my-4 bg-body-secondary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome!</h1>
        <p className="col-md-8 fs-4">
          We are very pleased to inform you about the new capabilities of this
          site, the following button has a very dangerous function and you
          should absolutely not press it under any circumstances.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Nuclear attack
        </button>
      </div>
    </div>
  );
}
export default Header;
