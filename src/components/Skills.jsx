import skills from "../data/skills.json";

export default function Skills() {
  return (
    <section className="skills">
        <div className="wrapper skills__wrapper bottom-border">
            {skills.map((skill, idx) => (
            <div key={idx} className="skills__item">{skill}</div>
            ))}
        </div>
        <img
            className="skills__rings"
            src="/assets/icons/pattern-rings.svg"
            alt=""
            width="530"
            height="129"
        />
    </section>
  );
}