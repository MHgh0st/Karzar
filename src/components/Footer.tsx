import Logo from "./Logo";
export default function Footer() {
  return (
    <>
      <div className="w-full md:max-w-[1240px] mx-auto flex justify-between py-6 px-4 ">
        <div>
          <Logo />
        </div>
        <div>
          <p>تمامی حقوق معنوی محفوظ است.</p>
        </div>
      </div>
    </>
  );
}
