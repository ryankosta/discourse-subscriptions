import User from "discourse/models/user";

export default {
  shouldRender(args) {
    const currentUser = User.current();
    return currentUser;
  }
};
