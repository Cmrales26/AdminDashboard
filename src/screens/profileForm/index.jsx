/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { countries } from "../../data/Countries";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const TeamForm = ({ setSelected }) => {
  const roles = [{ role: "Admin" }, { role: "Manager" }, { role: "Seller" }];
  const [type, setType] = useState("");
  const { state } = useLocation();
  useEffect(() => {
    setSelected("Profile Form");
    if (state) {
      const { provider } = state;
      setType(provider);
      return;
    }
    setType("TEAM");
  }, []);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const initialValues = {
    name: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    country: "",
    role: "",
  };
  const initialValuesProvider = {
    name: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    country: "",
    adress: "",
    zip: "",
    city: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const teamScheme = yup.object({
    name: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    age: yup.number().required("Age is required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    country: yup.string().required("Country is required"),
    role: yup.string().required("Role is required"),
  });

  const ProviderScheme = yup.object({
    name: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    age: yup.number().required("Age is required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    country: yup.string().required("Country is required"),
    adress: yup.string().required("Adress is required"),
    zip: yup.number().min(10000).max(99999).required("Zip Code is required"),
    city: yup.string().required("City is required"),
  });

  return (
    <Box m={"20px"} position={"relative"}>
      <Header
        title={`CREATE ${type}`}
        subtitle={`Create a new ${type} Profile`}
      ></Header>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={type === "TEAM" ? initialValues : initialValuesProvider}
        validationSchema={type === "TEAM" ? teamScheme : ProviderScheme}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
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
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              ></TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
              <Autocomplete
                sx={{ gridColumn: "span 2" }}
                options={countries}
                onBlur={handleBlur}
                name="country"
                onChange={(event, newValue) => {
                  setFieldValue("country", newValue ? newValue.code : "");
                }}
                autoHighlight
                getOptionLabel={(option) => (option ? option.label : "")}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt=""
                    />
                    {option.label} ({option.code})
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    variant="filled"
                    type="text"
                    error={!!touched.country && !!errors.country}
                    helperText={touched.country && errors.country}
                    label="Choose a country"
                    value={values.country}
                    {...params}
                  />
                )}
              />

              {type === "TEAM" ? (
                <FormControl
                  fullWidth
                  variant="filled"
                  error={!!touched.role && !!errors.role}
                  sx={{ gridColumn: "span 2" }}
                >
                  <InputLabel id="role-label">Choose a Role</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    name="Role"
                    value={values.role}
                    onBlur={handleBlur}
                    onChange={(event) =>
                      setFieldValue("Role", event.target.value)
                    }
                    // No need for autoWidth (removed)
                  >
                    {roles.map((role) => (
                      <MenuItem
                        key={role.role}
                        value={role.role}
                        sx={{ width: "100%" }}
                      >
                        {role.role}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.role && errors.role && (
                    <FormHelperText>{errors.role}</FormHelperText>
                  )}
                </FormControl>
              ) : (
                <>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Adress"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.adress}
                    name="adress"
                    error={!!touched.adress && !!errors.adress}
                    helperText={touched.adress && errors.adress}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Zip"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.zip}
                    name="zip"
                    error={!!touched.zip && !!errors.zip}
                    helperText={touched.zip && errors.zip}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    name="city"
                    error={!!touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
                    sx={{ gridColumn: "span 2" }}
                  />
                </>
              )}
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default TeamForm;
