export function SubHeading({
  children,
  pClass = "text-white ",
  divClass = "bg-[#F5F5F5]/40 border-white/0",
}: {
  children: string;
  divClass?: string;
  pClass?: string;
}) {
  return (
    <div
      className={`px-6 py-4 max-[360px]:text-[14px]  md:text-[16px] tracking-[0.8px] font-bold  max-[360px]:leading-4 max-[500px]:leading-4 lg:leading-4 ${divClass}   border uppercase rounded-3xl backdrop-blur-[20px] w-max`}
    >
      <p className={` font-bold! ${pClass} leading-[100%]!`}>{children}</p>
    </div>
  );
}
