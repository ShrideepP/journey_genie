interface ChildrenProps {
  children: JSX.Element;
};

interface User {
  user?: {
    name?: string | null | undefined;
    email?: string;
  };
  token?: string;
};

interface Destination {
  _id: string;
  name: string;
  description: string;
  image: {
    _id: string;
    URL: string;
  }
  temperature: string;
  flightDuration: string;
  journeyType: string;
};
