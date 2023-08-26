export default function Footer() {
  return (
    <footer className="w-full h-fit px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="w-full h-20 flex justify-center items-center border-t">
        <p className="text-center text-sm text-muted-foreground font-normal">
          &copy;Journey Genie 2023 | Developed & Designed by
          {" "}
          <a 
            target="_blank" 
            href="https://github.com/ShrideepP" 
            className="text-foreground hover:underline underline-offset-2"
          >
            ShrideepP
          </a>
        </p>
      </div>
    </footer>
  );
};
