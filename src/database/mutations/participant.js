import { firestore } from "database/firebase";
import { getTimezone } from "database/getters";

const participantRef = (uid) => firestore.collection("participants").doc(uid);

export const participant = {
  create: (uid) =>
    participantRef(uid).set({
      organization: "",
      background: "",
      timezone: {
        region: getTimezone(),
        autodetect: true,
      },
      location: {
        address: "",
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
      },
      notifications: {
        local: true,
        email: false,
        phone: false,
      },
    }),

  update: (
    uid,
    {
      organization,
      background,
      timezone: { region, autodetect },
      location: {
        address,
        coordinates: { latitude, longitude },
      },
      notifications: { local, email, phone },
    }
  ) =>
    participantRef(uid).update({
      organization,
      background,
      timezone: {
        region,
        autodetect,
      },
      location: {
        address,
        coordinates: { latitude, longitude },
      },
      notifications: {
        local,
        email,
        phone,
      },
    }),

  delete: (uid) => participantRef(uid).delete(),
};
