import { useUserData } from "@/hooks/custom-hooks/use-user-data";
import { UserRole } from "@/types/user.type";

type WithRoleProps = {
  roles?: UserRole[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
};
const WithRole = ({ children, fallback = null, roles }: WithRoleProps) => {
  const userData = useUserData();

  const hasRole = roles?.some((r) => r === userData?.role);
  return hasRole ? <>{children}</> : <>{fallback}</>;
};

export default WithRole;
