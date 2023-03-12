interface IProps {
  children: React.ReactNode;
}
const Container: React.FC<IProps> = ({ children }) => {
  return (
    <main className="min-h-[calc(100vh-130px)]  py-[20px] sTablet:min-h-[calc(100vh-145px)] sTablet:py-[40px]">
      <section className="my-0 mx-auto min-w-[320px] px-[20px] sTablet:w-[768px] sLaptop:w-[1280px] lessTablet:max-w-[480px]">
        {children}
      </section>
    </main>
  );
};

export default Container;
