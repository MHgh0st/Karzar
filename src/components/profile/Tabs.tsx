"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
type Props = {
  data: {
    id: number;
    title: string;
    icon?: string;
  };
  isActive?: boolean;
  onPress: (id: number) => void;
};

export default function Tabs(props: Props) {
  return (
    <>
      <Button
        fullWidth
        color="primary"
        variant={props.isActive ? "solid" : "flat"}
        className="text-center sm:text-right justify-center sm:justify-start"
        size="sm"
        startContent={<Icon icon={props.data.icon || ""} className="text-lg sm:text-xl" />}
        endContent={
          <Icon icon="solar:alt-arrow-left-linear" className="text-lg sm:text-xl mr-0 sm:mr-36" />
        }
        onPress={() => {
          props.onPress(props.data.id);
        }}
      >
        <span className="hidden sm:inline">{props.data.title}</span>
        <span className="sm:hidden">{props.data.title.split(' ')[0]}</span>
      </Button>
    </>
  );
}
