import { Shell } from "@/components/shells/shell";

export default  function IndexPage() {
    return (
        <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
          <a
            href="https://github.com/steven-tey/novel"
            target="_blank"
            className="absolute bottom-5 left-5 z-10 max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
          >
          </a>
          <table className="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300 ...">State</th>
      <th className="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">Indiana</td>
      <td className="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">Ohio</td>
      <td className="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">Michigan</td>
      <td className="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
        </div>
      );
    }