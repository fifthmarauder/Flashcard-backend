interface User {
  name?: string;
  email: string;
  password: string;
}
export const registerUser = async ({ name, email, password }: User) => {
  if (!name || !email || !password) {
    throw new Error("Missing required fields");
  }
  const existing = await UserModel;
};
