import QueryProvider from "./query-provider";
import { ToastProvider } from "./toast-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryProvider>
      <ToastProvider />
      {children}
    </QueryProvider>
  );
};

export default Providers;
