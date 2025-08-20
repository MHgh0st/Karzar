"use client";
import ProfilePage from "@/views/ProfilePage";
import { EnumTabs } from "@/enums/profile/EnumTabs";

const tabsData = [
  {
    id: EnumTabs.AllCampaigns,
    title: "کارزار های من",
    icon: "solar:volume-loud-bold-duotone",
  },
  {
    id: EnumTabs.MySignatures,
    title: "امضا های من",
    icon: "solar:pen-bold-duotone",
  },
];

export default function Profile() {
  return <ProfilePage tabsData={tabsData} />;
}
