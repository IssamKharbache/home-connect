import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";
const useAuthCheck = () => {
  const { isAuthenticated } = useAuth0();
  const validateLogin = () => {
    if (!isAuthenticated) {
      toast.error("Please login to continue");
      return false;
    } else {
      return true;
    }
  };
  return { validateLogin };
};

export default useAuthCheck;
