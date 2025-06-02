export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <form className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="border rounded px-4 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="border rounded px-4 py-2 min-h-[120px]"
          required
        />
        <button
          type="submit"
          className="bg-black text-white rounded px-6 py-2 font-semibold hover:bg-gray-900 transition"
          disabled
        >
          Coming Soon
        </button>
      </form>
      <div className="text-center text-gray-500 text-sm">
        Or email me at <a href="mailto:jungli0beast@gmail.com" className="underline">tusharpanchal@mail.com</a><br />
        Find me on <a href="https://www.linkedin.com/in/tushar-p-bb6466122/" className="underline">LinkedIn</a>
      </div>
    </div>
  );
}
