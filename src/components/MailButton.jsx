import { TbMailStar } from "react-icons/tb";

function MailButton() {
  return (
    <div>
      <div className="w-14 h-14 rounded-full bg-blue-500 shadow-md shadow-blue-600 flex justify-center items-center">
        <TbMailStar className="text-3xl text-white" />
      </div>
    </div>
  );
}

export default MailButton;
