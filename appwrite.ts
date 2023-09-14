import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// // Register User
// account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
//   (response) => {
//     console.log(response);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
// // Subscribe to files channel
// client.subscribe("files", (response) => {
//   if (response.events.includes("buckets.*.files.*.create")) {
//     // Log when a new file is uploaded
//     console.log(response.payload);
//   }
// });

export { client, account, ID, databases, storage } ;

