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

interface ChildrenProps {
  children: JSX.Element;
};
