import { firestore } from "database/firebase";
import { getEmail, getName, getNow, getUID } from "database/getters";

const assertCreateFields = ({
  type,
  title,
  description,
  sex,
  minAge,
  maxAge,
  acceptsHealthyVolunteers,
  questions,
  locations,
  resources,
  conditions,
}) => ({
  type,
  title,
  description,
  sex,
  minAge,
  maxAge,
  acceptsHealthyVolunteers,
  questions,
  locations,
  resources,
  conditions,
});

const assertUpdateFields = ({
  title,
  description,
  sex,
  minAge,
  maxAge,
  acceptsHealthyVolunteers,
  type,
  questions,
  locations,
  resources,
  conditions,
  activated,
}) => ({
  title,
  description,
  sex,
  minAge,
  maxAge,
  acceptsHealthyVolunteers,
  type,
  questions,
  locations,
  resources,
  conditions,
  activated,
});

const createStudy = (data) => {
  const assertedFields = assertCreateFields(data);

  const now = getNow();

  const id = getUID();
  const name = getName();
  const email = getEmail();

  const researcher = { id, name, email };

  return firestore.collection("studies").add({
    ...assertedFields,
    createdAt: now,
    updatedAt: now,
    activated: false,
    researcher,
  });
};

const updateStudy = (id, data) => {
  const assertedFields = assertUpdateFields(data);
  return firestore.collection("studies").doc(id).update(assertedFields);
};

const deleteStudy = (id) => {
  return firestore.collection("studies").doc(id).delete();
};

export const study = {
  create: createStudy,
  update: updateStudy,
  delete: deleteStudy,
};
