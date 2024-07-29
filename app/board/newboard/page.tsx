"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface ItemProps {
  id: number;
  title: string;
  body: string;
}

const URL = "http://localhost:3001";

export default function Newboard() {
  const [board, setBoard] = useState<ItemProps[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newBody, setNewBody] = useState<string>("");

  const today = new Date();

  const getBoardList = async () => {
    try {
      const res = await axios.get<ItemProps[]>(`${URL}/board`);
      setBoard(res.data);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    getBoardList();
  }, []);

  const handlePost = async () => {
    try {
      const newId = board.length + 1;
      await axios.post(`${URL}/board`, {
        id: newId,
        title: newTitle,
        body: newBody,
        data: `${today.getFullYear()}년 ${
          today.getMonth() + 1
        }월 ${today.getDate()}일`,
        view: "0",
      });

      alert("게시글이 성공적으로 추가되었습니다.");
      setNewTitle("");
      setNewBody("");
    } catch (error) {
      console.error("데이터 Post 실패:", error);
      alert("게시판 추가 실패 (Post)");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mx-auto">
      <div className="bg-emerald-200 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-center bg-green-300 rounded-md my-4 py-2 text-xl font-bold">
          새 게시글 작성
        </h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            className="pl-4 py-2 rounded-md text-lg"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder="내용을 입력해주세요."
            className="pl-4 py-2 rounded-md text-lg h-48 resize-none"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
        </form>
        <div className="flex justify-end mt-6">
          <button
            onClick={handlePost}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
}