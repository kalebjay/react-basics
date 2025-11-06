import { CORE_CONCEPTS } from './data.js'; 
import Header from './components/Header.jsx';


/* Original way to declare function
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}  */

// new way using destructuring
function CoreConcept({ title, description, image }) {
  return (
     <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* Original way, .notation */}
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description} 
            image={CORE_CONCEPTS[0].image}
          /> 
          {/* New way, using destructuring */}
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
