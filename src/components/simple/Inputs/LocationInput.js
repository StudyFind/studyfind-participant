import { useColor } from "hooks";
import { InputWrapper } from "./helpers";

import GooglePlacesAutocomplete, { geocodeByAddress } from "react-google-places-autocomplete";

export const LocationInput = ({ name, label, error, placeholder, onChange }) => {
  const gray100 = "#EDF2F7";
  const gray200 = "#E2E8F0";
  const gray300 = "#CBD5E0";
  const gray400 = "#A0AEC0";
  const gray500 = "#718096";
  const gray600 = "#4A5568";
  const gray700 = "#2D3748";
  const gray800 = "#1A202C";
  const gray900 = "#171923";

  const red100 = "#FED7D7";
  const red300 = "#FC8181";
  const red400 = "#F56565";
  const red500 = "#E53E3E";
  const red800 = "#822727";

  const errorPlaceholderColor = useColor(red400, red400);
  const errorBackground = useColor(red100, red800);
  const errorBorderColor = useColor(red500, red300);

  const textColor = useColor(gray700, "white");
  const borderColor = useColor(gray200, gray700);
  const backgroundColor = useColor("white", gray900);
  const hoverBackgroundColor = useColor(gray100, gray800);
  const hoverBorderColor = useColor(gray300, gray600);
  const placeholderColor = useColor(gray400, gray500);

  const handleChange = async ({ label }) => {
    const res = await geocodeByAddress(label);

    const lat = res[0].geometry.location.lat();
    const lng = res[0].geometry.location.lng();

    onChange(name, {
      address: label,
      coordinates: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  return (
    <InputWrapper label={label} error={error}>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyDqUCcuqlD9XBpT1wam4I2IhheVByn0AOg"
        debounce={500}
        selectProps={{
          onChange: handleChange,
          placeholder: placeholder || "",
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: error ? errorBackground : backgroundColor,
              borderColor: error ? errorBorderColor : borderColor,
              borderWidth: error ? "2px" : "1px",
              height: "40px",
              ":hover": {
                backgroundColor: error ? errorBackground : backgroundColor,
                borderColor: error ? errorBorderColor : hoverBorderColor,
                borderWidth: error ? "2px" : "1px",
              },
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              color: placeholderColor,
            }),
            placeholder: () => ({
              color: error ? errorPlaceholderColor : placeholderColor,
            }),
            loadingIndicator: (provided) => ({
              ...provided,
              color: placeholderColor,
            }),
            indicatorsContainer: (provided) => ({
              ...provided,
              color: placeholderColor,
            }),
            menu: (provided) => ({
              ...provided,
              background: backgroundColor,
              borderWidth: "1px",
              borderColor: borderColor,
              marginTop: "0px",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }),
            group: (provided) => ({ ...provided, color: "blue", backgroundColor: "#171923" }),
            container: (provided) => ({ ...provided, color: "blue", backgroundColor: "#171923" }),
            input: () => ({
              color: textColor,
              backgroundColor: error ? errorBackground : gray900,
              ":focus": {
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              },
            }),
            option: () => ({
              color: placeholderColor,
              ":hover": {
                background: hoverBackgroundColor,
                cursor: "pointer",
              },
              padding: "5px 10px",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: error ? errorPlaceholderColor : placeholderColor,
            }),
          },
        }}
      />
    </InputWrapper>
  );
};
