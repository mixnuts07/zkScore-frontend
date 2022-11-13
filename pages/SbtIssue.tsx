import Image from "next/image";
import Link from "next/link";
import issueImage from "../public/images/issueSBT.svg";
import dialog from "../public/images/daialog.svg";
import { useState } from "react";
import styles from "../styles/bgimage.module.css";

const SbtIssue = ({ account }) => {
  const [progress, setProgress] = useState(false);
  const issueSbt = () => {
    // TODO:コントラクトにSBT発行の処理。
    // TODO:完了後にsetProgress[true]
    // TODO:上の処理が終わったら下のsetTimeOutの処理削除

    setTimeout(() => setProgress(true), 1000);
  };
  return (
    <div className="bg-default_image h-screen w-screen  bg-cover">
      <div className="h-screen w-screen flex justify-center items-center">
        {!progress ? (
          <Image
            src={issueImage}
            alt="issue"
            width={670}
            height={670}
            onClick={issueSbt}
            className="cursor-pointer"
          />
        ) : (
          <Link href="./Top">
            <Image
              src={dialog}
              alt="dialog"
              width={670}
              height={670}
              className="cursor-pointer"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SbtIssue;
