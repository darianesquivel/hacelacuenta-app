import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

import { Timestamp } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

export interface Event {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  owner: string;
  members: string;
}

interface EventDataFromFirestore {
  name: string;
  description?: string;
  createdAt: Timestamp;
}

const getEventsCollectionRef = () => collection(db, "events");

///////////////////
//  GET EVENTS  //
/////////////////

export async function getEvents() {
  const ref = collection(db, "events");
  const querySnapshot = await getDocs(ref);

  const eventsList: Event[] = querySnapshot.docs.map((doc) => {
    const data = doc.data() as EventDataFromFirestore;

    return {
      id: doc.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt.toDate(),
    } as Event;
  });

  return eventsList;
}

///////////////////////
//  GET EVENT BY ID  //
///////////////////////

export async function getEventById(eventId: string) {
  console.log("getEventById => eventId", eventId);
  const ref = doc(db, "events", eventId);
  const querySnapshot = await getDoc(ref);

  if (!querySnapshot.exists()) {
    throw new Error(`Event with ID ${eventId} not found.`);
  }

  const data = querySnapshot.data();

  return {
    id: querySnapshot.id,
    name: data.name,
    description: data.description,
    createdAt: data.createdAt.toDate(),
  } as Event;
}

/////////////////////
//  CREATE EVENT  //
///////////////////

export async function creeateEvent(data: Event) {
  const newEvent = {
    name: data.name,
    description: data.description,
    createdAt: serverTimestamp(),
    owner: ["darianesquivelf@gmail.com"],
    members: ["usuario1", "usuario2"],
  };

  const docRef = await addDoc(getEventsCollectionRef(), newEvent);
  return docRef.id;
}
