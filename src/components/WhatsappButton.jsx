import { SiWhatsapp } from "react-icons/si";

function WhatsappButton() {
  return (
    <div>
      <div className="w-14 h-14 rounded-full bg-green-500 shadow-md shadow-green-600 flex justify-center items-center">
        <SiWhatsapp className="text-3xl text-white" />
      </div>
    </div>
  );
}

export default WhatsappButton;
