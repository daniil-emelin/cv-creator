import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const HEADER_LINKS = [
  {
    title: "Главная",
    dataTestId: "home-page-header-link",
    url: "/",
  },
  {
    title: "Мои резюме",
    dataTestId: "cv-list-header-link",
    url: "/list",
  },
  {
    title: "Создать резюме",
    dataTestId: "create-cv-header-link",
    url: "/cv",
  },
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="md" disableGutters>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Редактор резюме
          </Typography>
          {HEADER_LINKS.map(({ title, url, dataTestId }) => (
            <Button data-testid={dataTestId} key={title} color="inherit" onClick={() => navigate(url)}>
              {title}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
