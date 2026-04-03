export default function ProjectReportPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-10 md:px-12">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="inline-block mb-6 text-sm text-zinc-600 underline"
        >
          ← Back to Portfolio
        </a>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Bachelor’s Final Year Project Report
        </h1>

        <p className="mt-4 text-zinc-600 leading-7">
          Renewable Energy Consumption Forecasting using Prophet and SARIMAX
        </p>

        <div className="mt-8 border border-zinc-200 rounded-xl overflow-hidden">
          <iframe
            src="/final-report.pdf"
            className="w-full h-[800px]"
            title="Bachelor’s Final Year Project Report"
          />
        </div>
      </div>
    </main>
  );
}