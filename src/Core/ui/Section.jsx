/* eslint-disable react/prop-types */
function Section({ title, children }) {
  return (
    <section className="full-shadow container mx-auto h-full rounded-xl bg-white">
      <header className="border-b bg-white px-4 py-3 text-xl font-[500]">
        {title}
      </header>
      <div className="m-3">{children}</div>
    </section>
  );
}

export default Section;
