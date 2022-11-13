import { useEffect, useState } from "react";
import LeftSideBar from "../LeftSideBar";
import bgTopImage from "../public/top/bg-top.svg";
import style from "../../styles/bgimage.module.css";

const Top = () => {
  const [account, setAccount] = useState("");
  useEffect(() => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setAccount(accounts[0]);
      });
    // TODO scoreの値をDBから取得 setScore(account.score)
  }, []);
  const [score, setScore] = useState(45);
  return (
    // TODO スコアに応じて円状にパーセンテージバーを表示（Max100）
    <div>
      <div className="bg-home bg-cover">
        <div className="text-white h-screen w-screen flex flex-col justify-center items-center text-6xl ">
          <p className="">My Score</p>
          <p className="pt-10">{score}</p>
        </div>
      </div>
      <LeftSideBar nowPage="home" />
    </div>
  );
};

export default Top;
