"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRecycleStore } from "@/store/RecycleStore";

interface Params {
  params: {
    title: string;
  };
}

interface DetailProps {
  _id: string;
  title: string;
  type: string;
  imgUrl: string;
  context: string;
  subcontext: string;
}

interface MainData {
  title: string;
  imgUrl: string;
}

export default function RecyclePages({ params }: Params) {
  const [main, setMain] = useState<MainData | null>(null);
  const [detail, setDetail] = useState<DetailProps[]>([]);

  const { setTitle, setType, setImgUrl, setContext, setSubContext } =
    useRecycleStore();

  const onClick = (item: DetailProps) => {
    setTitle(item.title),
      setType(item.type),
      setImgUrl(item.imgUrl),
      setContext(item.context),
      setSubContext(item.subcontext);
  };

  const getMainRecycle = async () => {
    try {
      const res = await axios.get(
        `/api/recycle?title=${encodeURIComponent(params.title)}`
      );
      if (res.data.recycle) {
        setMain(res.data.recycle);
      } else {
        console.error("Main recycle data not found");
      }
    } catch (error) {
      console.error("Error fetching main data:", error);
    }
  };

  const getDetailRecycle = async () => {
    try {
      const res = await axios.get(
        `/api/recycledetail?title=${encodeURIComponent(params.title)}`
      );
      if (res.data.recycledetail) {
        setDetail(res.data.recycledetail);
      } else {
        console.error("Recycle detail data not found");
        setDetail([]);
      }
    } catch (error) {
      console.error("Error fetching detail data:", error);
      setDetail([]);
    }
  };

  useEffect(() => {
    getMainRecycle();
    getDetailRecycle();
  }, [params.title]);

  if (!main) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-50 min-h-screen w-full p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-800">{main.title}</h1>
          <Image
            className="object-cover rounded-lg"
            src={main.imgUrl}
            alt={main.title}
            width={160}
            height={160}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {detail.map((item) => (
            <Link
              onClick={() => onClick(item)}
              key={item._id}
              href={`/recycle/${params.title}/${item.title}`}
            >
              <div className="border rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 hover:text-green-600">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      재활용 분류: {item.type}
                    </p>
                  </div>
                  <Image
                    className="object-cover rounded"
                    src={item.imgUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
