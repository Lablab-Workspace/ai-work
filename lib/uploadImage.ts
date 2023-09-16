import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if(!file) return;

  const fileUploaded = await storage.createFile(
    "6501f69cd8c3031e8d20",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;