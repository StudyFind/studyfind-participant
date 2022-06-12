import { RadioInput } from "components";
import { FaThLarge, FaMapMarkerAlt } from "react-icons/fa";

function ViewMode({ view, setView }) {
  return (
    <RadioInput
      name="viewMode"
      value={view}
      options={[
        { label: <FaThLarge />, value: "grid" },
        { label: <FaMapMarkerAlt />, value: "map" },
      ]}
      onChange={(_, v) => setView(v)}
    />
  );
}

export default ViewMode;
