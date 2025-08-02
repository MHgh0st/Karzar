import CreateCampaignForm from "@/views/CreateCampaignForm";

export default function Page() {
  return (
    <div className="max-w-[1280px] mx-auto mt-8 px-4 md:px-0">
      <p className="font-bold text-3xl">ساخت کارزار جدید:</p>
      <CreateCampaignForm classname="mt-8" />
    </div>
  );
}
