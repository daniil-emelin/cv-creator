import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

import { Button } from "components";
import { removeCv } from "store/cv/slice";

import type { CV } from "store/cv/types";

type Props = {
  list: CV[];
};

export const CVList = ({ list }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (list.length === 0) {
    return (
      <Stack spacing={2}>
        <Alert severity="info">Вы не создали резюме.</Alert>
        <Button onClick={() => navigate("/cv")}>Создать резюме</Button>
      </Stack>
    );
  }

  return (
    <List>
      {list.map((cv) => (
        <ListItem
          key={cv.id}
          secondaryAction={
            <Stack direction="row" spacing={2}>
              <IconButton
                edge="end"
                onClick={() => navigate(`/preview/${cv.id}`)}
              >
                <DownloadIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => navigate(`/cv/${cv.id}`)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => dispatch(removeCv(cv.id))}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          }
        >
          <ListItemText primary={cv.name} secondary={cv.position} />
        </ListItem>
      ))}
    </List>
  );
};
