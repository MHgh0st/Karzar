"use client";
import CreateCampaignForm, {
  CreateCampaignFormInputs,
} from "@/views/campaigns/CreateCampaignForm";

export default function Page() {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (data: CreateCampaignFormInputs) => {
    console.log("form submitted in page.tsx: ", data);
    await sleep(2000);
  };

  return <CreateCampaignForm onSubmit={handleSubmit} />;
}
