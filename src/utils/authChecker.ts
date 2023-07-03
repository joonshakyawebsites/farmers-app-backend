import { AuthChecker } from "type-graphql";
import Context from "../types/context";

const authChecker: AuthChecker<Context> = ({ context }, roles) => {
  if (!context.user) {
    return false;
  }
  if (roles.length === 0) {
    return true;
  }
  if (roles.includes(context.user.type)) {
    return true;
  }
  return false;
};

export default authChecker;
