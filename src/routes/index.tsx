import { createFileRoute } from "@tanstack/react-router";
import { generateHead } from "@/lib/utils/helper";
import HomePage from "@/features/home";

export const Route = createFileRoute("/")({
  head: () =>
    generateHead({
      title: "Home",
    }),
  component: HomePage,
});
