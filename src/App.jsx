import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Button,
  TableRow,
  TableCell,
  Paper,
  Container,
  Input,
  Box,
} from "@mui/material";
const App = () => {
  const [data, setData] = React.useState([]);
  const [actionType, setActionType] = React.useState("Add");
  const [sheetType, setSheetType] = React.useState("gsheet");
  const [query, setQuery] = React.useState("gsheet");
  const [addChar, setAddChar] = React.useState(false);
  const [addAT, setAddAT] = React.useState(false);
  const [addRD, setAddRD] = React.useState(false);
  const [addWW, setAddWW] = React.useState(false);
  const [textAT, setTextAT] = React.useState("");
  const [textRD, setTextRD] = React.useState("");
  const [textWW, setTextWW] = React.useState("");
  const [discordId, setDiscordId] = React.useState("");
  const [addTicket, setAddTicket] = React.useState("");
  const [textTicket, setTextTicket] = React.useState("");
  const [pName, setPName] = React.useState("");
  const [cName, setCName] = React.useState("");
  const [cRace, setCRace] = React.useState("");
  const [cBackground, setCBackground] = React.useState("");
  const [cClass, setCClass] = React.useState("");
  const [sheet, setSheet] = React.useState("");
  const [errText, setErrText] = React.useState("");
  React.useEffect(() => {
    axios
      .get("https://rich-outfit-crow.cyclic.app/char")
      .then((res) => setData(res.data));
  }, []);

  let postData;
  let type;
  const fetchAT = () => {
    if (actionType === "Add") {
      type = "addAT";
    } else if (actionType === "Remove") {
      type = "removeAT";
    }
    const AT = parseInt(textAT, 10);
    postData = {
      actionType: type,
      AT,
    };
    axios
      .patch(`https://rich-outfit-crow.cyclic.app/char/${discordId}`, postData)
      .then((res) => {
        if (type === "addAT") {
          toast("add AT successfully");
        } else if (type === "removeAT") {
          toast("remove AT successfully");
        }
        axios
          .get("https://rich-outfit-crow.cyclic.app/char")
          .then((res) => setData(res.data));
      })
      .catch((err) => {
        console.log(err);
        toast(err);
      });
  };

  const fetchRD = () => {
    if (actionType === "Add") {
      type = "addRD";
    } else if (actionType === "Remove") {
      type = "removeRD";
    }
    const RD = parseInt(textRD, 10);
    postData = {
      actionType: type,
      RD,
    };
    console.log(postData);
    axios
      .patch(`https://rich-outfit-crow.cyclic.app/char/${discordId}`, postData)
      .then((res) => {
        if (type === "addRD") {
          toast("add RD successfully");
        } else if (type === "removeRD") {
          toast("remove RD successfully");
        }
        axios
          .get("https://rich-outfit-crow.cyclic.app/char")
          .then((res) => setData(res.data));
      })
      .catch((err) => {
        console.log(err);
        toast(err);
      });
  };

  const fetchWorkweek = () => {
    if (actionType === "Add") {
      type = "addWW";
    } else if (actionType === "Remove") {
      type = "removeWW";
    }
    const WW = parseInt(textWW, 10);
    postData = {
      actionType: type,
      Workweek: WW,
    };
    console.log(postData);
    axios
      .patch(`https://rich-outfit-crow.cyclic.app/char/${discordId}`, postData)
      .then((res) => {
        if (type === "addWW") {
          toast("add WW successfully");
        } else if (type === "removeWW") {
          toast("remove WW successfully");
        }
        axios
          .get("https://rich-outfit-crow.cyclic.app/char")
          .then((res) => setData(res.data));
      })
      .catch((err) => {
        console.log(err);
        toast(err);
      });
  };

  const fetchTicket = () => {
    if (actionType === "Add") {
      type = "addTicket";
    } else if (actionType === "Remove") {
      type = "removeTicket";
    }
    const Ticket = parseInt(textTicket, 10);
    postData = {
      actionType: type,
      Ticket,
    };
    axios
      .patch(`https://rich-outfit-crow.cyclic.app/char/${discordId}`, postData)
      .then((res) => {
        if (type === "addTicket") {
          toast("add Ticket successfully");
        } else if (type === "removeTicket") {
          toast("remove Ticket successfully");
        }
        axios
          .get("https://rich-outfit-crow.cyclic.app/char")
          .then((res) => setData(res.data));
      })
      .catch((err) => {
        console.log(err);
        toast(err);
      });
  };

  const fetchCharactor = () => {
    if (sheetType === "gsheet") {
      postData = {
        sheetType: "gsheet",
        discordId,
        playerName: pName,
        sheet,
      };
    }
    if (sheetType === "beyond") {
      postData = {
        sheetType: "beyond",
        discordId,
        playerName: pName,
        sheet,
        CharactorName: cName,
        CharactorRace: cRace,
        CharactorClass: cClass,
        CharactorBackground: cBackground,
      };
    }

    console.log(postData);
    axios
      .post("https://rich-outfit-crow.cyclic.app/char/add", postData)
      .then((res) => {
        console.log(res);
        toast("Charactor was uploaded");
        axios
          .get("https://rich-outfit-crow.cyclic.app/char")
          .then((res) => setData(res.data));
      })
      .catch((err) => console.log(err));
  };

  function CharactorClick() {
    setAddWW(false);
    setAddTicket(false);
    setAddAT(false);
    setAddRD(false);
    setAddChar(true);
  }
  function ATClick() {
    setAddChar(false);
    setAddWW(false);
    setAddTicket(false);
    setAddAT(true);
    setAddRD(false);
  }
  function RDClick() {
    setAddWW(false);
    setAddTicket(false);
    setAddAT(false);
    setAddRD(true);
    setAddChar(false);
  }
  function WWClick() {
    setAddChar(false);
    setAddWW(true);
    setAddTicket(false);
    setAddAT(false);
    setAddRD(false);
  }
  function TicketClick() {
    setAddChar(false);
    setAddWW(false);
    setAddTicket(true);
    setAddAT(false);
    setAddRD(false);
  }

  return (
    <>
      <div>
        <ToastContainer />
        <Container>
          <Input
            placeholder="Search here"
            sx={{
              my: 2,
              width: "100%",
              background: "#eee",
              p: 1,
              borderRadius: "5px",
            }}
            onChange={(e) => setQuery(e.target.value)}
          />
          <TableContainer sx={{ background: "#fff" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>DiscordId</TableCell>
                  <TableCell>PlayerName</TableCell>
                  <TableCell>CharactorName</TableCell>
                  <TableCell>CharactorRace</TableCell>
                  <TableCell>CharactorClass</TableCell>
                  <TableCell>CharactorBackground</TableCell>
                  <TableCell>RD</TableCell>
                  <TableCell>AT</TableCell>
                  <TableCell>WW</TableCell>
                  <TableCell>Ticket</TableCell>
                  <TableCell>Level</TableCell>
                  <TableCell>SheetType</TableCell>
                  <TableCell>Sheet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.filter((row) => !query.length || row.PlayerName.toString().toLowerCase().includes(query.toString().toLowerCase())).map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.DiscordId}</TableCell>
                    <TableCell>{item.PlayerName}</TableCell>
                    <TableCell>{item.CharactorName}</TableCell>
                    <TableCell>{item.CharactorRace}</TableCell>
                    <TableCell>{item.CharactorClass}</TableCell>
                    <TableCell>{item.CharactorBackground}</TableCell>
                    <TableCell>{item.RD}</TableCell>
                    <TableCell>{item.AT}</TableCell>
                    <TableCell>{item.Workweek}</TableCell>
                    <TableCell>{item.Ticket}</TableCell>
                    <TableCell>{item.Level}</TableCell>
                    <TableCell>{item.SheetType}</TableCell>
                    <TableCell>{item.Sheet}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              background: "#aaa",
              borderRadius: "5px",
              width: "98%",
              p: 1,
              my: 2,
            }}
          >
            <Button
              sx={{
                mx: "2px",
                color: "#333",
                width: "20%",
                height: "100%",
                background: "#fff",
                fontSize: 16,
              }}
              onClick={CharactorClick}
            >
              Charactor
            </Button>
            <Button
              sx={{
                mx: "4px",
                color: "#333",
                width: "19%",
                height: "100%",
                background: "#fff",
                fontSize: 16,
              }}
              onClick={ATClick}
            >
              AT
            </Button>
            <Button
              sx={{
                mx: "4px",
                color: "#333",
                width: "19%",
                height: "100%",
                background: "#fff",
                fontSize: 16,
              }}
              onClick={RDClick}
            >
              RD
            </Button>
            <Button
              sx={{
                mx: "3px",
                color: "#333",
                width: "19%",
                height: "100%",
                background: "#fff",
                fontSize: 16,
              }}
              onClick={WWClick}
            >
              Workweek
            </Button>
            <Button
              sx={{
                mx: "3px",
                color: "#333",
                width: "19%",
                height: "100%",
                background: "#fff",
                fontSize: 16,
              }}
              onClick={TicketClick}
            >
              Ticket
            </Button>
          </Box>
          {addChar ? (
            <Box
              sx={{
                width: "100%",
                background: "#aaa",
                borderRadius: "3px",
              }}
            >
              <Input
                placeholder="SheetType here"
                value={sheetType}
                sx={{
                  width: "16%",
                  borderRadius: "3px",
                  px: 1,
                  mx: 1,
                  mt: 1,
                  background: "#fff",
                }}
                onChange={(e) => setSheetType(e.target.value)}
              />
              <Input
                placeholder="DiscordId here"
                value={discordId}
                sx={{
                  width: "16%",
                  borderRadius: "3px",
                  mt: 1,
                  px: 1,
                  mx: 1,
                  background: "#fff",
                }}
                onChange={(e) => setDiscordId(e.target.value)}
              />
              <Input
                placeholder="PlayerName here"
                value={pName}
                sx={{
                  width: "16%",
                  borderRadius: "3px",
                  mt: 1,
                  px: 1,
                  mx: 1,
                  background: "#fff",
                }}
                onChange={(e) => setPName(e.target.value)}
              />
              {sheetType !== "beyond" ? (
                <>
                  <Input
                    value={sheet}
                    sx={{
                      width: "20%",
                      borderRadius: "3px",
                      mt: 1,
                      px: 1,
                      mx: 1,
                      background: "#fff",
                    }}
                    onChange={(e) => setSheet(e.target.value)}
                    placeholder="Sheet here"
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder="CharactorName here"
                    value={cName}
                    sx={{
                      width: "16%",
                      borderRadius: "3px",
                      mt: 1,
                      px: 1,
                      mx: 1,
                      background: "#fff",
                    }}
                    onChange={(e) => setCName(e.target.value)}
                  />
                  <Input
                    placeholder="CharactorRace here"
                    value={cRace}
                    sx={{
                      width: "16%",
                      borderRadius: "3px",
                      mt: 1,
                      px: 1,
                      mx: 1,
                      background: "#fff",
                    }}
                    onChange={(e) => setCRace(e.target.value)}
                  />
                  <Input
                    placeholder="CharactorBackground here"
                    value={cBackground}
                    sx={{
                      width: "16%",
                      borderRadius: "3px",
                      mt: 1,
                      px: 1,
                      mx: 1,
                      background: "#fff",
                    }}
                    onChange={(e) => setCBackground(e.target.value)}
                  />
                  <Input
                    placeholder="CharactorClass here"
                    value={cClass}
                    sx={{
                      width: "16%",
                      borderRadius: "3px",
                      mt: 1,
                      px: 1,
                      mx: 1,
                      background: "#fff",
                    }}
                    onChange={(e) => setCClass(e.target.value)}
                  />
                  <Input
                    sx={{
                      width: "16%",
                      borderRadius: "3px",
                      mt: 1,
                      px: 1,
                      mx: 1,
                      background: "#fff",
                    }}
                    placeholder="Sheet here"
                    value={sheet}
                    onChange={(e) => setSheet(e.target.value)}
                  />
                </>
              )}
              <Button
                onClick={fetchCharactor}
                sx={{ background: "#fff", fontSize: 12 }}
              >
                Submit
              </Button>
            </Box>
          ) : null}
          {addAT ? (
            <Box
              sx={{
                width: "100%",
                background: "#aaa",
                p: 1,
                borderRadius: "3px",
              }}
            >
              <Box>
                {actionType === "Add" ? (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Remove")}
                  >
                    ⬆
                  </Box>
                ) : (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Add")}
                  >
                    ⬇
                  </Box>
                )}
                <Input
                  placeholder="DiscordId"
                  value={discordId}
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  onChange={(e) => setDiscordId(e.target.value)}
                />
                <Input
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  placeholder="AT"
                  value={textAT}
                  onChange={(e) => setTextAT(e.target.value)}
                />
                <Button sx={{ background: "#fff" }} onClick={fetchAT}>
                  Submit
                </Button>
              </Box>
            </Box>
          ) : null}
          {addRD ? (
            <Box
              sx={{
                width: "100%",
                background: "#aaa",
                p: 1,
                borderRadius: "3px",
              }}
            >
              <Box>
                {actionType === "Add" ? (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Remove")}
                  >
                    ⬆
                  </Box>
                ) : (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Add")}
                  >
                    ⬇
                  </Box>
                )}
                <Input
                  placeholder="DiscordId"
                  value={discordId}
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  onChange={(e) => setDiscordId(e.target.value)}
                />
                <Input
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  placeholder="RD"
                  value={textRD}
                  onChange={(e) => setTextRD(e.target.value)}
                />
                <Button onClick={fetchRD} sx={{ background: "#fff" }}>
                  Submit
                </Button>
              </Box>
            </Box>
          ) : null}
          {addWW ? (
            <Box
              sx={{
                width: "100%",
                background: "#aaa",
                p: 1,
                borderRadius: "3px",
              }}
            >
              <Box>
                {actionType === "Add" ? (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Remove")}
                  >
                    ⬆
                  </Box>
                ) : (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Add")}
                  >
                    ⬇
                  </Box>
                )}
                <Input
                  placeholder="DiscordId"
                  value={discordId}
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  onChange={(e) => setDiscordId(e.target.value)}
                />
                <Input
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  placeholder="Workweek"
                  value={textWW}
                  onChange={(e) => setTextWW(e.target.value)}
                />
                <Button onClick={fetchWorkweek} sx={{ background: "#fff" }}>
                  Submit
                </Button>
              </Box>
            </Box>
          ) : null}
          {addTicket ? (
            <Box
              sx={{
                width: "100%",
                background: "#aaa",
                p: 1,
                borderRadius: "3px",
              }}
            >
              <Box>
                {actionType === "Add" ? (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Remove")}
                  >
                    ⬆
                  </Box>
                ) : (
                  <Box
                    sx={{
                      background: "#fff",
                      width: "20px",
                      borderRadius: "3px",
                      pl: 2,
                      pr: 1,
                      py: 1,
                    }}
                    onClick={(e) => setActionType("Add")}
                  >
                    ⬇
                  </Box>
                )}
                <Input
                  placeholder="DiscordId"
                  value={discordId}
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  onChange={(e) => setDiscordId(e.target.value)}
                />
                <Input
                  sx={{
                    width: "40%",
                    borderRadius: "3px",
                    mt: 2,
                    px: 1,
                    mx: 1,
                    background: "#fff",
                  }}
                  placeholder="Ticket"
                  value={textTicket}
                  onChange={(e) => setTextTicket(e.target.value)}
                />
                <Button onClick={fetchTicket} sx={{ background: "#fff" }}>
                  Submit
                </Button>
              </Box>
            </Box>
          ) : null}
        </Container>
      </div>
    </>
  );
};

export default App;
