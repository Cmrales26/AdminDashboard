import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  useTheme,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { tokens } from "../../../theme";

const CreateEvent = () => {
  const { state } = useLocation();
  const EventData = JSON.parse(localStorage.getItem("EventData")) || [];
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startHour, setStartHour] = useState(null);
  const [endHour, setEndHour] = useState(null);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (!state || state === null) {
      navigate("/calendar");
      return; // Exit early if state is not available
    }

    setStartDate(dayjs(state.startDate));
    setEndDate(dayjs(state.endDate));
    setStartHour(dayjs(`${state.endDate} 00:00`));
    setEndHour(dayjs(`${state.endDate} 00:00`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleChangeCheked = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const GenerateId = (length) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
      result += charset.charAt(Math.floor(Math.random() * n));
    }
    return result;
  };

  const handleFormSubmit = (values) => {
    let startStr = "";
    let endStr = "";

    if (checked) {
      startStr = `${dayjs(startDate).format("YYYY-MM-DD")} 00:00`;
      endStr = `${dayjs(endDate).format("YYYY-MM-DD")} 00:00`;
    }

    startStr = `${dayjs(startDate).format("YYYY-MM-DD")} ${dayjs(
      startHour
    ).format("HH:mm:ss")}`;

    endStr = `${dayjs(endDate).format("YYYY-MM-DD")} ${dayjs(endHour).format(
      "HH:mm:ss"
    )}`;

    const id = GenerateId(5);

    const NewEvent = {
      id,
      title: values.title,
      description: values.description,
      status: status,
      allDay: checked,
      start: startStr,
      end: endStr,
    };

    EventData.push(NewEvent);
    localStorage.setItem("EventData", JSON.stringify(EventData));
    navigate("/calendar");
  };
  const initialValues = {
    title: "",
    description: "",
  };

  // Schema

  const EventSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  return (
    <Box m={"20px"}>
      <Header
        title={"CREATE EVENT"}
        subtitle={"Complete the form to create the event"}
      ></Header>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={EventSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={"grid"}
              gap={"30px"}
              gridTemplateColumns={"repeat(4,minmax(0,1fr))"}
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title Event"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              ></TextField>

              <FormControl sx={{ gridColumn: "span 2" }} variant="filled">
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value={"pending"}>pending</MenuItem>
                  <MenuItem value={"in progress"}>in progress</MenuItem>
                  <MenuItem value={"completed"}>completed</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                label="Event Description"
                onBlur={handleBlur}
                onChange={handleChange}
                multiline
                rows={6}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker", "DatePicker"]}
                  sx={{
                    gridColumn: "span 2",
                  }}
                >
                  <DatePicker
                    label="Start Date"
                    onBlur={handleBlur}
                    onChange={(newDate) => setStartDate(newDate)}
                    value={startDate}
                    name="start"
                    slotProps={{
                      textField: {
                        variant: "filled",
                      },
                    }}
                    sx={{ width: "100%" }}
                  />
                </DemoContainer>

                <DemoContainer
                  components={["DatePicker", "DatePicker"]}
                  sx={{
                    gridColumn: "span 2",
                  }}
                >
                  <DatePicker
                    label="End Date"
                    onBlur={handleBlur}
                    onChange={(newDate) => setEndDate(newDate)}
                    value={endDate}
                    name="end"
                    slotProps={{
                      textField: {
                        variant: "filled",
                      },
                    }}
                    sx={{ width: "100%" }}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <FormControl
                component="fieldset"
                variant="filled"
                sx={{ gridColumn: "span 4" }}
              >
                <FormControlLabel
                  sx={{
                    "& .Mui-checked": {
                      color: `${colors.blueAccent[400]} !important`,
                    },
                  }}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChangeCheked}
                      name="AllDay"
                    />
                  }
                  label="Event All Day"
                />
                <Typography variant="caption" color={colors.grey[300]}>
                  When the checkbox is activated, the event will start at 12:00
                  AM on the selected start date and end at 12:00 AM on the
                  selected end date.
                </Typography>
              </FormControl>

              {/* select Init Hour End hour */}

              {!checked ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["TimePicker", "TimePicker"]}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  >
                    <TimePicker
                      label="Start Hour"
                      onBlur={handleBlur}
                      onChange={(newHour) => setStartHour(newHour, false)}
                      value={startHour}
                      name="start"
                      slotProps={{
                        textField: {
                          variant: "filled",
                        },
                      }}
                      sx={{ width: "100%" }}
                    />
                  </DemoContainer>

                  <DemoContainer
                    components={["TimePicker", "TimePicker"]}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  >
                    <TimePicker
                      label="End Hour"
                      onBlur={handleBlur}
                      onChange={(newHour) => setEndHour(newHour)}
                      value={endHour}
                      name="start"
                      slotProps={{
                        textField: {
                          variant: "filled",
                        },
                      }}
                      sx={{ width: "100%" }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              ) : null}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ marginBottom: "20px" }}
              >
                Create New Event
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateEvent;
