const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  newChatBtn: {
    borderRadius: "0px",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px",
  },
  newNoteBtn: {
    width: "100%",
    height: "35px",
    borderBottom: "1px solid black",
    borderRadius: "0px",
    backgroundColor: "#353434",
    color: "white",
    "&:hover": {
      backgroundColor: "#afa5a5",
    },
  },
  newNoteInput: {
    width: "100%",
    margin: "0px",
    height: "35px",
    outline: "none",
    border: "none",
    paddingLeft: "5px",
    backgroundColor: "#f9f2f2",
    "&:focus": {
      outline: "2px solid #afa5a5",
    },
  },
  newNoteSubmitBtn: {
    width: "100%",
    backgroundColor: "#353434",
    borderRadius: "0px",
    color: "white",
    "&:hover": {
      backgroundColor: "#afa5a5",
    },
  },
});

export default styles;
