const styles = {
  root: {
    borderTop: "5px solid #090909",
    width: "100%",
    background: "#2868ad url(/assets/images/navigation-tab.png) repeat-x top",
    borderBottom: "1px solid #6cb2e4",
    height: "auto",
    justifyContent: "center"
  },
  menu: {
    width: '70%'
  },
  logo: {
    position: "absolute",
    color: "#fff",
    display: "inline-block",
    fontSize: "2.1rem",
    padding: 0
  },
  inputSearchContainer: {
    marginLeft: "auto"
  },
  materialIcons: {
    paddingLeft: "0.3rem",
    fontSize: "1.5rem",
    color: "#fff"
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 250,
    height: "1.4rem",
    border: "1px solid #2096e1",
    borderRadius: "0.3rem",
    background: "#2096e1 url(/assets/images/navigation-tab.png) repeat-x top"
  },
  input: {
    marginLeft: 8,
    flex: 1,
    color: "#fff",
    fontSize: "0.8rem"
  },
  iconButton: {
    padding: 0,
    color: "#fff"
  },
  header: {
    minHeight: 75,
    position: "relative"
  },
  image: {
    width: "100%"
  },
  clearIcon: {
    fontSize: 18,
    color: "#424242"
  },
  tab: {
    minWidth: 100,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14
  },
  tabSelected: {
    color: "#fff !important",
    borderRadius: "0.3rem 0.3rem 0 0",
    background: "#2096e1 url(/assets/images/navigation-tab.png) repeat-x top"
  },
  indicator: {
    height: 0
  },
  subMenu: {
    background: "#2096e1 url(/assets/images/navigation-tab.png) repeat-x top",
    justifyContent: "center",
    padding: "0px 30px",
    color: "#fff",
    minHeight: "2.7rem",
    fontSize: 14,
    fontWeight: "bold"
  },
  labelWrapper: {
    position: "absolute",
    justifyContent: "flex-end",
    zIndex: 1
  },
  label: {
    background: "#000",
    color: "rgb(214, 214, 214)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    boxShadow: "0px 2px 5px #032A46",
    fontSize: 11,
    lineHeight: "20px",
    padding: "0px 10px",
    textTransform: "none"
  }
};

export default styles;
