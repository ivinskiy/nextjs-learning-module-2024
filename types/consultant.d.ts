export type Consultant = {
  netlightId: string;
  azureUserId: string;
  slackUserId: string | null;
  name: {
    firstName: string;
    lastName: string;
    fullName: string;
  };
  photos: {
    small: string;
    medium: string;
    large: string;
  } | null;
  email: {
    long: string;
    short: string;
  };
  phoneNumber: string | null;
  role: string;
  office: string;
  mentor: {
    netlightId: string;
    name: {
      firstName: string;
      lastName: string;
      fullName: string;
    };
    photos: {
      small: string;
      medium: string;
      large: string;
    };
  } | null;
  level: string;
};
