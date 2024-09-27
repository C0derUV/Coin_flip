import Index from "../../../container/Index";


export default function Footer() {
  return (
    <>
      <Index.Box className="footer-main">
        <Index.Box className="container">
          <Index.Box className="footer-row">
            <Index.List className="footer-nav">
              <Index.ListItem className="footer-nav-item">
                <Index.Link to={"/"} className="footer-nav-link">Faq</Index.Link>
              </Index.ListItem>
              <Index.ListItem className="footer-nav-item">
                <Index.Link to={"/"} className="footer-nav-link">HOW TO PLAY</Index.Link>
              </Index.ListItem>
              <Index.ListItem className="footer-nav-item">
                <Index.Link to={"/"} className="footer-nav-link">T&C</Index.Link>
              </Index.ListItem>
              <Index.ListItem className="footer-nav-item">
                <Index.Link to={"/"} className="footer-nav-link">AML</Index.Link>
              </Index.ListItem>
              <Index.ListItem className="footer-nav-item">
                <Index.Link to={"/"} className="footer-nav-link">KYC</Index.Link>
              </Index.ListItem>
            </Index.List>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  )
}
