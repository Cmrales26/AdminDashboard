import { Formik } from "formik";
import * as yup from "yup";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  useTheme,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import dayjs from "dayjs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { tokens } from "../../../theme";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ModalAlerts from "../../../components/ModalAlerts";

/* eslint-disable react/prop-types */
const EditEvent = ({
  propTitle,
  propStatus,
  start,
  end,
  propDescription,
  id,
  setIsEditing,
}) => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const colors = tokens(theme.palette.mode);
  const [status, setStatus] = useState(propStatus);
  const [startDate, setStartDate] = useState(dayjs(start));
  const [endDate, setendDate] = useState(dayjs(end));
  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const EventData = JSON.parse(localStorage.getItem("EventData")) || [];
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const initialValues = {
    title: propTitle,
    description: propDescription,
  };

  const EventSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  const handleFormSubmit = (values) => {
    setOpen(true);
    setInputValues(values);
  };

  const UpdateForm = () => {
    const eventIndex = EventData.findIndex((event) => event.id === id);
    if (eventIndex !== -1) {
      const updatedEvent = {
        id,
        title: inputValues.title,
        description: inputValues.description,
        status,
        start: dayjs(startDate).format("YYYY-MM-DD HH:mm:ss"),
        end: dayjs(endDate).format("YYYY-MM-DD HH:mm:ss"),
        allDay: dayjs(endDate).format("HH:mm:ss") !== "00:00:00" ? false : true,
      };
      const updatedEventData = [...EventData];
      updatedEventData[eventIndex] = updatedEvent;
      localStorage.setItem("EventData", JSON.stringify(updatedEventData));
      window.location.href = "/calendar";
    }
  };

  return (
    <Box
      flex="1 1 100%"
      ml="15px"
      sx={{
        "& .fc-list-day-cushion": {
          backgroundColor: colors.primary[400],
        },
        "& .fc-scrollgrid": {
          backgroundColor: colors.primary[400],
        },
        "& th": {
          backgroundColor: colors.blueAccent[600],
        },
        "& .fc-list-event:hover td": {
          backgroundColor: `${colors.blueAccent[600]} !important `,
        },
      }}
    >
      <Box
        backgroundColor={colors.primary[400]}
        p={"2rem"}
        borderRadius={"5px"}
      >
        <Box className="" display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <IconButton
              type="button"
              sx={{ p: 1 }}
              title="Go back to Calendar"
              onClick={() => setIsEditing(false)}
            >
              <ArrowBackIcon />
            </IconButton>

            <Typography variant="h3" color={colors.blueAccent[400]}>
              Edit Event
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
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
          </Box>
        </Box>
        <Box p={"1rem"}>
          <Typography variant="p" color={colors.blueAccent[400]}>
            Event
          </Typography>
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
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
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

                  {/* DATES BELOW */}

                  {/* Date */}
                  <Box mt={".5rem"} display={"flex"} alignItems={"center"}>
                    <IconButton
                      style={{
                        color: `${colors.grey[300]}`,
                        padding: "0",
                        marginRight: "10px",
                      }}
                    />
                    <AccessTimeIcon
                      style={{ fontSize: 20 }}
                      sx={{ mr: "1rem" }}
                    />
                    <Box display={"flex"} alignItems={"Center"} gap={"20px"}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DateTimePicker", "DateTimePicker"]}
                          sx={{
                            gridColumn: "span 2",
                          }}
                        >
                          <DateTimePicker
                            label="Start Date"
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                            slotProps={{
                              textField: {
                                variant: "filled",
                              },
                            }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>

                      {"-"}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DateTimePicker", "DateTimePicker"]}
                          sx={{
                            gridColumn: "span 2",
                          }}
                        >
                          <DateTimePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => setendDate(newValue)}
                            slotProps={{
                              textField: {
                                variant: "filled",
                              },
                            }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Box>
                  </Box>

                  {/* DESCRIPTION */}
                  <Box pt={"10px"} display={"flex"} flexDirection={"column"}>
                    <Typography variant="p" color={colors.blueAccent[400]}>
                      Event Description
                    </Typography>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Event Description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      value={values.description}
                      name="description"
                      error={!!touched.description && !!errors.description}
                      helperText={touched.description && errors.description}
                      sx={{ gridColumn: "span 4" }}
                    />
                  </Box>

                  <Box
                    mt={"2rem"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="p" color={colors.grey[300]}>
                      Event id: {id}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="primary" type="submit">
                        Edit Event
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
      <ModalAlerts
        open={open}
        setOpen={setOpen}
        title={"Delete Event"}
        text={`Are you sure you want to update this event? ${propTitle}`}
        confirmAction={"Update Event"}
        denyAction={"Cancel"}
        onConfirm={UpdateForm}
      />
    </Box>
  );
};

export default EditEvent;
