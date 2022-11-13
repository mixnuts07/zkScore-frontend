import { useState } from "react";
import LeftSideBar from "../LeftSideBar";
import style from "../../styles/bgimage.module.css";
import issueButton from "../../public/images/issueButton.svg";
import Image from "next/image";
import issueComplete from "../../public/images/IssueComplete.svg";
import issueLoading from "../../public/images/IssueLoading.svg";
import { ethers } from "ethers";
import contractAddr from "../../const/address.json";
import abi from "../../const/abi.json";

const Issue = () => {
  const [address, setAddress] = useState<string>("");
  const [score, setScore] = useState<number>();
  const [isProgress, setProgress] = useState<boolean>(false);
  const [isCompleted, setCompleted] = useState<boolean>(false);

  const handleChangeAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event?.preventDefault();
    setAddress(event.target.value);
  };

  const handleChangeScore = (event: React.ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();
    setScore(Number(event.target.value));
  };

  const issueClick = async () => {
    // TODO　onClickでissueの発行。
    // let scoreBytes = ethers.utils.toUtf8Bytes(score);
    // let hashedScore = ethers.utils.keccak256(scoreBytes);
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts", []);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(
    //   contractAddr.zkscore,
    //   abi.abi,
    //   provider
    // );
    // const contractWithSigner = contract.connect(signer);
    // try {
    //   const tx = await contractWithSigner.mint(address, hashedScore);
    //   console.log(tx);
    //   setCompleted(true);
    // } catch (e) {
    //   alert("You cannot issue this address");
    //   console.log(e);
    // }
    // setProgress(false);
    setProgress(true);
  };
  const Complete = () => {
    return (
      <div>
        <Image
          src={issueComplete}
          onClick={() => setCompleted(false)}
          alt="complete"
        />
      </div>
    );
  };

  return (
    <div className="w-screen bg-home bg-cover">
      {!isProgress ? (
        <div className="text-white h-screen w-screen flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <p className="text-4xl pb-7">Address</p>
            <input
              type={"text"}
              placeholder={"Enter address here"}
              className="rounded-[10px] p-2 text-black w-[400px]"
              value={address}
              onChange={(event) => handleChangeAddress(event)}
            />
            <p className="text-4xl py-7">Score</p>
            <input
              type="text"
              placeholder="Enter score here"
              className="rounded-[10px] p-2  text-black  w-[400px]"
              value={score}
              onChange={(event) => handleChangeScore(event)}
            />
            <span className="pt-[100px]">
              <Image
                src={issueButton}
                alt="button"
                className="rounded-[20px] cursor-pointer pt-11"
                onClick={issueClick}
              />
            </span>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <span onClick={() => setProgress(false)}>
            <Complete />
          </span>
        </div>
      )}
      <LeftSideBar nowPage="issue" />
    </div>
  );
};

export default Issue;
