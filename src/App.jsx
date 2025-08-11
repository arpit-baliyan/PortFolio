import React from "react";

// Single-file React + Tailwind portfolio component
// Replace placeholders (NAME, BIO, EMAIL, RESUME_LINK, IMAGES) with your own content.

export default function Portfolio() {
  const name = "Arpit Baliyan";
  const title = "Full‑Stack Developer \u2022 Data Scientist";
  const location = "India";
  const email = "arpit@example.com"; // <-- replace
  const resumeLink = "/resume.pdf"; // <-- replace with real link or cloud URL

  const about = `I'm a developer and data scientist with a background in web apps, machine learning, and systems. ` +
    `I have experience building React + TypeScript frontends, machine learning models (deep learning for classification and churn prediction), ` +
    `and small tools like a Prescription Affordability Comparison Engine. I scored a 98 percentile in JEE and I'm learning formal verification and OOP in C.`;

  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "TensorFlow / PyTorch",
    "Machine Learning & Deep Learning",
    "SQL / Databases",
    "Docker",
    "Git"
  ];

  const projects = [
    {
      title: "Prescription Affordability Comparison Engine",
      desc: "A web app that compares drug prices across pharmacies, insurance, and discount programs. Built with React and server APIs.",
      tags: ["React", "API", "Price Comparison"],
      link: "#"
    },
    {
      title: "LeetMetric",
      desc: "Fetches and visualizes LeetCode user stats (problems solved by difficulty, rank, acceptance rate).",
      tags: ["JavaScript", "APIs", "Visualization"],
      link: "#"
    },
    {
      title: "Churn Prediction (Deep Learning)",
      desc: "End-to-end data science project for churn prediction using ANN, feature engineering, and model deployment.",
      tags: ["Python", "Deep Learning", "Data Science"],
      link: "#"
    },
    {
      title: "Cat vs Dog Classifier (CNN)",
      desc: "Computer vision project using convolutional neural networks to classify cats and dogs.",
      tags: ["Computer Vision", "CNN", "TensorFlow"],
      link: "#"
    },
    {
      title: "React API Request Page (Postman-like)",
      desc: "A lightweight tool to build and send HTTP requests from a web UI, similar to Postman/Hoppscotch.",
      tags: ["React", "Tools"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-white font-semibold">{name}</h1>
            <p className="text-sm text-white-600 mt-0.5">{title} — {location}</p>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#about" className="text-sm hover:underline">About</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
            <a href={resumeLink} target="_blank" rel="noreferrer" className="ml-3 inline-block px-4 py-2 border rounded-lg text-sm font-medium">Resume</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-sm text-indigo-600 font-medium">Hello — I build things</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight">{name}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">{about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">See my projects</a>
              <a href={resumeLink} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg text-sm">Download resume</a>
              <a href={`mailto:${email}`} className="px-4 py-2 border rounded-lg text-sm">Email me</a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-600">Top skills</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="text-xs px-3 py-1 border rounded-full">{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm bg-white p-4 rounded-2xl shadow-lg">
              <img src="image1.jpg" alt="profile" className="w-full h-56 object-cover rounded-lg" />
              <div className="mt-4">
                <p className="text-sm text-gray-500">Profile snapshot</p>
                <h4 className="font-semibold mt-1">{title}</h4>
                <p className="text-xs text-gray-500 mt-2">Available for internships and freelance projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Selected Projects</h3>
            <a href="#contact" className="text-sm hover:underline">Want collaboration?</a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="bg-white p-5 rounded-xl shadow">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.link} className="text-sm px-3 py-2 border rounded">View</a>
                  <a href={`mailto:${email}?subject=Project: ${encodeURIComponent(p.title)}`} className="text-sm px-3 py-2 border rounded">Discuss</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT + EDUCATION */}
        <section id="about" className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">About me</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">{about}</p>

            <div className="mt-6">
              <h4 className="font-semibold">Interests & learning</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Formal verification and object-oriented design in C (beginner)</li>
                <li>Data science, model interpretability, and production ML</li>
                <li>Web development with React + TypeScript</li>
              </ul>
            </div>
          </div>

          <aside className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Education & Highlights</h4>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li><strong>JEE:</strong> 98 percentile</li>
              <li><strong>Notable:</strong> Built price-comparison & ML projects</li>
              <li><strong>Current:</strong> IIIT/college coursework, assignments, and personal projects</li>
            </ul>
          </aside>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white p-6 rounded-xl shadow mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">Get in touch</h3>
              <p className="mt-3 text-gray-600">I’m available for internships, freelance, and collaboration on open-source projects. Prefer email — I usually reply within a few days.</p>

              <div className="mt-6">
                <p className="text-sm text-gray-600">Email</p>
                <a href={`mailto:${email}`} className="block mt-1 text-indigo-600 font-medium">{email}</a>

                <p className="text-sm text-gray-600 mt-4">Location</p>
                <p className="mt-1 text-gray-700">{location}</p>
              </div>
            </div>

            <div>
              <form action={`mailto:${email}`} method="GET" className="space-y-3">
                <div>
                  <label className="text-sm">Name</label>
                  <input name="name" className="mt-1 w-full border px-3 py-2 rounded" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea name="body" rows={4} className="mt-1 w-full border px-3 py-2 rounded" placeholder="How can I help?" />
                </div>
                <div className="flex items-center gap-3">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
                  <a href={resumeLink} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Download resume</a>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-6">
          Built with React + Tailwind. • <a href="#" className="hover:underline">Privacy</a>
        </footer>
      </main>
    </div>
  );
}
