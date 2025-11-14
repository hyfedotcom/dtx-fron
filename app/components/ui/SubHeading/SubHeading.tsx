export function SubHeading({
  children,
  pClass = "text-white body-large",
  divClass = "bg-[#F5F5F5]/40 border-white/40",
}: {
  children: string;
  divClass?: string;
  pClass?: string;
}) {
  return (
    <div
      className={`py-4 px-6 ${divClass}   border uppercase rounded-3xl backdrop-blur-[20px] w-max`}
    >
      <p className={` font-bold! ${pClass} leading-[100%]!`}>{children}</p>
    </div>
  );
}
