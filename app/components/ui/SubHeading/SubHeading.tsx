export function SubHeading({ children }: { children: string }) {
  return (
    <div className="py-4 px-6 bg-[#F5F5F5]/40 border-white/40  border uppercase rounded-3xl backdrop-blur-[20px] w-max">
      <p className="body-large font-bold! text-white leading-[100%]!">
        {children}
      </p>
    </div>
  );
}
