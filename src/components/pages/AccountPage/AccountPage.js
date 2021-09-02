import { useState, useEffect, useContext } from "react";
import { changePassword, deleteAccount, signout } from "database/auth";
import { researcher, participant } from "database/mutations";
import { getSide } from "database/getters";

import { UserContext } from "context";

import { FaUser, FaMapMarkedAlt, FaBell, FaShieldAlt, FaLocationArrow } from "react-icons/fa";

import ProfileResearcher from "./Profile/ProfileResearcher";
import ProfileParticipant from "./Profile/ProfileParticipant";
import Notifications from "./Notifications/Notifications";
import Timezone from "./Timezone/Timezone";
import Location from ".//Location/Location";
import Security from "./Security/Security";

import AccountTabs from "./AccountTabs";

function AccountPage() {
  const side = getSide();
  const user = useContext(UserContext);

  const [mutator, Profile] = {
    researcher: [researcher, ProfileResearcher],
    participant: [participant, ProfileParticipant],
  }[side];

  const [values, setValues] = useState(user);

  const haveInputsChanged = JSON.stringify(values) !== JSON.stringify(user);

  useEffect(() => {
    setValues(user);
  }, [user]);

  const handleCancel = () => {
    setValues(user);
  };

  const handleUpdate = () => {
    return mutator.update(user.id, values);
  };

  const handleSetProfileAttribute = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSetSubAttribute = (parent, name, value) => {
    setValues((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [name]: value,
      },
    }));
  };

  const handleSetNotificationsAttribute = (name, value) => {
    handleSetSubAttribute("notifications", name, value);
  };

  const handleSetTimezoneAttribute = (name, value) => {
    handleSetSubAttribute("timezone", name, value);
  };

  const handleSetLocationAttribute = (name, value) => {
    handleSetSubAttribute("location", name, value);
  };

  const updateProps = {
    values: values,
    showButtons: haveInputsChanged,
    handleCancel: handleCancel,
    handleUpdate: handleUpdate,
  };

  const PROFILE = {
    name: "Profile",
    link: "/account/profile",
    icon: <FaUser />,
    content: <Profile {...updateProps} handleSetProfileAttribute={handleSetProfileAttribute} />,
  };

  const NOTIFICATIONS = {
    name: "Notifications",
    link: "/account/notifications",
    icon: <FaBell />,
    content: (
      <Notifications
        {...updateProps}
        handleSetNotificationsAttribute={handleSetNotificationsAttribute}
      />
    ),
  };

  const TIMEZONE = {
    name: "Timezone",
    link: "/account/timezone",
    icon: <FaMapMarkedAlt />,
    content: <Timezone {...updateProps} handleSetTimezoneAttribute={handleSetTimezoneAttribute} />,
  };

  const LOCATION = {
    name: "Location",
    link: "/account/location",
    icon: <FaLocationArrow />,
    content: <Location {...updateProps} handleSetLocationAttribute={handleSetLocationAttribute} />,
  };

  const SECURITY = {
    name: "Security",
    link: "/account/security",
    icon: <FaShieldAlt />,
    content: (
      <Security
        showButtons={false}
        handleChangePassword={changePassword}
        handleDeleteAccount={deleteAccount}
      />
    ),
  };

  const tabs =
    side === "researcher"
      ? [PROFILE, NOTIFICATIONS, TIMEZONE, SECURITY]
      : [PROFILE, NOTIFICATIONS, TIMEZONE, LOCATION, SECURITY];

  return <AccountTabs tabs={tabs} handleSignout={signout} />;
}

export default AccountPage;
