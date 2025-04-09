export default function Welcome() {
  return (
    <>
      <section style={{ padding: "3.5rem 0" }}>
        <div
          style={{
            margin: "0 auto",
            padding: "0 1.25rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div className="image">
            <img src="/images/avatar-1.webp" alt="avatar" />
          </div>
          <div className="info" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h2
              style={{
                fontWeight: "700",
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
              }}
            >
              Welcome to the <br /> online centers
            </h2>
            <ul
              style={{
                listStyle: "initial",
              }}
            >
              <li>Start learning from your experience</li>
              <li>Enhance your skills with us now</li>
              <li>Do your favorite course</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
