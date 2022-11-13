import LeftSideBar from "../LeftSideBar";
import style from "../../styles/bgimage.module.css";
import Image from "next/image";
import verButton from "../../public/images/verificationButton.svg";
import YesModal from "../../public/images/verYes.png";
import NoModal from "../../public/images/verNo.png";
import { useState } from "react";
import catImage from "../../public/1106/cat.png";

const Verification = () => {
  const [score, setScore] = useState<number>();
  const [show, setShow] = useState<boolean>(true);
  // setShowで画面の切り返し化してないのでこれで検証を確かめる
  const JudgeScore = () => {
    return (
      <div className="cursor-pointer">
        {typeof score === "number" && score >= 50 ? (
          <Image src={YesModal} alt="yes" onClick={() => setShow(true)} />
        ) : (
          <Image
            src={NoModal}
            alt="no"
            onClick={() => setShow(true)}
            className="w-[400px]"
          />
        )}
      </div>
    );
  };
  return (
    <div>
      <div className="bg-home w-screen bg-cover h-screen text-white flex flex-col justify-center items-center">
        {show ? (
          <div className="pb-32">
            <Image src={catImage} alt="cat" />
            <div className="flex flex-col w-[400px]">
              <p className="pb-4">Address</p>
              <input
                type="text"
                placeholder="Enter address here"
                className="p-2 text-black"
              />
              <p className="py-4">Score</p>
              <input
                type="text"
                placeholder="Enter score here"
                className=" p-2 text-black"
                value={score}
                onChange={(event) => setScore(Number(event.target.value))}
              />
            </div>
            <div className="cursor-pointer  mt-[50px] ml-[30px]">
              <Image
                src={verButton}
                alt="button"
                className="rounded-[20px]"
                onClick={() => setShow(false)}
              />
            </div>
          </div>
        ) : (
          <JudgeScore />
        )}
      </div>
      <LeftSideBar nowPage="verification" />
    </div>
  );
};

export default Verification;
