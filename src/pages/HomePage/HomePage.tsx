import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { Button } from "components/Button";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={7} sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Онлайн конструктор резюме
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Создай свое стильное резюме за несколько минут. Это повышает шансы
          получить желаемую должность.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button onClick={() => navigate("/cv")} sx={{ mt: 4 }}>
            Создать резюме
          </Button>
          <Button
            onClick={() => navigate("/preview/example")}
            sx={{ mt: 4 }}
            variant="text"
          >
            Посмотреть пример
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};
