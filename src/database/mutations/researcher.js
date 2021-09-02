import { firestore } from "database/firebase";
import { getTimezone } from "database/getters";

const researcherRef = (uid) => firestore.collection("researchers").doc(uid);

export const researcher = {
  create: (uid) =>
    researcherRef(uid).set({
      organization: "",
      background: "",
      timezone: {
        region: getTimezone(),
        autodetect: true,
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
      notifications: { local, email, phone },
    }
  ) =>
    researcherRef(uid).update({
      organization,
      background,
      timezone: {
        region,
        autodetect,
      },
      notifications: {
        local,
        email,
        phone,
      },
    }),

  delete: (uid) => researcherRef(uid).delete(),
};
