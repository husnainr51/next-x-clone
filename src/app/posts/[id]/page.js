import React from "react";
import { app } from "../../../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import Post from "../../../components/Post.jsx";
import Comments from "../../../components/Comments.jsx";

export default async function PostPage({ params }) {
  const db = getFirestore(app);
  let data = {};
  const querySnapshot = await getDoc(doc(db, "posts", params.id));
  data = { ...querySnapshot.data(), id: querySnapshot.id };
  return (
    <div className="max-w-xl mx-auto border-r border-l min-h-screen">
      <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <Link href={"/"}>
          <HiArrowLeft className="h-5 w-5" />
        </Link>
        <h2 className="text-lg">Back</h2>
      </div>
      <Post post={data} id={data.id} />
      <Comments id={params.id} />
    </div>
  );
}
