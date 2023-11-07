export const Home = ({ setIsAuth }: propsType) => (
  <section className="home">
    <button
      onClick={() => {
        setIsAuth(true);
      }}
    >
      Log In
    </button>
  </section>
);

type propsType = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};
