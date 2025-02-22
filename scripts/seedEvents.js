const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const events = [
  {
    name: "GDSC-Meet and Greet",
    info: "An introduction to GDSC, team members, opportunities, and more.",
    link: "https://gdsc.community.dev/events/details/developer-student-clubs-the-university-of-louisiana-monroe-presents-gdsc-meet-and-greet/",
    endDate: new Date(2023, 8, 15).toISOString(), // September 15, 2023
    createdAt: new Date().toISOString()
  },
  {
    name: "GDSC-Getting Started With GIT",
    info: "A basic introduction to git, github, and version control; All about pushing, pulling , cloning and branching.",
    link: "https://gdsc.community.dev/events/details/developer-student-clubs-the-university-of-louisiana-monroe-presents-getting-started-with-git/",
    endDate: new Date(2023, 9, 1).toISOString(), // October 1, 2023
    createdAt: new Date().toISOString()
  },
  {
    name: "Hawkthon",
    info: "An exciting hackathon event focused on providing innovative tech solutions for local businesses.",
    link: "https://gdsc.community.dev/events/",
    endDate: new Date(2023, 10, 15).toISOString(), // November 15, 2023
    createdAt: new Date().toISOString()
  },
  {
    name: "TechXPo",
    info: "A tech exhibition event showcasing the latest tech trends, projects, and innovations.",
    link: "https://gdsc.community.dev/events/",
    endDate: new Date(2023, 11, 1).toISOString(), // December 1, 2023
    createdAt: new Date().toISOString()
  }
];

async function seedEvents() {
  try {
    for (const event of events) {
      await addDoc(collection(db, "events"), event);
      console.log(`Added event: ${event.name}`);
    }
    console.log('All events have been added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error adding events:', error);
    process.exit(1);
  }
}

seedEvents(); 