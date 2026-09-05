import "./App.css";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";

const users = [
  { name: "Maya Chen", role: "Product designer", status: "Active" },
  { name: "Jordan Lee", role: "Frontend engineer", status: "Active" },
  { name: "Sam Rivera", role: "Content strategist", status: "Away" },
];

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Component workshop</p>
          <h1>Build once. Use everywhere.</h1>
          <p className="intro">
            A small React workspace showing how focused components can create a
            consistent interface through props.
          </p>
        </div>
        <Button text="Create workspace" variant="primary" onClick={() => {}} />
      </header>

      <section className="section" aria-labelledby="cards-heading">
        <div className="section-heading">
          <p className="eyebrow">01 / Cards</p>
          <h2 id="cards-heading">Flexible content blocks</h2>
          <p>Two cards, one shared structure, different content.</p>
        </div>
        <div className="card-grid">
          <Card
            title="Design system"
            description="Keep visual decisions close to the components that use them."
          >
            <Button
              text="Explore library"
              variant="secondary"
              onClick={() => {}}
            />
          </Card>
          <Card
            title="Team directory"
            description="Give every teammate a clear place to find context and ownership."
            image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
          >
            <Button text="View team" variant="danger" disabled />
          </Card>
        </div>
      </section>

      <section
        className="section table-section"
        aria-labelledby="table-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">02 / Table</p>
          <h2 id="table-heading">People at a glance</h2>
          <p>Structured data rendered with reusable column definitions.</p>
        </div>
        <Table columns={["Name", "Role", "Status"]} data={users} striped />
      </section>
    </main>
  );
}

export default App;
