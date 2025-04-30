import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type QueryProviderProps = {
  children: React.ReactNode;
};

// Create a client
const queryClient = new QueryClient();

const QueryProvider: React.FC<QueryProviderProps> = ({
  children,
}: QueryProviderProps) => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
