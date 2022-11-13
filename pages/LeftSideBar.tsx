import Link from "next/link";
import Image from "next/image";
import home from "../public/sideButton/home.svg";
import homeActive from "../public/sideButton/homeActive.svg";
import own from "../public/sideButton/own.svg";
import ownActive from "../public/sideButton/ownActive.svg";
import issue from "../public/sideButton/issue.svg";
import issueActive from "../public/sideButton/issueActive.svg";
import verification from "../public/sideButton/verification.svg";
import verificationActive from "../public/sideButton/verificationActive.svg";
import Logo from "../public/1106/logo.png";

const LeftSideBar = ({ nowPage }) => {
  return (
    //TODO スタイル整形
    <div className="bg-bg_col z-0 w-[300px] absolute top-0 h-full">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-start pt-[200px] ">
          <Image src={Logo} alt="logo" />
          <div className="pl-3 w-50 rounded-lg cursor-pointer pt-10">
            <Link href="/Top">
              {nowPage === "home" ? (
                <Image src={homeActive} alt="home" />
              ) : (
                <Image src={home} alt="home" />
              )}
            </Link>
          </div>
          <div className="pl-3 pt-3 w-50 rounded-lg cursor-pointer">
            <Link href="/Own">
              {nowPage === "own" ? (
                <Image src={ownActive} alt="own" />
              ) : (
                <Image src={own} alt="own" />
              )}
            </Link>
          </div>
          <div className="pl-3 pt-3 w-50 rounded-lg cursor-pointer">
            <Link href="/Issue">
              {nowPage === "issue" ? (
                <Image src={issueActive} alt="issue" />
              ) : (
                <Image src={issue} alt="issue" />
              )}
            </Link>
          </div>
          <div className="pl-3 pt-3 w-50 rounded-lg cursor-pointer">
            <Link href="/Verification">
              {nowPage === "verification" ? (
                <Image src={verificationActive} alt="verification" />
              ) : (
                <Image src={verification} alt="verification" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
