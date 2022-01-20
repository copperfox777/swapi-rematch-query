import SinglePerson from "components/SinglePerson";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function PersonPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <SinglePerson />
    </QueryClientProvider>
  );
}
