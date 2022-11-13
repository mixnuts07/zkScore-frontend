import LeftSideBar from "../LeftSideBar";
import Image from "next/image";
import style from "../../styles/bgimage.module.css";

// TODO コンポーネントを3つ作成して表示を整える（MyScore,ScoreValue,IdentityScore）
const Own = () => {
  // TODO scoreを受け取る
  // TODO TotalScoreを受け取る
  // TODO ReceivedScoreを受け取る
  // TODO IdentityStateを受け取る
  return (
    <div className="h-screen w-screen bg-home bg-cover">
      <div className="text-white h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex flex-row ">
          <div className="flex flex-col text-4xl items-center">
            <h5 className="">My Score</h5>
            <h5 className="">45</h5>
          </div>
          <div className="flex flex-col text-4xl pl-40">
            <div className="flex flex-row">
              <h5 className="">Total Score:</h5>
              <h5 className="">450</h5>
            </div>
            <div className="flex flex-row text-4xl">
              <h5 className="">Received Score:</h5>
              <h5 className="">10</h5>
            </div>
          </div>
        </div>
        <div className="text-4xl flex flex-col items-center">
          <p className="pt-[140px]">Identity State</p>
          <p className="pt-[60px]">0x93839a0a9a9</p>
          <p className="pt-[60px]">0x48ks049wntg</p>
          <p className="pt-[60px]">0x93839a0a9a9</p>
        </div>
      </div>
      <LeftSideBar nowPage="own" />
    </div>
  );
};

export default Own;
