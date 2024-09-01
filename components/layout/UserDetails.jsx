import TextButton from "../common/TextButton";
import Logo from "./Logo";

function UserDetails() {
  return (
    <section className="w-full flex justify-center items-center mt-4 mb-12">
      <div className="w-[488px] flex flex-col justify-center items-center mx-auto">
        <div className="w-[150px] h-[150px] bg-slate-300 rounded-full flex items-center justify-center my-2">
          <span className="font-semibold text-5xl">G</span>
        </div>
        <h2 className="text font-semibold text-4xl my-2">Gio Mungcal</h2>
        <div className="flex justify-center h-[16px] my-1">
          <Logo isRed={false} isClickable={false} />
          <p className="text-sm text-slate-700">giomungcal</p>
        </div>
        <div className="flex justify-evenly my-2 space-x-1">
          <TextButton title={"Share"} bgColor={"bg-slate-200"} />
          <TextButton title={"Edit Profile"} bgColor={"bg-slate-200"} />
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
