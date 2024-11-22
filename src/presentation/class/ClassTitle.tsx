
interface ClassTitleProps {
  background: string;
  title: string;
  colorText: string
}
export default function ClassTitle({background, title, colorText}: ClassTitleProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-4 bg-black-principal px-4 py-3 mt-6">
        <div className={`h-[6px] flex-1 ${background}`}></div>
        <h2 className={`text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] font-deutschlander ${colorText}`}>
          {title}
        </h2>
        <div className={`h-[6px] flex-1 ${background}`}></div>
      </div>
    </>
  );
}
