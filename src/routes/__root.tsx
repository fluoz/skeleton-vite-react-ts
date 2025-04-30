import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import Providers from "@/components/providers";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Providers>
        <Outlet />
      </Providers>
    </>
  );
}
